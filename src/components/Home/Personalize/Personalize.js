import "./Personalize.css";
import "./PersonalizeResponsive.css";
const personalize_1Url = new URL("./images/personalize_1.webp", import.meta.url).href;
const personalize_2Url = new URL("./images/personalize_2.webp", import.meta.url).href;
const personalize_3Url = new URL("./images/personalize_3.webp", import.meta.url).href;

export function Personalize() {
	return `
    <section class="personalize">
			<div class="container">
				<h2 class="personalize_title">Every Detail matters</h2>
				<p class="personalize_text">From the stitch to the signal, precision lives here.</p>
				<div class="personalize_block">
					<img src="${personalize_1Url}" alt="Personalize photo">
					<img src="${personalize_2Url}" alt="Personalize photo">
					<img src="${personalize_3Url}" alt="Personalize photo">
				</div>
			</div>
		</section>
  `;
}