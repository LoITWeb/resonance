import "./Features.css";
import "./FeaturesResponsive.css";
import { initFeaturesSlider } from "/src/scripts/features-slider.js";
const features_1Url = new URL("./images/features_1.webp", import.meta.url).href;

let featuresDestroy = null;

export function Features() {
	const markup = `
    <section class="features">
      <div class="container">
        <div class="features-slider">
          <div class="features-track">
            ${Array.from({ length: 7 }, (_, i) => `
              <div class="features-slide ${i % 2 === 1 ? "two" : ""}">
                <div class="features-card">
                  <p>Deep lows. Lush mids. Airy highs. All perfectly in balance.</p>
                  <img src="${features_1Url}" alt="Feature ${i + 1}">
                </div>
              </div>
            `).join("")}
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
		featuresDestroy = initFeaturesSlider(".features");
	});

	return markup;
}
