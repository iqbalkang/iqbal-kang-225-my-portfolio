import { gsap } from '/node_modules/gsap/index.js';
import { ScrollTrigger } from '/node_modules/gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

const contactSection = document.querySelector('.contact');
const headingWrapper = document.querySelector('.contact__heading-wrapper');
const container = document.querySelector('.container');
// const contactBox = document.querySelector('.contact__box');
// const text = document.querySelectorAll('.contact__box > p');

const tl = gsap.timeline();

tl.from(headingWrapper, { xPercent: 100 });

ScrollTrigger.create({
  scroller: container,
  trigger: headingWrapper,
  markers: true,
  start: 'top 50%',
  end: '+=300px',
  // pin: contactSection,
  scrub: 1,
  animation: tl,
});
