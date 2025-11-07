import "./Hero.css";
import "./HeroResponsive.css";
const headphoneUrl = new URL("./images/headphone.webp", import.meta.url).href;
const headphone_2xUrl = new URL("./images/headphone@2x.webp", import.meta.url).href;

export function Hero() {
	return `
    <section class="hero">
      <div class="container">
        <h1 class="hero_title">Resonance</h1>
				<picture>
					<source srcset="${headphoneUrl} 1x, ${headphone_2xUrl} 2x" type="image/jpeg" />
					<img src="${headphoneUrl}" alt="Hero" class="hero__img" />
				</picture>
				<p class="hero_back">Aura Pro II</p>
      </div>
    </section>
  `;
}