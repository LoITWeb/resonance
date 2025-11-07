export function initCarousel(rootSelector = ".carousel") {
  const root = document.querySelector(rootSelector);
  if (!root) return;

  // Проверяем, не инициализирован ли уже
  if (root.dataset.carouselInit === "1") return;
  root.dataset.carouselInit = "1";

  const track = root.querySelector(".carousel__track");
  const cards = track ? Array.from(track.querySelectorAll(".card-container")) : [];
  const dots = Array.from(root.querySelectorAll(".carousel-pagination .dot"));

  if (!track || !cards.length) return;

  let activeIndex = Math.floor(cards.length / 2);

  const update = () => {
    cards.forEach((card, i) => {
      card.classList.remove("prev", "active", "next");
      if (i === activeIndex) card.classList.add("active");
      else if (i === (activeIndex - 1 + cards.length) % cards.length) card.classList.add("prev");
      else if (i === (activeIndex + 1) % cards.length) card.classList.add("next");
    });

    dots.forEach((dot, i) => dot.classList.toggle("active", i === activeIndex));
  };

  const goTo = (index) => {
    activeIndex = (index + cards.length) % cards.length;
    update();
  };

  // Навигация по точкам
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const idx = Number(dot.dataset.index);
      if (!Number.isNaN(idx)) goTo(idx);
    });
  });

  // Первичная отрисовка
  update();

  // Возвращаем функцию для удаления событий при уходе со страницы
  return function destroyCarousel() {
    root.dataset.carouselInit = "0";
    dots.forEach((dot) => {
      const clone = dot.cloneNode(true);
      dot.replaceWith(clone);
    });
  };
}
