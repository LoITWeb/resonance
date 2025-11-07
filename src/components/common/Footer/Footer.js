import "./Footer.css";
import "./FooterResponsive.css";
const logoUrl = new URL("/public/images/logo.png", import.meta.url).href;
const discordUrl = new URL("./images/discord.svg", import.meta.url).href;
const metaUrl = new URL("./images/meta.svg", import.meta.url).href;
const xUrl = new URL("./images/x.svg", import.meta.url).href;

export function Footer() {
	return `
    <footer class="footer">
      <div class="container">
        <p class="footer_title">Sound. Presence. Purpose.</p>
				<p class="footer_text">
					Focused on crafting immersive audio experiences.<br />
					We believe sound should not just be heard—it should move you.
				</p>
				<div class="footer_buttons">
					<a href="#!" class="footer_btn">Aura Pro II</a>
					<a href="#!" class="footer_btn">Flow II</a>
				</div>
				<div class="footer_sub">
					<a href="#/">
						<img src="${logoUrl}" alt="Logo" />
					</a>
					<div class="footer_socials">
						<p class="copyright">© 2025 Resonance. All rights reserved.</p>
						<a href="#!">
							<img src="${discordUrl}" alt="Discord" />
						</a>
						<a href="#!">
							<img src="${xUrl}" alt="X" />
						</a>
						<a href="#!">
							<img src="${metaUrl}" alt="Meta" />
						</a>
					</div>
				</div>
      </div>
    </footer>
  `;
}