import './navbar.js';
import './next.js';
import { getTheme } from './theme.js';
// import { gsap } from '/node_modules/gsap/index.js';
// import { ScrollTrigger } from '/node_modules/gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

import { singleProjectsData, projectsData } from '../projectsData.js';
const liveBtnContainer = document.querySelector('.project__btn-container');
const liveBtn = document.querySelector('.project__btn-link');
const liveBtnText = document.querySelector('.project__btn-link span');
const liveBtnOutline = document.querySelector('.project__btn-outline');
const projectLiveBtnSmall = document.querySelector('.project--live');
const projectGithubBtn = document.querySelector('.project--github');

const projectIntroSection = document.querySelector('.project__intro');

const nextProjectHeading = document.querySelector('.project__next-heading');
const nextProjectImage = document.querySelector('.project__next-image');
const nextProjectBtn = document.querySelector('.project__next-next');
const projectColorsWrapper = document.querySelector('.project__colors-wrapper');
const projectToolsBox = document.querySelector('.project__tools-box');

const animateHighlights = (feature, index) => {
  let tl = gsap.timeline();
  const text = feature.querySelectorAll('p');
  const imageBox = feature.querySelector('.project__image-box');

  if (index % 2 === 0) tl.from(text, { xPercent: 100 }).to(imageBox, { x: '10%' }, '<');
  else tl.from(text, { xPercent: -100 }).to(imageBox, { x: '-10%' }, '<');

  ScrollTrigger.create({
    animation: tl,
    trigger: feature,
    scrub: 0.5,
    start: 'top 80%',
  });
};

let project;
let nextProject;

const loadNextProject = () => {
  const { name, image } = nextProject;
  nextProjectHeading.textContent = name;

  nextProjectImage.src = image;
  nextProjectBtn.href = `project.html?project=${name}`;
};

nextProjectImage.addEventListener('click', () => {
  window.location.href = `project.html?project=${nextProject.name}`;
});

const renderProjectName = () => {
  const { name } = project;
  const projectHeading = document.querySelector('.project__heading');
  const projectIntroContainer = document.querySelector('.project__intro-container');

  if (name === 'atw') return (projectHeading.textContent = 'around the world');
  projectHeading.textContent = name;
};

const generateProjectDescription = (description) => {
  const projectIntroTextContainer = document.querySelector('.project__intro-text-box');

  const descParagraph = document.createElement('p');
  descParagraph.setAttribute('class', 'project__intro-text');
  descParagraph.textContent = description;

  projectIntroTextContainer.appendChild(descParagraph);
};

const generateBtnLinks = () => {
  const { githubLink, liveLink } = project;

  liveBtn.href = liveLink;
  projectGithubBtn.href = githubLink;
  projectLiveBtnSmall.href = liveLink;
};

const renderVideo = () => {
  const projectVideoBox = document.querySelector('.project__macbook-video-box');
  projectVideoBox.innerHTML = `<video src="${project.video}" autoplay loop muted class="project__macbook-video"></video>`;
};

const generateFont = (font) => {
  const projectTypographyBox = document.querySelector('.project__typography-box');

  const { name, image } = font;
  const html = ` <div class="project__typography">
                    <h5 class="project__typography-name">${name}</h5>
                    <div class="project__typography-image-box">
                      <img src="${image}" />
                    </div>
                  </div>`;

  projectTypographyBox.insertAdjacentHTML('afterbegin', html);
};

const generateColor = (color) => {
  const projectColorsBox = document.querySelector('.project__colors');

  const colorBox = document.createElement('div');
  colorBox.setAttribute('class', 'project__color-box');
  projectColorsBox.appendChild(colorBox);

  const colorShade = document.createElement('div');
  colorShade.setAttribute('class', 'project__color');
  colorShade.style.backgroundColor = color;
  colorBox.appendChild(colorShade);

  const colorName = document.createElement('p');
  colorName.setAttribute('class', 'project__color-name');
  colorName.textContent = color;
  colorBox.appendChild(colorName);
};

