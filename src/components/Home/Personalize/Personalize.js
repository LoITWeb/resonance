import "./Personalize.css";
import "./PersonalizeResponsive.css";
import { initPersonalizeSlider } from "/src/scripts/personalize-slider.js";
const personalize_1Url = new URL("./images/personalize_1.webp", import.meta.url).href;
const personalize_2Url = new URL("./images/personalize_2.webp", import.meta.url).href;
const personalize_3Url = new URL("./images/personalize_3.webp", import.meta.url).href;
const personalizeSlides = [
	{
		img: personalize_1Url,
	},
	{
		img: personalize_2Url,
	},
	{
		img: personalize_3Url,
	},
	{
		img: personalize_1Url,
	},
	{
		img: personalize_2Url,
	},
	{
		img: personalize_3Url,
	},
	{
		img: personalize_1Url,
	},
];

let personalizeDestroy = null;

export function Personalize() {
	const slidesMarkup = personalizeSlides
		.map(
			(slide, i) => `
      <div class="personalize-slide ${i % 2 === 1 ? "two" : ""}">
        <div class="personalize-card">
          <img src="${slide.img}" alt="Personalize ${i + 1}">
        </div>
      </div>
    `
		)
		.join("");

	const markup = `
    <section class="personalize">
      <div class="container">
				<h2 class="personalize_title">Every Detail matters</h2>
				<p class="personalize_text">From the stitch to the signal, precision lives here.</p>
        <div class="personalize-slider">
          <div class="personalize-track">
            ${slidesMarkup}
          </div>
        </div>
      </div>
    </section>
  `;

	requestAnimationFrame(() => {
		if (typeof personalizeDestroy === "function") {
			try { personalizeDestroy(); } catch (e) { /* safe */ }
			personalizeDestroy = null;
		}
		personalizeDestroy = initPersonalizeSlider(".personalize-slider");
	});

	return markup;
}
