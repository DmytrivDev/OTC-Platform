import { initSlider } from './splidecust';

let advantSliderInstance;
const advant = document.querySelector('.advant');

const advantInitSlider = () => {
  if (advant && !advantSliderInstance) {
    advantSliderInstance = initSlider(advant, {
      perPage: 2,
      gap: '1rem',
      pagination: true,
      breakpoints: {
        768: {
          perPage: 1,
        },
      },
    });
  }
};

const destroySliders = () => {
  if (advantSliderInstance) {
    advantSliderInstance.destroy();
    advantSliderInstance = null;
  }
};

const checkViewport = () => {
  advantInitSlider();
  if (window.innerWidth > 960) {
    destroySliders();
  }
};

window.addEventListener('resize', checkViewport);
document.addEventListener('DOMContentLoaded', checkViewport);
