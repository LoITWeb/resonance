import "../styles/reset.css";
import "../styles/base.css";
import { Header, Footer } from "../components/common/index.js";
import { router } from "./router.js";
import mobileNav from "./mobile-nav.js";
import { disableDemoLinks } from "./disable-demo-links.js";

const app = document.getElementById("app");

app.innerHTML = `
  <div class="wrapper">                                                                            
    ${Header()}
    <main class="main"></main>                                                                    
    ${Footer()}
  </div>
`;

mobileNav();
router();
disableDemoLinks();