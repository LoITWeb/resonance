import "./Carousel.css";
import "./CarouselResponsive.css";
import { initCarousel } from "/src/scripts/carousel-slider.js";
const carousel_1Url = new URL("./images/carousel_1.webp", import.meta.url).href;
const carousel_2Url = new URL("./images/carousel_2.webp", import.meta.url).href;
const carousel_3Url = new URL("./images/carousel_3.webp", import.meta.url).href;

let carouselDestroy = null;

export function Carousel() {
	const markup = `
    <section class="carousel">
      <div class="container">
        <h2 class="carousel_title">Your Style. Your Sound.</h2>
        <p class="carousel_text">
          Studio-grade acoustics that dissolve distractions and awaken clarity.
        </p>
        <div class="slider_carousel">
          <div class="carousel__track">
            <div class="card-container">
              <div class="card">
                <img src="${carousel_1Url}" alt="Yellow headphones">
              </div>
            </div>
            <div class="card-container">
              <div class="card">
                <img src="${carousel_2Url}" alt="Green headphones">
              </div>
            </div>
            <div class="card-container">
              <div class="card">
                <img src="${carousel_3Url}" alt="Red headphones">
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-pagination">
          <span class="dot yellow active" data-index="0"></span>
          <span class="dot green" data-index="1"></span>
          <span class="dot red" data-index="2"></span>
        </div>
        <p class="color_text">Choose a color that fits your flow.</p>
      </div>
    </section>
  `;

	requestAnimationFrame(() => {
		if (typeof carouselDestroy === "function") {
			try { carouselDestroy(); } catch (e) { /* safe */ }
			carouselDestroy = null;
		}
		carouselDestroy = initCarousel(".carousel");
	});

	return markup;
}
