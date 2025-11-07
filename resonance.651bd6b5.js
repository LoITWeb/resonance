var e={};let t=new URL(e=import.meta.resolve("aYQdk")).href,s=new URL(e).href,a=new URL(import.meta.resolve("c7TJV")).href,i=new URL(import.meta.resolve("3scE4")).href,o=new URL(import.meta.resolve("70jJ5")).href,l=new URL(import.meta.resolve("lWSE0")).href,r=new URL(import.meta.resolve("iTRBr")).href,c=new URL(import.meta.resolve("659pi")).href,n=new URL(import.meta.resolve("1k3F0")).href,d=new URL(import.meta.resolve("bZa42")).href,u=null,p=new URL(import.meta.resolve("jnPlW")).href,v=null,m=new URL(import.meta.resolve("bGLn3")).href,h=new URL(import.meta.resolve("b8wkN")).href,f=new URL(import.meta.resolve("3VzwE")).href;function g(){let e,t;return`
    
    <section class="hero">
      <div class="container">
        <h1 class="hero_title">Resonance</h1>
				<picture>
					<source srcset="${l} 1x, ${r} 2x" type="image/jpeg" />
					<img src="${l}" alt="Hero" class="hero__img" />
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
                <img src="${c}" alt="Yellow headphones">
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
  `,requestAnimationFrame(()=>{if("function"==typeof u){try{u()}catch(e){}u=null}u=function(e=".carousel"){let t=document.querySelector(e);if(!t||"1"===t.dataset.carouselInit)return;t.dataset.carouselInit="1";let s=t.querySelector(".carousel__track"),a=s?Array.from(s.querySelectorAll(".card-container")):[],i=Array.from(t.querySelectorAll(".carousel-pagination .dot"));if(!s||!a.length)return;let o=Math.floor(a.length/2),l=()=>{a.forEach((e,t)=>{e.classList.remove("prev","active","next"),t===o?e.classList.add("active"):t===(o-1+a.length)%a.length?e.classList.add("prev"):t===(o+1)%a.length&&e.classList.add("next")}),i.forEach((e,t)=>e.classList.toggle("active",t===o))};return i.forEach(e=>{e.addEventListener("click",()=>{let t=Number(e.dataset.index);Number.isNaN(t)||(o=(t+a.length)%a.length,l())})}),l(),function(){t.dataset.carouselInit="0",i.forEach(e=>{let t=e.cloneNode(!0);e.replaceWith(t)})}}(".carousel")}),e}                                                                                      
    ${t=`
    <section class="features">
      <div class="container">
        <div class="features-slider">
          <div class="features-track">
            ${Array.from({length:7},(e,t)=>`
              <div class="features-slide ${t%2==1?"two":""}">
                <div class="features-card">
                  <p>Deep lows. Lush mids. Airy highs. All perfectly in balance.</p>
                  <img src="${p}" alt="Feature ${t+1}">
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </section>
  `,requestAnimationFrame(()=>{if("function"==typeof v){try{v()}catch(e){}v=null}v=function(e=".features-slider"){let t,s,a=document.querySelector(e);if(!a||"1"===a.dataset.featuresInit)return;a.dataset.featuresInit="1";let i=a.querySelector(".features-track");if(!i)return;let o=!1,l=e=>{o=!0,i.classList.add("grabbing"),t=e.pageX-i.offsetLeft,s=i.scrollLeft},r=()=>{o=!1,i.classList.remove("grabbing")},c=e=>{if(!o)return;e.preventDefault();let a=(e.pageX-i.offsetLeft-t)*1;i.scrollLeft=s-a};i.addEventListener("mousedown",l),i.addEventListener("mouseleave",r),i.addEventListener("mouseup",r),i.addEventListener("mousemove",c);let n=0,d=0,u=e=>{n=e.touches[0].pageX-i.offsetLeft,d=i.scrollLeft},p=e=>{let t=(e.touches[0].pageX-i.offsetLeft-n)*1;i.scrollLeft=d-t};return i.addEventListener("touchstart",u,{passive:!0}),i.addEventListener("touchmove",p,{passive:!0}),i.addEventListener("dragstart",e=>e.preventDefault()),console.log("✅ Features slider initialized"),function(){a.dataset.featuresInit="0",i.removeEventListener("mousedown",l),i.removeEventListener("mouseleave",r),i.removeEventListener("mouseup",r),i.removeEventListener("mousemove",c),i.removeEventListener("touchstart",u),i.removeEventListener("touchmove",p),console.log("🧹 Features slider destroyed")}}(".features")}),t}                                                                                      
    
    <section class="personalize">
			<div class="container">
				<h2 class="personalize_title">Every Detail matters</h2>
				<p class="personalize_text">From the stitch to the signal, precision lives here.</p>
				<div class="personalize_block">
					<img src="${m}" alt="Personalize photo">
					<img src="${h}" alt="Personalize photo">
					<img src="${f}" alt="Personalize photo">
				</div>
			</div>
		</section>
                                                                                        
    
    <section class="sub">
			<div class="container">
				<p class="sub_text">Dreamlike Sound</p>
				<p class="sub_price">Starting at $320 \u{2014} Available Now.</p>
				<button class="sub_btn">Buy Now</button>
			</div>
		</section>
                                                                                        
  `}let y=new URL(import.meta.resolve("jT6kq")).href,b=new URL(import.meta.resolve("77co0")).href,_=new URL(import.meta.resolve("gHB89")).href,L=null;function w(){let e;return`
    ${e=`
    <section class="top">
      <div class="container">
        <div class="top_color">
          <p class="top_text">Color</p>
					<div class="slider_block">
          	<div class="top_slider">
            	<div class="top_slide">
              	<img src="${y}" alt="Yellow headphones">
            	</div>
            	<div class="top_slide active">
              	<img src="${b}" alt="Green headphones">
            	</div>
            	<div class="top_slide">
              	<img src="${_}" alt="Red headphones">
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
  `,requestAnimationFrame(()=>{if("function"==typeof L){try{L()}catch(e){}L=null}L=function(e=".top"){if("undefined"==typeof window)return()=>{};let t=document.querySelector(e);if(!t||"1"===t.dataset.topInit)return()=>{};t.dataset.topInit="1";let s=Array.from(t.querySelectorAll(".top_slide")),a=Array.from(t.querySelectorAll(".top_dots .dot"));if(!s.length||!a.length)return delete t.dataset.topInit,()=>{};let i=Math.floor(s.length/2),o=!1,l=e=>{let t=parseInt(e.currentTarget.dataset.index,10);Number.isNaN(t)||function(e){if(o||e===i)return;o=!0;let t=s[i],l=s[e];t.classList.remove("active"),t.classList.add("fade-out"),l.classList.add("fade-in"),a[i].classList.remove("active"),a[e].classList.add("active"),setTimeout(()=>{t.classList.remove("fade-out"),l.classList.remove("fade-in"),l.classList.add("active"),i=e,o=!1},320)}(t)};return a.forEach(e=>e.addEventListener("click",l)),()=>{a.forEach(e=>e.removeEventListener("click",l)),delete t.dataset.topInit}}(".top")}),e}                                                                                      
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
  `}function k(){return`
    
    <section class="models">
      <div class="container">
        <h1>Hello Models!</h1>
      </div>
    </section>
                                                                                        		
  `}function E(){let e=document.querySelector(".main"),t={"/":g,"/tech-specs":w,"/compare":k},s=location.hash.replace("#","")||"/";e.innerHTML=t[s]?t[s]():"<h1>404 Not Found</h1>"}window.addEventListener("hashchange",E),window.addEventListener("load",E),document.getElementById("app").innerHTML=`
  <div class="wrapper">                                                                            
    
    <header class="header">
      <div class="container">
        <nav class="nav">

	  			<a href="#/">
            <img src="${t}" alt="Logo" />
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
					<a href="#/">
						<img src="${s}" alt="Logo" />
					</a>
					<div class="footer_socials">
						<p class="copyright">\xa9 2025 Resonance. All rights reserved.</p>
						<a href="#!">
							<img src="${a}" alt="Discord" />
						</a>
						<a href="#!">
							<img src="${o}" alt="X" />
						</a>
						<a href="#!">
							<img src="${i}" alt="Meta" />
						</a>
					</div>
				</div>
      </div>
    </footer>
  
  </div>
`,function(){let e=document.querySelector(".mobile-nav-btn"),t=document.querySelector(".mobile-nav"),s=document.querySelector(".nav-icon"),a=document.querySelectorAll(".mobile-nav a");if(!e||!t)return;let i=0;function o(){document.body.style.position="",document.body.style.top="",document.body.style.left="",document.body.style.right="",document.body.style.width="",document.body.style.paddingRight="",document.body.classList.remove("no-scroll"),window.scrollTo(0,i),t.classList.remove("mobile-nav--open"),s.classList.remove("nav-icon--active")}e.addEventListener("click",function(){if(t.classList.contains("mobile-nav--open"))o();else{let e;i=window.scrollY,e=window.innerWidth-document.documentElement.clientWidth,document.body.style.position="fixed",document.body.style.top=`-${i}px`,document.body.style.left="0",document.body.style.right="0",document.body.style.width="100%",document.body.style.paddingRight=`${e}px`,document.body.classList.add("no-scroll"),t.classList.add("mobile-nav--open"),s.classList.add("nav-icon--active")}}),a.forEach(e=>e.addEventListener("click",o)),document.addEventListener("click",s=>{!t.classList.contains("mobile-nav--open")||t.contains(s.target)||e.contains(s.target)||o()})}(),E(),document.addEventListener("click",e=>{let t=e.target.closest("a");if(!t)return;let s=t.getAttribute("href");("#"===s||"#!"===s||""===s||"javascript:void(0)"===s)&&(e.preventDefault(),e.stopPropagation(),t.style.transition="opacity 0.15s ease",t.style.opacity="0.6",setTimeout(()=>t.style.opacity="1",150))});
//# sourceMappingURL=resonance.651bd6b5.js.map
