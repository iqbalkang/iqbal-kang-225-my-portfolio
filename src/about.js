import { gsap } from '/node_modules/gsap/index.js';
import { ScrollTrigger } from '/node_modules/gsap/ScrollTrigger.js';
import { ScrollToPlugin } from '/node_modules/gsap/ScrollToPlugin.js';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const aboutSection = document.querySelector('.about');
const aboutBtn = document.querySelector('.about__btn');
const btnImg = document.querySelector('.about__btn img');

aboutBtn.addEventListener('click', (e) => {
  gsap.set(window, { scrollTo: '.contact', fastScrollEnd: true });
});

// aboutBtn.addEventListener('mousemove', (e) => {
//   const x = e.offsetX;
//   const y = e.offsetY;

//   // btnImg.style.display = 'flex';
//   btnImg.style.top = y + 'px';
//   btnImg.style.left = x + 'px';
// });
