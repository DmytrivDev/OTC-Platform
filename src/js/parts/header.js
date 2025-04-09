document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header__main');

  function scrollHeader() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (!header) return;

    if (scrollTop > header.offsetHeight / 2) {
      header.classList.add('addBg');
    } else {
      header.classList.remove('addBg');
    }
  }

  scrollHeader();
  window.addEventListener('scroll', scrollHeader);
});
