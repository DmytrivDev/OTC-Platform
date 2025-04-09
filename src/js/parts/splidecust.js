import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

export const initSlider = (container, options = {}) => {
  const sliderElement = container.querySelector('.splide');
  if (!sliderElement) return;

  const splide = new Splide(sliderElement, {
    type: 'slide',
    speed: 1000,
    perMove: 1,
    arrows: false,
    pagination: false,
    updateOnMove: true,
    ...options,
  }).mount();

  const optionsType = splide.options.type;

  const arrows = container.querySelectorAll('.arrows');

  const navigationElems = Array.from(arrows).map(arrow => ({
    next: arrow.querySelector('.arrows__next'),
    prev: arrow.querySelector('.arrows__prev'),
    number: arrow.querySelector('.arrows__number'),
  }));

  const slides = container.querySelectorAll('.splide__slide');

  const progressIndicator = Array.from(slides).map(slide => ({
    current: slide.querySelector('.current__slide'),
    total: slide.querySelector('.total__slide'),
  }));

  const progressbar = container.querySelector('.progressbar__thumb');

  const updateSlideState = () => {
    const quantitySlides = splide.Components.Elements.slides.length;

    const currentIndex = Math.ceil(splide.index / splide.options.perPage) + 1;
    const totalSlides = Math.ceil(
      splide.Components.Elements.slides.length / splide.options.perPage
    );

    const isAtStart = splide.index === 0;
    const isAtEnd = splide.index === splide.Components.Controller.getEnd();

    progressIndicator.forEach(({ current, total }, index) => {
      if (current) {
        current.textContent = String(index + 1).padStart(2, '0');
      }

      if (total) {
        total.textContent = `${String(index + 1).padStart(2, '0')}/${String(
          quantitySlides
        ).padStart(2, '0')}`;
      }
    });

    navigationElems.forEach(({ next, prev, number }) => {
      if (next && prev && optionsType !== 'loop') {
        next.disabled = isAtEnd;
        prev.disabled = isAtStart;
        next.classList.toggle('isDisabled', isAtEnd);
        prev.classList.toggle('isDisabled', isAtStart);
      }

      if (number) {
        number.textContent = `${String(currentIndex).padStart(2, '0')}/${String(
          totalSlides
        ).padStart(2, '0')}`;
      }
    });

    if (progressbar) {
      const quantityMod = quantitySlides + 1;
      const progress =
        (((splide.index + 1) % quantityMod) /
          (quantityMod - splide.options.perPage)) *
        100;
      progressbar.style.width = `${progress}%`;
    }
  };

  navigationElems.forEach(({ next, prev }) => {
    next?.addEventListener('click', () => splide.go('>'));
    prev?.addEventListener('click', () => splide.go('<'));
  });

  const eventToUse = optionsType === 'fade' ? 'moved' : 'move';
  splide.on(eventToUse, updateSlideState);

  window.addEventListener('resize', updateSlideState);
  updateSlideState();

  return splide;
};
