import "./Top.css";
import "./TopResponsive.css";
import { initTopSlider } from "/src/scripts/top-slider.js";
const top_1Url = new URL("./images/top_1.webp", import.meta.url).href;
const top_2Url = new URL("./images/top_2.webp", import.meta.url).href;
const top_3Url = new URL("./images/top_3.webp", import.meta.url).href;

let topDestroy = null;

export function Top() {
	const markup = `
    <section class="top">
      <div class="container">
        <div class="top_color">
          <p class="top_text">Color</p>
					<div class="slider_block">
          	<div class="top_slider">
            	<div class="top_slide">
              	<img src="${top_1Url}" alt="Yellow headphones">
            	</div>
            	<div class="top_slide active">
              	<img src="${top_2Url}" alt="Green headphones">
            	</div>
            	<div class="top_slide">
              	<img src="${top_3Url}" alt="Red headphones">
            	</div>
          	</div>
						<div class="top_dots">
            	<span class="dot" data-index="0" style="background:#D8B74B;"></span>
            	<span class="dot active" data-index="1" style="background:#94915B;"></span>
            	<span class="dot" data-index="2" style="background:#883D39;"></span>
          	</div>
					</div>
        </div>
      </div>
    </section>
  `;

	requestAnimationFrame(() => {
		if (typeof topDestroy === "function") {
			try { topDestroy(); } catch (e) { /* safe */ }
			topDestroy = null;
		}
		topDestroy = initTopSlider(".top");
	});

	return markup;
}
