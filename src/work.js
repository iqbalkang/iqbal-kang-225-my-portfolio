// import { gsap } from '/node_modules/gsap/index.js';
// import { ScrollTrigger } from '/node_modules/gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

import { projectsData } from '../projectsData.js';
const workContainer = document.querySelector('.work__box');
const projectsContainer = document.querySelector('.work__projects');
const projectsPhoneContainer = document.querySelector('.work__projects-phone');
const projectImageBox = document.querySelector('.work__image-box');

const tabButtons = document.querySelectorAll('.work__tab-btn');
const workImagesBox = document.querySelectorAll('.work__image-box');

const filterProjects = (type) => {
  if (type === 'featured') return projectsData.filter((project) => project.featured);
  if (type === 'all') return projectsData;
  return projectsData.filter((project) => project.belongsTo === type);
};

// const renderProjectHTML = (project) => {
//   return ` <a href="project.html?project=${project.name}" class="work__project">
//              <span class="work__line"></span> <span class="work__project-name">${project.name}</span>
//              <span class="work__project-info">${project.tagLine}</span>
//            </a>`;
// };

const generateLink = (project) => {
  let link;
  if (!project.ownPage) link = project.liveLink;
  else link = `project.html?project=${project.name}`;
  return link;
};

const renderProjectHTML = (project) => {
  const link = generateLink(project);

  return ` <a href="${link}" class="work__project">
             <span class="work__line"></span> <span class="work__project-name">${project.name}</span>
             <span class="work__project-info">${project.tagLine}</span>
           </a>`;
};

const renderPhoneProjectHTML = (project) => {
  const link = generateLink(project);
  return ` <a href="${link}" class="work__project-phone">
             <div class="work__project-phone-overlay"></div>
             <img src="${project.image}" alt="project image" class="work__image-phone" />
             <div class="work__project-phone-info-box">
               <span class="work__project-phone-name">${project.name}</span>
               <p class="work__project-phone-info">${project.tagLine}</p>
             </div>
           </a>`;
};

const projectHoverImageAnimation = (project, e) => {
  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const dimensions = project.getBoundingClientRect();

  const xStart = dimensions.x;
  const yStart = dimensions.y;

  const xEnd = xStart + dimensions.width;
  const yEnd = yStart + dimensions.height;

  const xRange = gsap.utils.mapRange(xStart, xEnd, 0, 1, e.clientX);
  const yRange = gsap.utils.mapRange(yStart, yEnd, 0, 1, e.clientY);

  gsap.to(workImagesBox, { x: lerp(-50, 50, xRange), y: lerp(-50, 50, yRange), duration: 1.5 });
};

const renderProjectsImages = (projects) => {
  projectImageBox.textContent = '';

  projects.forEach((project, index) => {
    let imagesHTML = `<img src="${project.image}" alt="project-image" class="work__image ${
      index === 0 && 'active'
    }" />`;

    projectImageBox.insertAdjacentHTML('beforeend', imagesHTML);
  });
};

const displayProjectImage = (index, e) => {
  const workImages = document.querySelectorAll('.work__image');
  workImages.forEach((image) => image.classList.remove('active'));
  workImages[index].classList.add('active');
};

let slideInTl;

const slideInTL = (projects, image) => {
  slideInTl = gsap.timeline();
  slideInTl
    .from(projects, { x: '-100px', autoAlpha: 0, stagger: 0.075 })
    .fromTo(image, { autoAlpha: 0, scale: 1.1 }, { autoAlpha: 1, scale: 1 }, '<');
};

const displayProjects = (projects) => {
  projectsContainer.textContent = '';
  projectsPhoneContainer.textContent = '';

  projects.forEach((project) => {
    let projectHTML = renderProjectHTML(project);
    let projectPhoneHTML = renderPhoneProjectHTML(project);

    projectsContainer.insertAdjacentHTML('beforeend', projectHTML);
    projectsPhoneContainer.insertAdjacentHTML('beforeend', projectPhoneHTML);
  });

  const projectsEl = projectsContainer.querySelectorAll('.work__project');

  projectsEl.forEach((projectEl, index) => {
    projectEl.addEventListener('mouseenter', displayProjectImage.bind(null, index));
  });

  projectsEl.forEach((project) => {
    project.addEventListener('mousemove', projectHoverImageAnimation.bind(null, project));
  });

  slideInTL(projectsContainer.children, workImagesBox);
};

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener('click', (e) => {
    tabButtons.forEach((tabButton) => tabButton.classList.remove('active'));
    tabButton.classList.add('active');

    const selectedProject = e.target.textContent;
    const filteredProjects = filterProjects(selectedProject);
    renderProjectsImages(filteredProjects);
    displayProjects(filteredProjects);
  });
});

renderProjectsImages(filterProjects('featured'));
displayProjects(filterProjects('featured'));

ScrollTrigger.create({
  animation: slideInTl,
  trigger: workContainer,
  start: '1000px 60%',
  toggleActions: 'restart none none reverse',
});

ScrollTrigger.matchMedia({
  '(max-width: 1169px)': function () {
    ScrollTrigger.create({
      animation: slideInTl,
      trigger: workContainer,
      start: 'top 60%',
      toggleActions: 'restart none none reverse',
    });
  },
});