const generateToolHTML = (tool) => {
  const { name, image } = tool;
  return ` <div class="project__tool">
              <div class="project__tool-image-box">
                <img src="${image}" class="project__tool-image" />
              </div>
              <p class="project__tool-name">${name}</p>
            </div>`;
};

const renderLoginDetailsHTML = (details) => {
  const { email, password } = details;
  return ` <div class="project__details-box">
            <h5 class="project__details-heading">Login Details</h5>
            <h6 class="project__details-text">Email: ${email}</h6>
            <h6 class="project__details-text">Password: ${password} </h6>
          </div>`;
};

const renderHighlightsHTML = (highlightObj) => {
  const projectHighlightsContainer = document.querySelector('.project__features');

  const { highlight, image } = highlightObj;
  const html = `<div class="project__feature">
                  <div class="project__text-box">
                    <p class="project__text project__text--1">${highlight}</p>
                    <p class="project__text project__text--2">${highlight}</p>
                  </div>
                  <div class="project__image-box">
                    <div class="project__overlay"></div>
                    <img src="${image}" alt="project feature image" class="project__image" />
                  </div>
                </div>`;

  projectHighlightsContainer.insertAdjacentHTML('beforeend', html);
};

const generateStack = (s) => {
  const projectToolsWrapper = document.querySelector('.project__tools-wrapper');

  const { type, tools } = s;
  const toolsBox = document.createElement('div');
  toolsBox.setAttribute('class', 'project__tool-wrapper');
  projectToolsWrapper.appendChild(toolsBox);

  const toolHeading = document.createElement('h5');
  toolHeading.setAttribute('class', 'project__tools-heading');
  toolHeading.textContent = type;
  toolsBox.appendChild(toolHeading);

  const toolBox = document.createElement('div');
  toolBox.setAttribute('class', 'project__tools-box');

  tools.map((tool) => {
    const html = generateToolHTML(tool);
    toolBox.insertAdjacentHTML('afterbegin', html);
  });

  toolsBox.appendChild(toolBox);
};

// refactor
const renderColors = () => {
  project.colors.map((color) => generateColor(color));

  ScrollTrigger.create({
    trigger: projectColorsWrapper,
    start: 'top 80%',
    animation: gsap.from('.project__color-box', { yPercent: 50, stagger: 0.1, duration: 1, ease: 'power4' }),
    toggleActions: 'play none none reverse',
  });
};

const renderFonts = () => {
  project.fonts.map((font) => generateFont(font));

  ScrollTrigger.create({
    trigger: '.project__typography-wrapper',
    start: 'top 90%',
    animation: gsap.from('.project__typography-box', { xPercent: 10 }),
    toggleActions: 'play none none reverse',
  });
};

const renderStack = () => {
  project.stack.map((s) => generateStack(s));

  ScrollTrigger.create({
    trigger: '.project__tools-box',
    start: 'top 100%',
    animation: gsap.from('.project__tool', { yPercent: 50, stagger: 0.05 }),
    toggleActions: 'play none none reverse',
  });
};

const renderLoginDetails = () => {
  const { loginDetails } = project;
  if (!loginDetails) return;
  const projectIntoBox = document.querySelector('.project__intro');
  const html = renderLoginDetailsHTML(project.loginDetails);
  projectIntoBox.insertAdjacentHTML('afterbegin', html);
};

const renderHighlights = () => {
  project.highlights.map((highlight) => renderHighlightsHTML(highlight));

  const projectFeatures = document.querySelectorAll('.project__feature');

  projectFeatures.forEach((feature, index) => {
    animateHighlights(feature, index);
  });
};

const renderProjectDescription = () => {
  project.description.map((desc) => generateProjectDescription(desc));
};

const changeVideoPlaybackSpeed = () => {
  const video = document.querySelector('video');

  video.playbackRate = 1.25;
  video.pause();

  setTimeout(() => {
    video.play();
  }, 2000);
};

const capitalizeText = (text) => text.slice(0, 1).toUpperCase() + text.slice(1);

