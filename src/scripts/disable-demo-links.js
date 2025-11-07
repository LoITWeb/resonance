// Отключает переходы по демо-ссылкам (например, href="#" или href="#!")
export function disableDemoLinks() {
	document.addEventListener("click", (e) => {
		const link = e.target.closest("a");
		if (!link) return;

		const href = link.getAttribute("href");

		// Игнорируем пустые или фейковые ссылки
		if (href === "#" || href === "#!" || href === "" || href === "javascript:void(0)") {
			e.preventDefault();
			e.stopPropagation();

			// Для наглядности можно добавить небольшой визуальный эффект (по желанию)
			link.style.transition = "opacity 0.15s ease";
			link.style.opacity = "0.6";
			setTimeout(() => (link.style.opacity = "1"), 150);
		}
	});
}
