export const setTheme = (mode) => {
  localStorage.setItem('theme-mode', mode);
};

export const getTheme = () => {
  const themeIcons = document.querySelectorAll('.theme__icon');
  themeIcons.forEach((icon) => icon.classList.remove('active'));

  let theme = localStorage.getItem('theme-mode');

  if (!theme) theme = 'dark';

  if (theme === 'dark') {
    themeIcons[1].classList.add('active');
    document.body.classList.remove('light__theme');
  } else {
    themeIcons[0].classList.add('active');
    document.body.classList.add('light__theme');
  }
};
