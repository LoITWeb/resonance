var e={};let t=new URL(e=import.meta.resolve("aYQdk")).href,s=new URL(e).href,a=new URL(import.meta.resolve("c7TJV")).href,o=new URL(import.meta.resolve("3scE4")).href,i=new URL(import.meta.resolve("70jJ5")).href,l=new URL(import.meta.resolve("lWSE0")).href,r=new URL(import.meta.resolve("iTRBr")).href,c=new URL(import.meta.resolve("659pi")).href,n=new URL(import.meta.resolve("1k3F0")).href,d=new URL(import.meta.resolve("bZa42")).href,m=null,p=new URL(import.meta.resolve("6O5nS")).href,v=new URL(import.meta.resolve("6gkmd")).href,u=[{text:"Deep lows. Lush mids. Airy highs. All perfectly in balance.",img:p,imgMobile:v},{text:"Deep lows. Lush mids. Airy highs. All perfectly in balance.",img:p,imgMobile:v},{text:"Deep lows. Lush mids. Airy highs. All perfectly in balance.",img:p,imgMobile:v},{text:"Deep lows. Lush mids. Airy highs. All perfectly in balance.",img:p,imgMobile:v},{text:"Deep lows. Lush mids. Airy highs. All perfectly in balance.",img:p,imgMobile:v},{text:"Deep lows. Lush mids. Airy highs. All perfectly in balance.",img:p,imgMobile:v},{text:"Deep lows. Lush mids. Airy highs. All perfectly in balance.",img:p,imgMobile:v}],f=null,h=new URL(import.meta.resolve("bGLn3")).href,g=new URL(import.meta.resolve("b8wkN")).href,L=new URL(import.meta.resolve("3VzwE")).href,b=[{img:h},{img:g},{img:L},{img:h},{img:g},{img:L},{img:h}],_=null;function y(){let e,t,s,a,o;return`
    
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
  `,requestAnimationFrame(()=>{if("function"==typeof m){try{m()}catch(e){}m=null}m=function(e=".carousel"){let t=document.querySelector(e);if(!t||"1"===t.dataset.carouselInit)return;t.dataset.carouselInit="1";let s=t.querySelector(".carousel__track"),a=s?Array.from(s.querySelectorAll(".card-container")):[],o=Array.from(t.querySelectorAll(".carousel-pagination .dot"));if(!s||!a.length)return;let i=Math.floor(a.length/2),l=()=>{a.forEach((e,t)=>{e.classList.remove("prev","active","next"),t===i?e.classList.add("active"):t===(i-1+a.length)%a.length?e.classList.add("prev"):t===(i+1)%a.length&&e.classList.add("next")}),o.forEach((e,t)=>e.classList.toggle("active",t===i))};return o.forEach(e=>{e.addEventListener("click",()=>{let t=Number(e.dataset.index);Number.isNaN(t)||(i=(t+a.length)%a.length,l())})}),l(),function(){t.dataset.carouselInit="0",o.forEach(e=>{let t=e.cloneNode(!0);e.replaceWith(t)})}}(".carousel")}),e}                                                                                      
    ${t=u.map((e,t)=>`
      <div class="features-slide ${t%2==1?"two":""}">
        <div class="features-card">
          <p>${e.text}</p>
          <picture>
            <source srcset="${e.imgMobile}" media="(max-width: 900px)">
            <img src="${e.img}" alt="Feature ${t+1}">
          </picture>
        </div>
      </div>
    `).join(""),s=`
    <section class="features">
      <div class="container">
        <div class="features-slider">
          <div class="features-track">
            ${t}
          </div>
        </div>
      </div>
    </section>
  `,requestAnimationFrame(()=>{if("function"==typeof f){try{f()}catch(e){}f=null}f=function(e=".features-slider"){let t,s,a=document.querySelector(e);if(!a||"1"===a.dataset.featuresInit)return;a.dataset.featuresInit="1";let o=a.querySelector(".features-track");if(!o)return;let i=!1,l=e=>{i=!0,o.classList.add("grabbing"),t=e.pageX-o.offsetLeft,s=o.scrollLeft},r=()=>{i=!1,o.classList.remove("grabbing")},c=e=>{if(!i)return;e.preventDefault();let a=(e.pageX-o.offsetLeft-t)*1;o.scrollLeft=s-a};o.addEventListener("mousedown",l),o.addEventListener("mouseleave",r),o.addEventListener("mouseup",r),o.addEventListener("mousemove",c);let n=0,d=0,m=e=>{n=e.touches[0].pageX-o.offsetLeft,d=o.scrollLeft},p=e=>{let t=(e.touches[0].pageX-o.offsetLeft-n)*1;o.scrollLeft=d-t};return o.addEventListener("touchstart",m,{passive:!0}),o.addEventListener("touchmove",p,{passive:!0}),o.addEventListener("dragstart",e=>e.preventDefault()),console.log("✅ Features slider initialized"),function(){a.dataset.featuresInit="0",o.removeEventListener("mousedown",l),o.removeEventListener("mouseleave",r),o.removeEventListener("mouseup",r),o.removeEventListener("mousemove",c),o.removeEventListener("touchstart",m),o.removeEventListener("touchmove",p),console.log("🧹 Features slider destroyed")}}(".features-slider")}),s}                                                                                      
    ${a=b.map((e,t)=>`
      <div class="personalize-slide ${t%2==1?"two":""}">
        <div class="personalize-card">
          <img src="${e.img}" alt="Personalize ${t+1}">
        </div>
      </div>
    `).join(""),o=`
    <section class="personalize">
      <div class="container">
				<h2 class="personalize_title">Every Detail matters</h2>
				<p class="personalize_text">From the stitch to the signal, precision lives here.</p>
        <div class="personalize-slider">
          <div class="personalize-track">
            ${a}
          </div>
        </div>
      </div>
    </section>
  `,requestAnimationFrame(()=>{if("function"==typeof _){try{_()}catch(e){}_=null}_=function(e=".personalize-slider"){let t,s,a=document.querySelector(e);if(!a||"1"===a.dataset.personalizeInit)return;a.dataset.personalizeInit="1";let o=a.querySelector(".personalize-track");if(!o)return;let i=!1,l=e=>{i=!0,o.classList.add("grabbing"),t=e.pageX-o.offsetLeft,s=o.scrollLeft},r=()=>{i=!1,o.classList.remove("grabbing")},c=e=>{if(!i)return;e.preventDefault();let a=(e.pageX-o.offsetLeft-t)*1;o.scrollLeft=s-a};o.addEventListener("mousedown",l),o.addEventListener("mouseleave",r),o.addEventListener("mouseup",r),o.addEventListener("mousemove",c);let n=0,d=0,m=e=>{n=e.touches[0].pageX-o.offsetLeft,d=o.scrollLeft},p=e=>{let t=(e.touches[0].pageX-o.offsetLeft-n)*1;o.scrollLeft=d-t};return o.addEventListener("touchstart",m,{passive:!0}),o.addEventListener("touchmove",p,{passive:!0}),o.addEventListener("dragstart",e=>e.preventDefault()),console.log("✅ Personalize slider initialized"),function(){a.dataset.personalizeInit="0",o.removeEventListener("mousedown",l),o.removeEventListener("mouseleave",r),o.removeEventListener("mouseup",r),o.removeEventListener("mousemove",c),o.removeEventListener("touchstart",m),o.removeEventListener("touchmove",p),console.log("🧹 Personalize slider destroyed")}}(".personalize-slider")}),o}                                                                                      
    
    <section class="sub">
			<div class="container">
				<p class="sub_text">Dreamlike Sound</p>
				<p class="sub_price">Starting at $320 \u{2014} Available Now.</p>
				<button class="sub_btn">Buy Now</button>
			</div>
		</section>
                                                                                        
  `}let w=new URL(import.meta.resolve("jT6kq")).href,x=new URL(import.meta.resolve("77co0")).href,$=new URL(import.meta.resolve("gHB89")).href,k=new URL(import.meta.resolve("fD8lt")).href,E=new URL(import.meta.resolve("kutiB")).href,I=new URL(import.meta.resolve("3kZT9")).href,R=null;function A(){let e;return`
    ${e=`
    <section class="top">
      <div class="container">
        <div class="top_color">
          <p class="top_text">Color</p>
					<div class="slider_block">
          	<div class="top_slider">
            	<div class="top_slide">
              	<picture>
            			<source srcset="${k}" media="(max-width: 768px)">
            			<img src="${w}" alt="Yellow headphones">
          			</picture>
            	</div>
            	<div class="top_slide active">
              	<picture>
            			<source srcset="${E}" media="(max-width: 768px)">
            			<img src="${x}" alt="Green headphones">
          			</picture>
            	</div>
            	<div class="top_slide">
              	<picture>
            			<source srcset="${I}" media="(max-width: 768px)">
            			<img src="${$}" alt="Red headphones">
          			</picture>
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
  `,requestAnimationFrame(()=>{if("function"==typeof R){try{R()}catch(e){}R=null}R=function(e=".top"){if("undefined"==typeof window)return()=>{};let t=document.querySelector(e);if(!t||"1"===t.dataset.topInit)return()=>{};t.dataset.topInit="1";let s=Array.from(t.querySelectorAll(".top_slide")),a=Array.from(t.querySelectorAll(".top_dots .dot"));if(!s.length||!a.length)return delete t.dataset.topInit,()=>{};let o=Math.floor(s.length/2),i=!1,l=e=>{let t=parseInt(e.currentTarget.dataset.index,10);Number.isNaN(t)||function(e){if(i||e===o)return;i=!0;let t=s[o],l=s[e];t.classList.remove("active"),t.classList.add("fade-out"),l.classList.add("fade-in"),a[o].classList.remove("active"),a[e].classList.add("active"),setTimeout(()=>{t.classList.remove("fade-out"),l.classList.remove("fade-in"),l.classList.add("active"),o=e,i=!1},320)}(t)};return a.forEach(e=>e.addEventListener("click",l)),()=>{a.forEach(e=>e.removeEventListener("click",l)),delete t.dataset.topInit}}(".top")}),e}                                                                                      
        
  `}let U=new URL(import.meta.resolve("h4Xjm")).href,S=new URL(import.meta.resolve("jOsUM")).href,q=new URL(import.meta.resolve("7oSY9")).href,z=new URL(import.meta.resolve("hRlNE")).href,N=new URL(import.meta.resolve("8tE4z")).href,D=new URL(import.meta.resolve("Pt9n5")).href,M=new URL(import.meta.resolve("ljO7q")).href,T=new URL(import.meta.resolve("blSOU")).href,F=new URL(import.meta.resolve("93D64")).href,P=new URL(import.meta.resolve("kI3M0")).href,j=new URL(import.meta.resolve("itMTf")).href,B=new URL(import.meta.resolve("aj4J1")).href;function C(){return`
    
    <section class="models">
			<div class="container">
				<h2 class="models_title">Compare Resonance models</h2>
				<p class="models_text">Get help choosing. Chat with a Specialist.</p>
				<div class="models_block">
					<div class="models_card">
						<div class="models_img_block">
							<p class="models_img_title">Aura Pro II</p>
							<img src="${U}" alt="Headphones">
							<p class="models_price">Starting at $320</p>
							<button class="models_btn">Buy Now</button>
						</div>
						<div class="compare_content">
							<div class="compare_block">
								<img src="${z}" alt="Icon">
								<p class="compare_text">R1 Chip</p>
							</div>
							<div class="compare_block">
								<img src="${P}" alt="Icon">
								<p class="compare_text">2x more Active Noise Cancellation</p>
							</div>
							<div class="compare_block">
								<img src="${B}" alt="Icon">
								<p class="compare_text">Personalized Spatial Audio</p>
							</div>
							<div class="compare_block">
								<img src="${M}" alt="Icon">
								<p class="compare_text">Lossless Audio</p>
							</div>
							<div class="compare_block">
								<img src="${F}" alt="Icon">
								<p class="compare_text">None</p>
							</div>
							<div class="compare_block">
								<img src="${F}" alt="Icon">
								<p class="compare_text">None</p>
							</div>
							<div class="compare_block">
								<img src="${q}" alt="Icon">
								<p class="compare_text">Up to 17 hours of listening</p>
							</div>
							<div class="compare_block">
								<img src="${F}" alt="Icon">
								<p class="compare_text">None</p>
							</div>
							<div class="compare_block">
								<img src="${T}" alt="Icon">
								<p class="compare_text">5 microphones total</p>
							</div>
						</div>
					</div>

					<div class="models_card">
						<div class="models_img_block">
							<p class="models_img_title">Flow II</p>
							<img src="${S}" alt="Headphones">
							<p class="models_price">Starting at $160</p>
							<button class="models_btn">Buy Now</button>
						</div>
						<div class="compare_content">
							<div class="compare_block">
								<img src="${z}" alt="Icon">
								<p class="compare_text">R2 Chip</p>
							</div>
							<div class="compare_block">
								<img src="${P}" alt="Icon">
								<p class="compare_text">Active Noise Cancellation</p>
							</div>
							<div class="compare_block">
								<img src="${B}" alt="Icon">
								<p class="compare_text">Personalized Spatial Audio</p>
							</div>
							<div class="compare_block">
								<img src="${F}" alt="Icon">
								<p class="compare_text">None</p>
							</div>
							<div class="compare_block">
								<img src="${D}" alt="Icon">
								<p class="compare_text">Hearing Test and Hearing Protection</p>
							</div>
							<div class="compare_block">
								<img src="${j}" alt="Icon">
								<p class="compare_text">Touch sensor</p>
							</div>
							<div class="compare_block">
								<img src="${q}" alt="Icon">
								<p class="compare_text">Up to 6 hours of listening</p>
							</div>
							<div class="compare_block">
								<img src="${N}" alt="Icon">
								<p class="compare_text">Water resistant</p>
							</div>
							<div class="compare_block">
								<img src="${T}" alt="Icon">
								<p class="compare_text">Dual beamforming microphones</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
                                                                                        		
  `}function H(){let e=document.querySelector(".main"),t={"/":y,"/tech-specs":A,"/compare":C},s=location.hash.replace("#","")||"/";e.innerHTML=t[s]?t[s]():"<h1>404 Not Found</h1>"}window.addEventListener("hashchange",H),window.addEventListener("load",H),document.getElementById("app").innerHTML=`
  <div class="wrapper">                                                                            
    
    <header class="header">
      <div class="container">
        <nav class="nav">

	  			<a href="#/" class="logo">
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
					<a href="#/" class="footer_logo">
						<img src="${s}" alt="Logo" />
					</a>
					<div class="sicial_block">
						<p class="copyright">\xa9 2025 Resonance. All rights reserved.</p>
						<div class="footer_socials">
							<a href="#!">
								<img src="${a}" alt="Discord" />
							</a>
							<a href="#!">
								<img src="${i}" alt="X" />
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
`,function(){let e=document.querySelector(".mobile-nav-btn"),t=document.querySelector(".mobile-nav"),s=document.querySelector(".nav-icon"),a=document.querySelectorAll(".mobile-nav a");if(!e||!t)return;let o=0;function i(){document.body.style.position="",document.body.style.top="",document.body.style.left="",document.body.style.right="",document.body.style.width="",document.body.style.paddingRight="",document.body.classList.remove("no-scroll"),window.scrollTo(0,o),t.classList.remove("mobile-nav--open"),s.classList.remove("nav-icon--active")}e.addEventListener("click",function(){if(t.classList.contains("mobile-nav--open"))i();else{let e;o=window.scrollY,e=window.innerWidth-document.documentElement.clientWidth,document.body.style.position="fixed",document.body.style.top=`-${o}px`,document.body.style.left="0",document.body.style.right="0",document.body.style.width="100%",document.body.style.paddingRight=`${e}px`,document.body.classList.add("no-scroll"),t.classList.add("mobile-nav--open"),s.classList.add("nav-icon--active")}}),a.forEach(e=>e.addEventListener("click",i)),document.addEventListener("click",s=>{!t.classList.contains("mobile-nav--open")||t.contains(s.target)||e.contains(s.target)||i()})}(),H(),document.addEventListener("click",e=>{let t=e.target.closest("a");if(!t)return;let s=t.getAttribute("href");("#"===s||"#!"===s||""===s||"javascript:void(0)"===s)&&(e.preventDefault(),e.stopPropagation(),t.style.transition="opacity 0.15s ease",t.style.opacity="0.6",setTimeout(()=>t.style.opacity="1",150))});
//# sourceMappingURL=resonance.d9fa4c0d.js.map
