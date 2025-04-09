const scrollBlock = document.querySelector('.tabl__scroll');

window.addEventListener('resize', () => {
  if (scrollBlock) {
    requestAnimationFrame(() => {
      scrollBlock.scrollLeft = -scrollBlock.scrollWidth;
    });
  }
});

function setEqualHeight() {
  const nameBlocks = document.querySelectorAll('.tabl__name');
  const textBlocks = document.querySelectorAll('.tabl__txt > div');
  const availBlocks = document.querySelectorAll('.tabl__availabil > div');

  let maxHeightTxt = 0;

  [...textBlocks, ...availBlocks, ...nameBlocks]?.forEach(block => {
    block.style.height = 'auto';
  });

  textBlocks?.forEach(block => {
    const height = block.offsetHeight;
    if (height > maxHeightTxt) maxHeightTxt = height;
  });

  [...textBlocks, ...availBlocks]?.forEach(block => {
    block.style.height = `${maxHeightTxt}px`;
  });

  let maxHeightName = 0;

  nameBlocks?.forEach(block => {
    const height = block.offsetHeight;
    if (height > maxHeightName) maxHeightName = height;
  });
  nameBlocks?.forEach(block => {
    block.style.height = `${maxHeightName}px`;
  });
}

window.addEventListener('resize', setEqualHeight);
window.addEventListener('DOMContentLoaded', setEqualHeight);
