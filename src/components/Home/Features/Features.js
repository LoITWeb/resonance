import "./Features.css";
import "./FeaturesResponsive.css";
import { initFeaturesSlider } from "/src/scripts/features-slider.js";
const featuresUrl = new URL("./images/features.webp", import.meta.url).href;
const features_2Url = new URL("./images/features.webp", import.meta.url).href;
const features_3Url = new URL("./images/features.webp", import.meta.url).href;
const features_4Url = new URL("./images/features.webp", import.meta.url).href;
const features_5Url = new URL("./images/features.webp", import.meta.url).href;
const features_6Url = new URL("./images/features.webp", import.meta.url).href;
const features_7Url = new URL("./images/features.webp", import.meta.url).href;
const featuresSlides = [
	{
		text: "Deep lows. Lush mids. Airy highs. All perfectly in balance.",
		img: featuresUrl,
	},
	{
		text: "Deep lows. Lush mids. Airy highs. All perfectly in balance.",
		img: featuresUrl,
	},
	{
		text: "Deep lows. Lush mids. Airy highs. All perfectly in balance.",
		img: featuresUrl,
	},
	{
		text: "Deep lows. Lush mids. Airy highs. All perfectly in balance.",
		img: featuresUrl,
	},
	{
		text: "Deep lows. Lush mids. Airy highs. All perfectly in balance.",
		img: featuresUrl,
	},
	{
		text: "Deep lows. Lush mids. Airy highs. All perfectly in balance.",
		img: featuresUrl,
	},
	{
		text: "Deep lows. Lush mids. Airy highs. All perfectly in balance.",
		img: featuresUrl,
	},
];

let featuresDestroy = null;

export function Features() {
	const slidesMarkup = featuresSlides
		.map(
			(slide, i) => `
      <div class="features-slide ${i % 2 === 1 ? "two" : ""}">
        <div class="features-card">
          <p>${slide.text}</p>
          <img src="${slide.img}" alt="Feature ${i + 1}">
        </div>
      </div>
    `
		)
		.join("");

	const markup = `
    <section class="features">
      <div class="container">
        <div class="features-slider">
          <div class="features-track">
            ${slidesMarkup}
          </div>
        </div>
      </div>
    </section>
  `;

	requestAnimationFrame(() => {
		if (typeof featuresDestroy === "function") {
			try { featuresDestroy(); } catch (e) { /* safe */ }
			featuresDestroy = null;
		}
		featuresDestroy = initFeaturesSlider(".features-slider");
	});

	return markup;
}
