document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const heroImage = document.getElementById('hero-rotating-screenshot');
  const heroVisual = document.querySelector('.hero-visual');

  if (heroImage && heroVisual && window.matchMedia('(min-width: 769px)').matches) {
    const screenshotFiles = [
      'assets/screenshots/01.png',
      'assets/screenshots/02.png',
      'assets/screenshots/03.png',
      'assets/screenshots/04.png',
      'assets/screenshots/05.png',
      'assets/screenshots/06.png',
      'assets/screenshots/07.png',
      'assets/screenshots/08.png',
      'assets/screenshots/09.png',
      'assets/screenshots/10.png',
      'assets/screenshots/11.png',
      'assets/screenshots/12.png'
    ];

    const loadedSources = [];
    let checked = 0;

    screenshotFiles.forEach(function (src) {
      const image = new Image();
      image.onload = function () {
        loadedSources.push(src);
        checked += 1;
        if (checked === screenshotFiles.length) {
          if (loadedSources.length > 0) {
            let index = 0;
            heroImage.src = loadedSources[index];
            setInterval(function () {
              index = (index + 1) % loadedSources.length;
              heroImage.src = loadedSources[index];
            }, 3000);
          } else {
            heroVisual.style.display = 'none';
          }
        }
      };
      image.onerror = function () {
        checked += 1;
        if (checked === screenshotFiles.length) {
          if (loadedSources.length > 0) {
            let index = 0;
            heroImage.src = loadedSources[index];
            setInterval(function () {
              index = (index + 1) % loadedSources.length;
              heroImage.src = loadedSources[index];
            }, 3000);
          } else {
            heroVisual.style.display = 'none';
          }
        }
      };
      image.src = src;
    });
  }
});