const loadProject = () => {
  getTheme();
  document.title = 'Iqbal kang - ' + capitalizeText(project.name);
  generateBtnLinks();
  renderVideo();
  // changeVideoPlaybackSpeed();
  renderColors();
  renderFonts();
  renderStack();
  renderProjectName();
  renderLoginDetails();
  renderHighlights();
  renderProjectDescription();
  loadNextProject();
};

const init = () => {
  const selectedProject = new URLSearchParams(window.location.search);
  const selectedProjectName = selectedProject.get('project');

  const getSingleProject = (name) => {
    return singleProjectsData.filter((project) => project.name === name)[0];
  };

  project = getSingleProject(selectedProjectName);

  const getNextProject = () => {
    const selectedProjectIndex = projectsData.findIndex((p) => p.name === selectedProjectName);
    nextProject = projectsData[selectedProjectIndex + 1];

    if (nextProject.featured) nextProject;
    else nextProject = projectsData[0];
  };

  getNextProject();
  loadProject();
};

window.addEventListener('DOMContentLoaded', init);

liveBtnOutline.addEventListener('mousemove', (e) => {
  e.stopImmediatePropagation();
  const position = liveBtnOutline.getBoundingClientRect();
  const x = e.clientX - position.left - position.width / 2;
  const y = e.clientY - position.top - position.height / 2;

  gsap.to(liveBtn, { x: x * 0.4, y: y * 0.4, ease: 'power(4)' });
  gsap.to(liveBtnText, { x: x * 0.2, y: y * 0.2, ease: 'power(4)' });
});

liveBtnOutline.addEventListener('mouseleave', (e) => {
  gsap.to(liveBtn, { x: 0, y: 0, ease: 'elastic' });
  gsap.to(liveBtnText, { x: 0, y: 0, ease: 'elastic' });
});

const projectIntroScrollTl = gsap.timeline();

projectIntroScrollTl.from(liveBtnContainer, { yPercent: 10 });

ScrollTrigger.create({
  trigger: projectIntroSection,
  start: 'top 100%',
  end: '+200px 50%',
  animation: projectIntroScrollTl,
  scrub: 1,
});

const logoRotationTl = gsap.timeline({ repeat: -1, yoyo: true });
const animateLogo = () => {
  logoRotationTl.to('.loader__logo', { rotate: 360, ease: 'power2.inOut' });
};

const animateEnter = () => {
  const tl = gsap.timeline();

  changeVideoPlaybackSpeed();

  logoRotationTl.pause();

  tl.to('.loader__logo', { rotate: 0, ease: 'power2' })
    .to('.loader__logo', { yPercent: 200, duration: 2, ease: 'power4.inOut' })
    .to('.loader__top', { yPercent: -100, duration: 1.5, ease: 'power4.inOut' }, '<+0.3')
    .to(
      '.loader__bottom',
      {
        yPercent: 100,
        duration: 1.5,
        ease: 'power4.inOut',
      },
      '<'
    )
    .from('.project__hero', { scale: 1.2, duration: 1 }, '<+0.2')
    .from('.project__heading', { y: '100px' }, '<+0.5');
};

window.addEventListener('DOMContentLoaded', animateLogo);
window.addEventListener('load', animateEnter);

// projectFeatures.forEach((feature, index) => {
//   let tl = gsap.timeline();
//   const text = feature.querySelectorAll('p');
//   const imageBox = feature.querySelector('.project__image-box');

//   // if (index % 2 === 0) tl.fromTo(text, { x: '50%' }, { xPercent: -70 }).to(imageBox, { x: '10%' }, '<');
//   // else tl.fromTo(text, { x: '-50%' }, { xPercent: 70 }).to(imageBox, { x: '-10%' }, '<');

//   if (index % 2 === 0) tl.from(text, { xPercent: 250 }).to(imageBox, { x: '10%' }, '<');
//   else tl.from(text, { xPercent: -250 }).to(imageBox, { x: '-10%' }, '<');

//   ScrollTrigger.create({
//     animation: tl,
//     trigger: feature,
//     scrub: true,
//   });
// });
