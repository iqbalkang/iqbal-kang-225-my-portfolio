// import { gsap } from '/node_modules/gsap/index.js';
// import { ScrollTrigger } from '/node_modules/gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

const timelineSection = document.querySelector('.timeline');
const timelineWrapper = document.querySelector('.timeline__wrapper');
const bachelors = document.querySelector('.timeline--bachelors');
const animation = document.querySelector('.timeline--animation');
const masters = document.querySelector('.timeline--masters');
const bvt = document.querySelector('.timeline--bvt');
const tyler = document.querySelector('.timeline--tyler');
const salvation = document.querySelector('.timeline--salvation');
const btvIntern = document.querySelector('.timeline--bvtintern');

const experienceTL = gsap.timeline();
const eventTL = gsap.timeline();

// experienceTL.to(timelineWrapper, { x: '-1000px' });

ScrollTrigger.matchMedia({
  '(min-width: 1170px)': function () {
    experienceTL.to(timelineWrapper, { x: '-1500px' });
  },
});

ScrollTrigger.matchMedia({
  '(min-width: 1710px)': function () {
    experienceTL.to(timelineWrapper, { x: '-2000px' });
  },
});

ScrollTrigger.matchMedia({
  '(min-width: 2048px)': function () {
    experienceTL.to(timelineWrapper, { x: '-2500px' });
  },
});

eventTL
  .from(bachelors, { width: '100%', opacity: 1, duration: 1 })
  .to(animation, { opacity: 1, duration: 0.05 }, '<+=0.01')
  .from(animation, { width: '60%', duration: 1 }, '<')
  .to(masters, { opacity: 1, duration: 0.05 })
  .from(masters, { width: '100%', duration: 1 })
  .to(bvt, { opacity: 1, duration: 0.05 })
  .from(bvt, { width: '90%', duration: 1.5 })
  .to(salvation, { opacity: 1, duration: 0.05, delay: 0.25 }, '<+0.1')
  .from(salvation, { width: '105%', duration: 1 }, '<')
  .to(tyler, { opacity: 1, duration: 0.05, delay: 0.15 }, '<+0.1')
  .from(tyler, { width: '90%', duration: 0.75 }, '<')
  .to(btvIntern, { opacity: 1, duration: 0.05, delay: 0.15 })
  .from(btvIntern, { width: '90%', duration: 0.75 }, '<');

ScrollTrigger.create({
  trigger: timelineSection,
  start: 'top 0%',
  end: '+=1000px',
  scrub: 0.5,
  animation: eventTL,
});

ScrollTrigger.create({
  trigger: timelineSection,
  start: 'top 0%',
  end: '+=1000px',
  pin: true,
  scrub: 0.5,
  animation: experienceTL,
});
