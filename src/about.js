// import { gsap } from '/node_modules/gsap/index.js';
// import { ScrollTrigger } from '/node_modules/gsap/ScrollTrigger.js';
// import { ScrollToPlugin } from '/node_modules/gsap/ScrollToPlugin.js';

gsap.registerPlugin(ScrollTrigger);

const aboutSection = document.querySelector('.about');
// const aboutBtn = document.querySelector('.about__btn');
// const btnImg = document.querySelector('.about__btn img');

const aboutBtns = document.querySelector('.about__btns-box');
const aboutText = document.querySelectorAll('.about__text p');

const headingAnimation = () => {
  const heading = document.querySelector('.about__heading');
  const headingSpan = document.querySelector('.about__span');

  const timelime = gsap.timeline();

  timelime.from(heading, { x: '100' }).from(headingSpan, { x: '-100' }, '<');

  ScrollTrigger.create({
    trigger: aboutSection,
    start: 'top 90%',
    animation: timelime,
  });
};

const textAnimation = (text) => {
  const timelime = gsap.timeline();

  timelime.from(text, { x: '-50' });

  ScrollTrigger.create({
    trigger: text,
    start: 'top 100%',
    animation: timelime,
  });
};

aboutText.forEach((text) => {
  textAnimation(text);
});

ScrollTrigger.create({
  trigger: aboutBtns,
  start: 'top 100%',
  animation: gsap.from(aboutBtns.children, { scale: 0.6, ease: 'power2.Out' }),
});

headingAnimation();
