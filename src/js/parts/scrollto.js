import scrollToElement from 'scroll-to-element';

const anchorLinks = document.querySelectorAll('.anchor-links li > a, a.anchor');

anchorLinks?.forEach(link => {
  link.addEventListener('click', event => {
    const headerHeight = document.querySelector('.header').offsetHeight;
    const href = link.getAttribute('href');

    if (href.startsWith('#') && href !== '#') {
      event.preventDefault();

      const targetElement = document.querySelector(href);
      if (targetElement) {
        scrollToElement(targetElement, {
          offset: -headerHeight,
          ease: 'inOutQuint',
          duration: 1000,
        });
      }
    }
  });
});
