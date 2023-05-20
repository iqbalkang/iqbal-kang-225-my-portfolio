import { gsap } from '/node_modules/gsap/index.js';
import { ScrollTrigger } from '/node_modules/gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

const liveBtn = document.querySelector('.project__btn-link');
const liveBtnText = document.querySelector('.project__btn-link span');
const liveBtnOutline = document.querySelector('.project__btn-outline');

liveBtnOutline.addEventListener('mousemove', (e) => {
  e.stopImmediatePropagation();
  const position = liveBtnOutline.getBoundingClientRect();
  const x = e.pageX - position.left - position.width / 2;
  const y = e.pageY - position.top - position.height / 2;

  gsap.to(liveBtn, { x: x * 0.4, y: y * 0.4, ease: 'power(4)' });
  gsap.to(liveBtnText, { x: x * 0.2, y: y * 0.2, ease: 'power(4)' });
});

liveBtnOutline.addEventListener('mouseleave', (e) => {
  console.log('out');
  const position = liveBtnOutline.getBoundingClientRect();
  const x = e.pageX - position.left - position.width / 2;
  const y = e.pageY - position.top - position.height / 2;

  gsap.to(liveBtn, { x: 0, y: 0, ease: 'elastic' });
  gsap.to(liveBtnText, { x: 0, y: 0, ease: 'elastic' });
});

console.log(liveBtnText);
