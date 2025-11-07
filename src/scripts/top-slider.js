export function initTopSlider(rootSelector = ".top") {
	if (typeof window === "undefined") return () => { };
	const root = document.querySelector(rootSelector);
	if (!root) return () => { };

	// Если уже инициализировано — вернём функцию destroy (никаких дублей)
	if (root.dataset.topInit === "1") {
		return () => { }; // noop destroy
	}
	root.dataset.topInit = "1";

	const slides = Array.from(root.querySelectorAll(".top_slide"));
	const dots = Array.from(root.querySelectorAll(".top_dots .dot"));
	if (!slides.length || !dots.length) {
		// если нет нужных элементов — очистим флаг и выйдем
		delete root.dataset.topInit;
		return () => { };
	}

	let activeIndex = Math.floor(slides.length / 2);
	let isAnimating = false;
	const ANIM_MS = 320;

	function showSlide(index) {
		if (isAnimating || index === activeIndex) return;
		isAnimating = true;

		const current = slides[activeIndex];
		const next = slides[index];

		current.classList.remove("active");
		current.classList.add("fade-out");

		next.classList.add("fade-in");

		dots[activeIndex].classList.remove("active");
		dots[index].classList.add("active");

		setTimeout(() => {
			current.classList.remove("fade-out");
			next.classList.remove("fade-in");
			next.classList.add("active");
			activeIndex = index;
			isAnimating = false;
		}, ANIM_MS);
	}

	const onDotClick = (e) => {
		const dot = e.currentTarget;
		const idx = parseInt(dot.dataset.index, 10);
		if (!Number.isNaN(idx)) showSlide(idx);
	};

	dots.forEach(d => d.addEventListener("click", onDotClick));

	// вернуть destroy функцию — снимает слушатели и флаг и позволяет корректную реинициализацию
	const destroy = () => {
		dots.forEach(d => d.removeEventListener("click", onDotClick));
		delete root.dataset.topInit;
	};

	return destroy;
}
