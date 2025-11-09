import { Hero, Carousel, Features, Personalize, Sub } from "./index.js";

export function Home() {
	return `
    ${Hero()}                                                                                      
    ${Carousel()}                                                                                      
    ${/* Features() */ ''}                                                                                      
    ${/* Personalize() */ ''}                                                                                      
    ${/* Sub() */ ''}                                                                                      
  `;
}