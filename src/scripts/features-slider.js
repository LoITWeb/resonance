export function initFeaturesSlider(rootSelector = ".features-slider") {
	const root = document.querySelector(rootSelector);
	if (!root) return;

	// предотвращаем повторную инициализацию
	if (root.dataset.featuresInit === "1") return;
	root.dataset.featuresInit = "1";

	const track = root.querySelector(".features-track");
	if (!track) return;

	let isDown = false;
	let startX;
	let scrollLeft;

	// --- drag мышкой ---
	const startDragging = (e) => {
		isDown = true;
		track.classList.add("grabbing");
		startX = e.pageX - track.offsetLeft;
		scrollLeft = track.scrollLeft;
	};

	const stopDragging = () => {
		isDown = false;
		track.classList.remove("grabbing");
	};

	const move = (e) => {
		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - track.offsetLeft;
		const walk = (x - startX) * 1; // скорость реакции
		track.scrollLeft = scrollLeft - walk;
	};

	track.addEventListener("mousedown", startDragging);
	track.addEventListener("mouseleave", stopDragging);
	track.addEventListener("mouseup", stopDragging);
	track.addEventListener("mousemove", move);

	// --- drag на тач-устройствах ---
	let touchStartX = 0;
	let touchScrollLeft = 0;

	const onTouchStart = (e) => {
		touchStartX = e.touches[0].pageX - track.offsetLeft;
		touchScrollLeft = track.scrollLeft;
	};

	const onTouchMove = (e) => {
		const x = e.touches[0].pageX - track.offsetLeft;
		const walk = (x - touchStartX) * 1;
		track.scrollLeft = touchScrollLeft - walk;
	};

	track.addEventListener("touchstart", onTouchStart, { passive: true });
	track.addEventListener("touchmove", onTouchMove, { passive: true });

	track.addEventListener("dragstart", (e) => e.preventDefault());

	console.log("✅ Features slider initialized");

	// Возвращаем destroy-функцию
	return function destroyFeaturesSlider() {
		root.dataset.featuresInit = "0";

		// снимаем все слушатели без утечек
		track.removeEventListener("mousedown", startDragging);
		track.removeEventListener("mouseleave", stopDragging);
		track.removeEventListener("mouseup", stopDragging);
		track.removeEventListener("mousemove", move);
		track.removeEventListener("touchstart", onTouchStart);
		track.removeEventListener("touchmove", onTouchMove);

		console.log("🧹 Features slider destroyed");
	};
}
