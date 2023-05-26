import { gsap } from '/node_modules/gsap/index.js';
import { ScrollTrigger } from '/node_modules/gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

import { singleProjectsData } from '../projectsData.js';
const liveBtn = document.querySelector('.project__btn-link');
const liveBtnText = document.querySelector('.project__btn-link span');
const liveBtnOutline = document.querySelector('.project__btn-outline');
const projectFeaturesContainer = document.querySelector('.project__features');
const projectFeatures = document.querySelectorAll('.project__feature');

let project;

const renderNameandDesc = () => {
  const { name, description } = project;
  const projectHeading = document.querySelector('.project__heading');
  // const projectHeading = document.querySelector('.project__heading');
  projectHeading.textContent = name;
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

const renderColors = () => {
  project.colors.map((color) => generateColor(color));
};

const renderFonts = () => {
  project.fonts.map((font) => generateFont(font));
};

const renderStack = () => {
  project.stack.map((s) => generateStack(s));
};

const loadProject = () => {
  renderVideo();
  renderColors();
  renderFonts();
  renderStack();
  renderNameandDesc();
};

const init = () => {
  const selectedProject = new URLSearchParams(window.location.search);
  const selectedProjectName = selectedProject.get('project');

  const getSingleProject = (name) => {
    return singleProjectsData.filter((project) => project.name === name)[0];
  };

  project = getSingleProject(selectedProjectName);

  loadProject();
};

window.addEventListener('DOMContentLoaded', init);

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
