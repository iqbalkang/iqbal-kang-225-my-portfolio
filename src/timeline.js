import { gsap } from '/node_modules/gsap/index.js';
import { ScrollTrigger } from '/node_modules/gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

const timelineSection = document.querySelector('.timeline');
const container = document.querySelector('.container');
const timelineWrapper = document.querySelector('.timeline__wrapper');
const bachelors = document.querySelector('.timeline--bachelors');
const animation = document.querySelector('.timeline--animation');
const masters = document.querySelector('.timeline--masters');
const bvt = document.querySelector('.timeline--bvt');
const tyler = document.querySelector('.timeline--tyler');
const salvation = document.querySelector('.timeline--salvation');

const experienceTL = gsap.timeline();
const eventTL = gsap.timeline();

experienceTL.to(timelineWrapper, { x: '-1000px' });
eventTL
  .from(bachelors, { width: '100%', opacity: 1, duration: 1 })
  .to(animation, { opacity: 1, duration: 0.05 }, '<+=0.01')
  .from(animation, { width: '60%', duration: 1 }, '<')
  .to(masters, { opacity: 1, duration: 0.05 })
  .from(masters, { width: '100%', duration: 1 })
  .to(bvt, { opacity: 1, duration: 0.05 })
  .from(bvt, { width: '80%', duration: 1.5 })
  .to(salvation, { opacity: 1, duration: 0.05, delay: 0.25 }, '<+0.1')
  .from(salvation, { width: '80%', duration: 1 }, '<')
  .to(tyler, { opacity: 1, duration: 0.05, delay: 0.15 }, '<+0.1')
  .from(tyler, { width: '90%', duration: 0.75 }, '<');

ScrollTrigger.create({
  scroller: container,
  trigger: timelineSection,
  // markers: true,
  start: 'top 0%',
  end: '+=1000px',
  pin: true,
  scrub: true,
  animation: experienceTL,
});

ScrollTrigger.create({
  scroller: container,
  trigger: timelineSection,
  start: 'top 0%',
  end: '+=1000px',
  scrub: true,
  animation: eventTL,
});
