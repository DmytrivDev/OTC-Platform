const banner = document.querySelectorAll('.banner__carousell');

function initCalcSpeedCarse() {
  banner?.forEach(carousel => {
    const carousellFirst = carousel.querySelector('.carseFirst');
    const carousellSecond = carousel.querySelector('.carseSecond');

    const listWidthFirst = carousellFirst.scrollWidth; // Повна ширина першого
    const carousellWidth = carousel.clientWidth; // Ширина видимої області
    const moveValue = listWidthFirst - carousellWidth;

    const computedStyle = window.getComputedStyle(carousellFirst);
    const gap = parseFloat(computedStyle.gap || 0);
    const totalGap = (gap / 16) * 2;

    carousel.style.setProperty('--moveP', `${Math.abs(moveValue)}px`);
    carousel.style.setProperty('--moveM', `-${Math.abs(moveValue)}px`);
    carousel.style.setProperty('--gap', `${totalGap}rem`);

    const speedDesc = parseFloat(carousel.getAttribute('data-spdesc')) || 10;
    const speedMob = parseFloat(carousel.getAttribute('data-spmob')) || 20;
    const reverse = carousel.hasAttribute('data-reverse');

    const formatSpeed = window.innerWidth > 960 ? speedDesc : speedMob;
    const speed = (listWidthFirst / 1000) * formatSpeed;

    const direction = reverse ? 'reverse' : 'normal';

    carousellFirst.style.animationDelay = `-${speed}s`;
    carousellSecond.style.animationDelay = `-${speed / 2}s`;
    carousellFirst.style.webkitAnimationDelay = `-${speed}s`;
    carousellSecond.style.webkitAnimationDelay = `-${speed / 2}s`;

    carousellFirst.style.animationDuration = `${speed}s`;
    carousellSecond.style.animationDuration = `${speed}s`;
    carousellFirst.style.webkitAnimationDuration = `${speed}s`;
    carousellSecond.style.webkitAnimationDuration = `${speed}s`;

    carousellFirst.style.animationDirection = direction;
    carousellSecond.style.animationDirection = direction;
    carousellFirst.style.webkitAnimationDirection = direction;
    carousellSecond.style.webkitAnimationDirection = direction;
  });
}

window.addEventListener('resize', initCalcSpeedCarse);
document.addEventListener('DOMContentLoaded', initCalcSpeedCarse);
