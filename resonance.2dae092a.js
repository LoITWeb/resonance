var e={};let s=new URL(e=import.meta.resolve("aYQdk")).href,t=new URL(e).href,a=new URL(import.meta.resolve("c7TJV")).href,o=new URL(import.meta.resolve("3scE4")).href,c=new URL(import.meta.resolve("70jJ5")).href,i=new URL(import.meta.resolve("lWSE0")).href,l=new URL(import.meta.resolve("iTRBr")).href,r=new URL(import.meta.resolve("659pi")).href,n=new URL(import.meta.resolve("1k3F0")).href,d=new URL(import.meta.resolve("bZa42")).href,p=null;new URL(import.meta.resolve("jnPlW")).href;new URL(import.meta.resolve("bGLn3")).href;new URL(import.meta.resolve("b8wkN")).href;function m(){let e;return`
    
    <section class="hero">
      <div class="container">
        <h1 class="hero_title">Resonance</h1>
				<picture>
					<source srcset="${i} 1x, ${l} 2x" type="image/jpeg" />
					<img src="${i}" alt="Hero" class="hero__img" />
				</picture>
				<p class="hero_back">Aura Pro II</p>
      </div>
    </section>
                                                                                        
    ${e=`
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
                <img src="${r}" alt="Yellow headphones">
              </div>
            </div>
            <div class="card-container">
              <div class="card">
                <img src="${n}" alt="Green headphones">
              </div>
            </div>
            <div class="card-container">
              <div class="card">
                <img src="${d}" alt="Red headphones">
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
  `,requestAnimationFrame(()=>{if("function"==typeof p){try{p()}catch(e){}p=null}p=function(e=".carousel"){let s=document.querySelector(e);if(!s||"1"===s.dataset.carouselInit)return;s.dataset.carouselInit="1";let t=s.querySelector(".carousel__track"),a=t?Array.from(t.querySelectorAll(".card-container")):[],o=Array.from(s.querySelectorAll(".carousel-pagination .dot"));if(!t||!a.length)return;let c=Math.floor(a.length/2),i=()=>{a.forEach((e,s)=>{e.classList.remove("prev","active","next"),s===c?e.classList.add("active"):s===(c-1+a.length)%a.length?e.classList.add("prev"):s===(c+1)%a.length&&e.classList.add("next")}),o.forEach((e,s)=>e.classList.toggle("active",s===c))};return o.forEach(e=>{e.addEventListener("click",()=>{let s=Number(e.dataset.index);Number.isNaN(s)||(c=(s+a.length)%a.length,i())})}),i(),function(){s.dataset.carouselInit="0",o.forEach(e=>{let s=e.cloneNode(!0);e.replaceWith(s)})}}(".carousel")}),e}                                                                                      
                                                                                          
                                                                                          
                                                                                          
  `}new URL(import.meta.resolve("3VzwE")).href;let v=new URL(import.meta.resolve("jT6kq")).href,h=new URL(import.meta.resolve("77co0")).href,u=new URL(import.meta.resolve("gHB89")).href,f=null;function _(){let e;return`
    ${e=`
    <section class="top">
      <div class="container">
        <div class="top_color">
          <p class="top_text">Color</p>
					<div class="slider_block">
          	<div class="top_slider">
            	<div class="top_slide">
              	<img src="${v}" alt="Yellow headphones">
            	</div>
            	<div class="top_slide active">
              	<img src="${h}" alt="Green headphones">
            	</div>
            	<div class="top_slide">
              	<img src="${u}" alt="Red headphones">
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
  `,requestAnimationFrame(()=>{if("function"==typeof f){try{f()}catch(e){}f=null}f=function(e=".top"){if("undefined"==typeof window)return()=>{};let s=document.querySelector(e);if(!s||"1"===s.dataset.topInit)return()=>{};s.dataset.topInit="1";let t=Array.from(s.querySelectorAll(".top_slide")),a=Array.from(s.querySelectorAll(".top_dots .dot"));if(!t.length||!a.length)return delete s.dataset.topInit,()=>{};let o=Math.floor(t.length/2),c=!1,i=e=>{let s=parseInt(e.currentTarget.dataset.index,10);Number.isNaN(s)||function(e){if(c||e===o)return;c=!0;let s=t[o],i=t[e];s.classList.remove("active"),s.classList.add("fade-out"),i.classList.add("fade-in"),a[o].classList.remove("active"),a[e].classList.add("active"),setTimeout(()=>{s.classList.remove("fade-out"),i.classList.remove("fade-in"),i.classList.add("active"),o=e,c=!1},320)}(s)};return a.forEach(e=>e.addEventListener("click",i)),()=>{a.forEach(e=>e.removeEventListener("click",i)),delete s.dataset.topInit}}(".top")}),e}                                                                                      
    ${`
    <section class="features_tech">
      <div class="tech_specs_content">
					<div class="tech_specs_block">
						<p class="tech_title">Audio Technology</p>
						<p class="tech_text">
							Custom-tuned 40mm Resonance\u{2122} drivers for deep bass.
							Ultra-low distortion signal processing.
							Adaptive Sound Sculpting\u{2122} \u{2014} real-time EQ.
							Spatial Audio Calibration with dynamic head tracking.
							Natural Voice Isolation for calls, focus, and immersive listening.
							Pressure-balancing acoustic vents for long-wear comfort.
						</p>
					</div>
					<div class="tech_specs_block">
						<p class="tech_title">Intelligence</p>
						<p class="tech_text">
							Dual noise-targeting microphones.
							Internal ear-position mic for personalized audio tuning.
							Proximity & motion sensors to detect wear and usage.
							Gesture-aware force sensor for effortless control.
							Accelerometer-assisted voice capture for clarity on the move.
						</p>
					</div>
					<div class="tech_specs_block">
						<p class="tech_title">Power</p>
						<p class="tech_text">
							Custom-designed <span>R2 Sound Core</span> chip.
							Advanced audio algorithms tuned for emotional clarity.
							Onboard neural audio engine for Spatial Audio and Adaptive EQ.
						</p>
					</div>
					<div class="tech_specs_block">
						<p class="tech_title">Controls</p>
						<p class="tech_text">
							Tap once to play/pause or answer a call.
							Tap twice to skip forward or end a call.
							Tap three times to rewind.
							Press and hold to access voice assistant.
							Automatic mute when removed, smart resume when worn.
						</p>
					</div>
					<div class="tech_specs_block">
						<p class="tech_title">Built for the Elements</p>
						<p class="tech_text">
							Rated <span>IPX4</span> for sweat and weather resistance.
							Designed for long sessions, light activity, or relaxed stillness.
						</p>
					</div>
					<div class="tech_specs_block">
						<p class="tech_title">Battery</p>
						<p class="tech_text">
							Up to <span>36 hours</span> total listening time with case.
							Up to <span>6.5 hours</span> on a single charge.
							Fast charge: <span>10 minutes = 2 hours of play.</span>
							USB-C charging + Qi-compatible wireless charging.
							LED status light + Find My compatible tone alert.
						</p>
					</div>
					<div class="tech_specs_block">
						<p class="tech_title">Connectivity</p>
						<p class="tech_text">
							Bluetooth\xae 5.3 low-latency audio.
							Multipoint connection with auto handoff.
							Seamless pairing across all your devices.
						</p>
					</div>
					<div class="tech_specs_block">
						<p class="tech_title">Materials</p>
						<p class="tech_text">
							100% recycled aluminum in internal frames.
							Bio-based mesh ear padding.
							Rare earth magnets sourced from reclaimed materials.
							Plastic-free, fiber-based packaging.
							Assembled in Zero Waste-certified facilities.
						</p>
					</div>
					<div class="tech_specs_block">
						<p class="tech_title">Sustainability & Materials</p>
						<p class="tech_text">
							100% recycled aluminum in internal frames.
							Bio-based mesh ear padding.
							Rare earth magnets sourced from reclaimed materials.
							Plastic-free, fiber-based packaging.
							Assembled in Zero Waste-certified facilities.
						</p>
					</div>
				</div>
    </section>
  `}    
  `}let g=new URL(import.meta.resolve("h4Xjm")).href,b=new URL(import.meta.resolve("jOsUM")).href,y=new URL(import.meta.resolve("7oSY9")).href,w=new URL(import.meta.resolve("hRlNE")).href,L=new URL(import.meta.resolve("8tE4z")).href,k=new URL(import.meta.resolve("Pt9n5")).href,x=new URL(import.meta.resolve("ljO7q")).href,R=new URL(import.meta.resolve("blSOU")).href,I=new URL(import.meta.resolve("93D64")).href,$=new URL(import.meta.resolve("kI3M0")).href,U=new URL(import.meta.resolve("itMTf")).href,S=new URL(import.meta.resolve("aj4J1")).href;function A(){return`
    
    <section class="models">
			<div class="container">
				<h2 class="models_title">Compare Resonance models</h2>
				<p class="models_text">Get help choosing. Chat with a Specialist.</p>
				<div class="models_block">
					<div class="models_card">
						<div class="models_img_block">
							<p class="models_img_title">Aura Pro II</p>
							<img src="${g}" alt="Headphones">
							<p class="models_price">Starting at $320</p>
							<button class="models_btn">Buy Now</button>
						</div>
						<div class="compare_content">
							<div class="compare_block">
								<img src="${w}" alt="Icon">
								<p class="compare_text">R1 Chip</p>
							</div>
							<div class="compare_block">
								<img src="${$}" alt="Icon">
								<p class="compare_text">2x more Active Noise Cancellation</p>
							</div>
							<div class="compare_block">
								<img src="${S}" alt="Icon">
								<p class="compare_text">Personalized Spatial Audio</p>
							</div>
							<div class="compare_block">
								<img src="${x}" alt="Icon">
								<p class="compare_text">Lossless Audio</p>
							</div>
							<div class="compare_block">
								<img src="${I}" alt="Icon">
								<p class="compare_text">None</p>
							</div>
							<div class="compare_block">
								<img src="${I}" alt="Icon">
								<p class="compare_text">None</p>
							</div>
							<div class="compare_block">
								<img src="${y}" alt="Icon">
								<p class="compare_text">Up to 17 hours of listening</p>
							</div>
							<div class="compare_block">
								<img src="${I}" alt="Icon">
								<p class="compare_text">None</p>
							</div>
							<div class="compare_block">
								<img src="${R}" alt="Icon">
								<p class="compare_text">5 microphones total</p>
							</div>
						</div>
					</div>

					<div class="models_card">
						<div class="models_img_block">
							<p class="models_img_title">Flow II</p>
							<img src="${b}" alt="Headphones">
							<p class="models_price">Starting at $160</p>
							<button class="models_btn">Buy Now</button>
						</div>
						<div class="compare_content">
							<div class="compare_block">
								<img src="${w}" alt="Icon">
								<p class="compare_text">R2 Chip</p>
							</div>
							<div class="compare_block">
								<img src="${$}" alt="Icon">
								<p class="compare_text">Active Noise Cancellation</p>
							</div>
							<div class="compare_block">
								<img src="${S}" alt="Icon">
								<p class="compare_text">Personalized Spatial Audio</p>
							</div>
							<div class="compare_block">
								<img src="${I}" alt="Icon">
								<p class="compare_text">None</p>
							</div>
							<div class="compare_block">
								<img src="${k}" alt="Icon">
								<p class="compare_text">Hearing Test and Hearing Protection</p>
							</div>
							<div class="compare_block">
								<img src="${U}" alt="Icon">
								<p class="compare_text">Touch sensor</p>
							</div>
							<div class="compare_block">
								<img src="${y}" alt="Icon">
								<p class="compare_text">Up to 6 hours of listening</p>
							</div>
							<div class="compare_block">
								<img src="${L}" alt="Icon">
								<p class="compare_text">Water resistant</p>
							</div>
							<div class="compare_block">
								<img src="${R}" alt="Icon">
								<p class="compare_text">Dual beamforming microphones</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
                                                                                        		
  `}function E(){let e=document.querySelector(".main"),s={"/":m,"/tech-specs":_,"/compare":A},t=location.hash.replace("#","")||"/";e.innerHTML=s[t]?s[t]():"<h1>404 Not Found</h1>"}window.addEventListener("hashchange",E),window.addEventListener("load",E),document.getElementById("app").innerHTML=`
  <div class="wrapper">                                                                            
    
    <header class="header">
      <div class="container">
        <nav class="nav">

	  			<a href="#/" class="logo">
            <img src="${s}" alt="Logo" />
          </a>

	  			<ul class="nav__list">
	    			<li><a href="#/" class="nav_link">Home</a></li>
	    			<li><a href="#/tech-specs" class="nav_link">Tech Specs</a></li>
	    			<li><a href="#/compare" class="nav_link">Compare</a></li>
          </ul>

	  			<div class="nav__icon">                                                                  
	    			<button class="mobile-nav-btn">
	      			<div class="nav-icon"></div>
	    			</button>
	  			</div>

        </nav>
      </div>
    </header>

    <div class="mobile-nav">                                                                        
      <ul class="mobile-nav__list">
        <li><a href="#/">Home</a></li>
				<li><a href="#/tech-specs">Tech Specs</a></li>
				<li><a href="#/compare">Compare</a></li>
      </ul>
    </div>
  
    <main class="main"></main>                                                                    
    
    <footer class="footer">
      <div class="container">
        <p class="footer_title">Sound. Presence. Purpose.</p>
				<p class="footer_text">
					Focused on crafting immersive audio experiences.<br />
					We believe sound should not just be heard\u{2014}it should move you.
				</p>
				<div class="footer_buttons">
					<a href="#!" class="footer_btn">Aura Pro II</a>
					<a href="#!" class="footer_btn">Flow II</a>
				</div>
				<div class="footer_sub">
					<a href="#/" class="footer_logo">
						<img src="${t}" alt="Logo" />
					</a>
					<div class="sicial_block">
						<p class="copyright">\xa9 2025 Resonance. All rights reserved.</p>
						<div class="footer_socials">
							<a href="#!">
								<img src="${a}" alt="Discord" />
							</a>
							<a href="#!">
								<img src="${c}" alt="X" />
							</a>
							<a href="#!">
								<img src="${o}" alt="Meta" />
							</a>
						</div>
					</div>
				</div>
      </div>
    </footer>
  
  </div>
`,function(){let e=document.querySelector(".mobile-nav-btn"),s=document.querySelector(".mobile-nav"),t=document.querySelector(".nav-icon"),a=document.querySelectorAll(".mobile-nav a");if(!e||!s)return;let o=0;function c(){document.body.style.position="",document.body.style.top="",document.body.style.left="",document.body.style.right="",document.body.style.width="",document.body.style.paddingRight="",document.body.classList.remove("no-scroll"),window.scrollTo(0,o),s.classList.remove("mobile-nav--open"),t.classList.remove("nav-icon--active")}e.addEventListener("click",function(){if(s.classList.contains("mobile-nav--open"))c();else{let e;o=window.scrollY,e=window.innerWidth-document.documentElement.clientWidth,document.body.style.position="fixed",document.body.style.top=`-${o}px`,document.body.style.left="0",document.body.style.right="0",document.body.style.width="100%",document.body.style.paddingRight=`${e}px`,document.body.classList.add("no-scroll"),s.classList.add("mobile-nav--open"),t.classList.add("nav-icon--active")}}),a.forEach(e=>e.addEventListener("click",c)),document.addEventListener("click",t=>{!s.classList.contains("mobile-nav--open")||s.contains(t.target)||e.contains(t.target)||c()})}(),E(),document.addEventListener("click",e=>{let s=e.target.closest("a");if(!s)return;let t=s.getAttribute("href");("#"===t||"#!"===t||""===t||"javascript:void(0)"===t)&&(e.preventDefault(),e.stopPropagation(),s.style.transition="opacity 0.15s ease",s.style.opacity="0.6",setTimeout(()=>s.style.opacity="1",150))});
//# sourceMappingURL=resonance.2dae092a.js.map
