import "./Models.css";
import "./ModelsResponsive.css";
const model_1Url = new URL("./images/model_1.webp", import.meta.url).href;
const model_2Url = new URL("./images/model_2.webp", import.meta.url).href;
const batteryUrl = new URL("./images/compare_icons/battery.svg", import.meta.url).href;
const cpuUrl = new URL("./images/compare_icons/cpu.svg", import.meta.url).href;
const dropUrl = new URL("./images/compare_icons/drop.svg", import.meta.url).href;
const earUrl = new URL("./images/compare_icons/ear.svg", import.meta.url).href;
const equalizerUrl = new URL("./images/compare_icons/equalizer.svg", import.meta.url).href;
const microphoneUrl = new URL("./images/compare_icons/microphone.svg", import.meta.url).href;
const minusUrl = new URL("./images/compare_icons/minus.svg", import.meta.url).href;
const simpleUrl = new URL("./images/compare_icons/simple.svg", import.meta.url).href;
const tapUrl = new URL("./images/compare_icons/tap.svg", import.meta.url).href;
const userUrl = new URL("./images/compare_icons/user.svg", import.meta.url).href;

export function Models() {
	return `
    <section class="models">
			<div class="container">
				<h2 class="models_title">Compare Resonance models</h2>
				<p class="models_text">Get help choosing. Chat with a Specialist.</p>
				<div class="models_block">
					<div class="models_card">
						<div class="models_img_block">
							<p class="models_img_title">Aura Pro II</p>
							<img src="${model_1Url}" alt="Headphones">
							<p class="models_price">Starting at $320</p>
							<button class="models_btn">Buy Now</button>
						</div>
						<div class="compare_content">
							<div class="compare_block">
								<img src="${cpuUrl}" alt="Icon">
								<p class="compare_text">R1 Chip</p>
							</div>
							<div class="compare_block">
								<img src="${simpleUrl}" alt="Icon">
								<p class="compare_text">2x more Active Noise Cancellation</p>
							</div>
							<div class="compare_block">
								<img src="${userUrl}" alt="Icon">
								<p class="compare_text">Personalized Spatial Audio</p>
							</div>
							<div class="compare_block">
								<img src="${equalizerUrl}" alt="Icon">
								<p class="compare_text">Lossless Audio</p>
							</div>
							<div class="compare_block">
								<img src="${minusUrl}" alt="Icon">
								<p class="compare_text">None</p>
							</div>
							<div class="compare_block">
								<img src="${minusUrl}" alt="Icon">
								<p class="compare_text">None</p>
							</div>
							<div class="compare_block">
								<img src="${batteryUrl}" alt="Icon">
								<p class="compare_text">Up to 17 hours of listening</p>
							</div>
							<div class="compare_block">
								<img src="${minusUrl}" alt="Icon">
								<p class="compare_text">None</p>
							</div>
							<div class="compare_block">
								<img src="${microphoneUrl}" alt="Icon">
								<p class="compare_text">5 microphones total</p>
							</div>
						</div>
					</div>

					<div class="models_card">
						<div class="models_img_block">
							<p class="models_img_title">Flow II</p>
							<img src="${model_2Url}" alt="Headphones">
							<p class="models_price">Starting at $160</p>
							<button class="models_btn">Buy Now</button>
						</div>
						<div class="compare_content">
							<div class="compare_block">
								<img src="${cpuUrl}" alt="Icon">
								<p class="compare_text">R2 Chip</p>
							</div>
							<div class="compare_block">
								<img src="${simpleUrl}" alt="Icon">
								<p class="compare_text">Active Noise Cancellation</p>
							</div>
							<div class="compare_block">
								<img src="${userUrl}" alt="Icon">
								<p class="compare_text">Personalized Spatial Audio</p>
							</div>
							<div class="compare_block">
								<img src="${minusUrl}" alt="Icon">
								<p class="compare_text">None</p>
							</div>
							<div class="compare_block">
								<img src="${earUrl}" alt="Icon">
								<p class="compare_text">Hearing Test and Hearing Protection</p>
							</div>
							<div class="compare_block">
								<img src="${tapUrl}" alt="Icon">
								<p class="compare_text">Touch sensor</p>
							</div>
							<div class="compare_block">
								<img src="${batteryUrl}" alt="Icon">
								<p class="compare_text">Up to 6 hours of listening</p>
							</div>
							<div class="compare_block">
								<img src="${dropUrl}" alt="Icon">
								<p class="compare_text">Water resistant</p>
							</div>
							<div class="compare_block">
								<img src="${microphoneUrl}" alt="Icon">
								<p class="compare_text">Dual beamforming microphones</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  `;
}