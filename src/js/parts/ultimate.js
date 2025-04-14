import Splide from '@splidejs/splide';

const ultCont = document.querySelectorAll('.solution__wrapp');

ultCont?.forEach(el => {
  const carousell = el.querySelector('.splide');
  const sliderOptions = {
    direction: 'ttb', // Вертикальная прокрутка
    height: '37.5rem', // Высота слайдера
    gap: '6.5rem',
    focus: 'center',
    easing: 'linear',
    perPage: 1,
    speed: 500,
    drag: false, // Отключаем перетаскивание
    arrows: false,
    pagination: false,
    updateOnMove: true,
    breakpoints: {
      960: {
        gap: '4rem',
        height: '50rem',
      },
      500: {
        height: '44.375rem',
      },
    },
  };

  if (carousell) {
    const splide = new Splide(carousell, sliderOptions);

    splide.mount();

    document.addEventListener('scroll', () => {
      const section = el.closest('.solution');
      const sectionRect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const header = document.querySelector('.header');

      // Перевірка видимості секції в межах екрану
      header.classList.remove('isHidd');
      if (sectionRect.top <= 0 && sectionRect.bottom >= viewportHeight) {
        header.classList.add('isHidd');
        const scrollableHeight = sectionRect.height - viewportHeight;
        const scrolledInSection = Math.abs(sectionRect.top);
        const scrollPercent = (scrolledInSection / scrollableHeight) * 100;

        // Обмежуємо обчислення між 10% та 90% прокрутки
        const totalSlides = splide.Components.Slides.getLength() + 1; // Отримуємо кількість слайдів
        const normalizedScrollPercent = (scrollPercent - 10) / 80; // Нормалізуємо між 0 і 1
        const targetSlide = Math.floor(
          normalizedScrollPercent * (totalSlides - 1)
        );

        splide.go(targetSlide);
      }
    });
  }
});
