import { gsap } from '/node_modules/gsap/index.js';
import { ScrollTrigger } from '/node_modules/gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

const liveBtn = document.querySelector('.project__btn-link');
const liveBtnText = document.querySelector('.project__btn-link span');
const liveBtnOutline = document.querySelector('.project__btn-outline');
const projectFeaturesContainer = document.querySelector('.project__features');
const projectFeatures = document.querySelectorAll('.project__feature');

liveBtnOutline.addEventListener('mousemove', (e) => {
  e.stopImmediatePropagation();
  const position = liveBtnOutline.getBoundingClientRect();
  const x = e.clientX - position.left - position.width / 2;
  const y = e.clientY - position.top - position.height / 2;

  console.log(e.pageY);

  gsap.to(liveBtn, { x: x * 0.4, y: y * 0.4, ease: 'power(4)' });
  gsap.to(liveBtnText, { x: x * 0.2, y: y * 0.2, ease: 'power(4)' });
});

liveBtnOutline.addEventListener('mouseleave', (e) => {
  const position = liveBtnOutline.getBoundingClientRect();
  const x = e.pageX - position.left - position.width / 2;
  const y = e.pageY - position.top - position.height / 2;

  gsap.to(liveBtn, { x: 0, y: 0, ease: 'elastic' });
  gsap.to(liveBtnText, { x: 0, y: 0, ease: 'elastic' });
});

projectFeatures.forEach((feature, index) => {
  let tl = gsap.timeline();
  const text = feature.querySelectorAll('p');
  const imageBox = feature.querySelector('.project__image-box');

  if (index % 2 === 0) tl.fromTo(text, { x: '50%' }, { xPercent: -70 }).to(imageBox, { x: '10%' }, '<');
  else tl.fromTo(text, { x: '-50%' }, { xPercent: 70 }).to(imageBox, { x: '-10%' }, '<');

  ScrollTrigger.create({
    animation: tl,
    trigger: feature,
    scrub: true,
  });
});
