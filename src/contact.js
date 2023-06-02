import { gsap } from '/node_modules/gsap/index.js';
import { ScrollTrigger } from '/node_modules/gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.saveStyles('.contact__wrapper, .contact__logo-svg, .contact__heading');

const contactWrapper = document.querySelector('.contact__wrapper');
const contactSvg = document.querySelector('.contact__logo-svg');
const contactHeading = document.querySelectorAll('.contact__heading');
const contactEmail = document.querySelector('.contact__method--email');
const contactCursor = document.querySelector('.contact__cursor');
const contactCopied = document.querySelector('.contact__copied');

contactEmail.addEventListener('mousemove', (e) => {
  const x = e.offsetX;
  const y = e.offsetY;

  contactCursor.style.display = 'flex';
  contactCursor.style.top = y + 'px';
  contactCursor.style.left = x + 'px';
});

contactEmail.addEventListener('mouseleave', (e) => {
  contactCursor.style.display = 'none';
});

contactEmail.addEventListener('click', (e) => {
  navigator.clipboard.writeText('iqbalkang18@gmail.com');
  contactCopied.classList.add('active');

  setTimeout(() => {
    contactCopied.classList.remove('active');
  }, 1500);
});

ScrollTrigger.matchMedia({
  '(min-width: 1170px)': function () {
    const logoTL = gsap.timeline();
    const headingTl = gsap.timeline();

    logoTL.from(contactSvg, { rotate: 45, scale: 0.8 });
    headingTl.from(contactHeading, { yPercent: 100, ease: 'power4.out' });

    ScrollTrigger.create({
      trigger: contactWrapper,
      start: '1000px 50%',
      end: '+=300px',
      scrub: 1,
      animation: logoTL,
    });

    ScrollTrigger.create({
      trigger: contactWrapper,
      start: '1000px 70%',
      end: '+=300px',
      animation: headingTl,
      toggleActions: 'play none play reverse',
    });
  },

  '(max-width: 1169px)': function () {
    const logoTL = gsap.timeline();
    const headingTl = gsap.timeline();

    logoTL.from(contactSvg, { rotate: 45, scale: 0.8 });
    headingTl.from(contactHeading, { yPercent: 100, ease: 'power4.out' });

    ScrollTrigger.create({
      trigger: contactWrapper,
      start: 'top 50%',
      end: '+=300px',
      scrub: 1,
      animation: logoTL,
    });

    ScrollTrigger.create({
      trigger: contactWrapper,
      start: 'top 70%',
      end: '+=300px',
      animation: headingTl,
      toggleActions: 'play none play reverse',
    });
  },
});
