import { Home, Tech_Specs, Compare } from "../components/index.js";                                                     

export function router() {                                                                         
  const appMain = document.querySelector(".main");                                                 

  const routes = {                                                                                 
    "/": Home,                                                                                     
    "/tech-specs": Tech_Specs,                                                                             
    "/compare": Compare                                                                            
  };

  const hash = location.hash.replace("#", "") || "/";                                              
  const page = routes[hash] ? routes[hash]() : "<h1>404 Not Found</h1>";                           

  appMain.innerHTML = page;                                                                        
}

window.addEventListener("hashchange", router);                                                     
window.addEventListener("load", router);   



// // Делаем lazy loading (динамический импорт если нужно):
// export async function router() {
//   const appMain = document.querySelector(".main");
//   const hash = location.hash.replace("#", "") || "/";

//   const routes = {                                                                                 
//     "/": async () => {
//       const module = await import("../components/Home/Home.js");
//       return module.Home();
//     },
//     "/page-1": async () => {
//       const module = await import("../components/Page_1/Page_1.js");
//       return module.Page_1();
//     },
//     "/page-2": async () => {
//       const module = await import("../components/Page_2/Page_2.js");
//       return module.Page_2();
//     },
//     "/page-3": async () => {
//       const module = await import("../components/Page_3/Page_3.js");
//       return module.Page_3();
//     },
//   };

//   const loadPage = routes[hash];                                                                   

//   if (loadPage) {
//     appMain.innerHTML = `<p class="loading">Loading...</p>`;                                       
//     const content = await loadPage();                                                              
//     appMain.innerHTML = content;                                                                   
//   } else {
//     appMain.innerHTML = `<h1>404 Not Found</h1>`;
//   }
// }

// window.addEventListener("hashchange", router);
// window.addEventListener("load", router);
