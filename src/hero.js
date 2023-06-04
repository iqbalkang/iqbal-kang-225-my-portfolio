// import { gsap } from '/node_modules/gsap/index.js';
// import { ScrollTrigger } from '/node_modules/gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

// const line = document.querySelector('.hero__seperator');
const container = document.querySelector('.container');
const about = document.querySelector('.about');
const headingSeperators = document.querySelectorAll('.hero__heading-seperator');
const heading = document.querySelectorAll('.stack');
const scroll = document.querySelector('.hero__scroll');
const headingBottom = document.querySelector('.hero__heading-bottom');
const heroIcons = document.querySelector('.hero__icons-only-box');
const heroTextSvgs = document.querySelectorAll('.hero__component-text path');

// console.log(heroIcons);

heroTextSvgs.forEach((svg) => {
  const length = svg.getTotalLength();

  svg.style.strokeDasharray = length;
  svg.style.strokeDashoffset = length;
});

const animateSvg = () => {
  const tl = gsap.timeline();
  tl.to(heroTextSvgs, { strokeDashoffset: 0, duration: 2, stagger: 0.2, delay: -2.5, stroke: '#e9c46a' });
};

const createScroller = () => {
  for (let i = 0; i <= 10; i++) {
    const scrollerEl = document.createElement('div');
    scrollerEl.setAttribute('class', 'hero__scroller');
    scroll.appendChild(scrollerEl);
  }

  const scroller = document.querySelectorAll('.hero__scroller');
  const scrollerText = document.querySelectorAll('.hero__scroll-text > p');

  const scrollerTl = gsap.timeline({ repeat: -1 });
  scrollerTl
    .to(scroller, { y: '20px', stagger: 0.05, delay: 0.5, ease: 'power4.inOut', duration: 2 })
    .to(scroller, { opacity: 0 })
    .to(scrollerText, { yPercent: 100 }, 3);
};

createScroller();

const initialLoadTl = gsap.timeline({ onComplete: animateSvg });
initialLoadTl
  .from(headingSeperators, { y: '-500px', opacity: 0, delay: 0.5, ease: 'back' })
  .from(headingBottom.children[0], { y: '50vh', ease: 'power4' })
  .from(headingBottom.children[1], { y: '50vh', ease: 'back' }, '<+0.1')
  .from(heroIcons.children, { scale: 0, ease: 'back', stagger: 0.1 }, '<');

const textSepratorFunction = (timelime) => {
  ScrollTrigger.create({
    trigger: about,
    start: 'top 97%',
    // end: '+300px',
    scrub: 1,
    animation: timelime,
  });
};

ScrollTrigger.matchMedia({
  '(min-width: 2500px)': function () {
    const tl = gsap.timeline();
    tl.to(heading[0], { x: '-400px' }).to(heading[1], { x: '400px' }, 0).to(headingSeperators, { scaleX: 2 }, 0);

    textSepratorFunction(tl);
  },

  '(max-width: 2499px)': function () {
    const tl = gsap.timeline();
    tl.to(heading[0], { x: '-400px' }).to(heading[1], { x: '400px' }, 0).to(headingSeperators, { scaleX: 3 }, 0);

    textSepratorFunction(tl);
  },

  '(max-width: 1709px)': function () {
    const tl = gsap.timeline();
    tl.to(heading[0], { x: '-400px' }).to(heading[1], { x: '400px' }, 0).to(headingSeperators, { scaleX: 4 }, 0);

    textSepratorFunction(tl);
  },
});

// ScrollTrigger.create({
//   scroller: container,
//   trigger: about,
//   markers: true,
//   start: 'top 90%',
//   animation: gsap.to(line, { width: '100%' }),
// });
