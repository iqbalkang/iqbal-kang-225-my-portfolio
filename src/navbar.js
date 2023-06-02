import { gsap } from '/node_modules/gsap/index.js';
import { ScrollTrigger } from '/node_modules/gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

const navToggleBtn = document.querySelector('.navbar__toggle-btn');
const navPhone = document.querySelector('.navbar--phone');
const navPhoneBtnLine1 = document.querySelector('.navbar__btn--line-1');
const navPhoneBtnLine2 = document.querySelector('.navbar__btn--line-2');
const navPhoneBtnCircles = document.querySelectorAll('.navbar__btn--circle');
const navPhoneItemsBox = document.querySelectorAll('.navbar__item--phone-box');
const navPhoneItems = document.querySelectorAll('.navbar__item--phone');

const navTl = gsap.timeline({ paused: true });

const navBtnHoverTl = gsap.timeline({ paused: true });
const navBtnActiveTl = gsap.timeline({ paused: true });

navBtnHoverTl
  .to(navPhoneBtnLine1, { x: 0, ease: 'power1.out', duration: 0.05 })
  .to(navPhoneBtnLine2, { width: '40%', ease: 'power2' }, '<+0.1')
  .to(navPhoneBtnCircles, { scale: 1.01, opacity: 1 }, '<');

navBtnActiveTl
  .to(navToggleBtn, { y: '5rem', gap: 0 })
  .to(navPhoneBtnLine2, { width: '40%', rotate: 90, duration: 0.2 }, '<+0.1')
  .to(navToggleBtn, { rotate: 135, duration: 0.2 })
  .to(navPhoneBtnCircles, { width: '12rem', height: '12rem' }, 0)
  .to('.navbar__btn--line', { scale: 0.75, duration: 0.1 });

navTl
  .set('.navbar--phone', { y: 0, opacity: 1 })
  .from(navPhoneItemsBox, { yPercent: -100, stagger: 0.1, ease: 'power1.inOut' });

navPhoneItems.forEach((navItem) => {
  navItem.addEventListener('click', (e) => {
    navTl.reverse();
    navBtnActiveTl.reverse();
    navBtnHoverTl.reverse();
    navToggleBtn.classList.remove('active');
  });
});

navToggleBtn.addEventListener('click', () => {
  navToggleBtn.classList.toggle('active');

  if (navToggleBtn.classList.contains('active')) {
    navBtnActiveTl.play();
    navTl.play();
  } else {
    navBtnActiveTl.reverse();
    navTl.reverse();
  }
});

navToggleBtn.addEventListener('mouseenter', () => {
  navBtnHoverTl.play();
});

navToggleBtn.addEventListener('mouseleave', () => {
  if (navToggleBtn.classList.contains('active')) return;
  navBtnHoverTl.reverse();
});

navToggleBtn.addEventListener('mousemove', (e) => {
  if (!navToggleBtn.classList.contains('active')) return;

  const position = navToggleBtn.getBoundingClientRect();
  const x = e.clientX - position.left - position.width / 8;
  const y = e.clientY - position.top - position.height / 8;

  gsap.to('.navbar__btn--line', { x: -x * 0.4, ease: 'power(4)', duration: 2 });
  gsap.to('.navbar__btn--circle', { x: -x * 0.4, stagger: 0.2, ease: 'power(4)' });
});
