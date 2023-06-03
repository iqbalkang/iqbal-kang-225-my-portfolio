gsap.registerPlugin(ScrollTrigger);

const nextSection = document.querySelector('.project__next');
const moonSvg = document.querySelector('.project__next-moon');

const nextProjectHeading = document.querySelector('.project__next-heading');
const nextProjectImage = document.querySelector('.project__next-image');

const nextProjectImageHoverTl = gsap.timeline({ paused: true });
nextProjectImageHoverTl.to(nextProjectImage, { y: '30%', ease: 'power4' }).to(nextProjectHeading, { opacity: 0.5 }, 0);

nextProjectImage.addEventListener('mouseenter', () => {
  nextProjectImageHoverTl.play();
});

nextProjectImage.addEventListener('mouseleave', () => {
  nextProjectImageHoverTl.reverse();
});

const tl = gsap.timeline();

tl.from(moonSvg, { yPercent: -100, ease: 'power1.inOut' });

ScrollTrigger.create({
  trigger: nextSection,
  start: 'top 90%',
  end: '+100px 80%',
  scrub: 2,
  animation: tl,
});
