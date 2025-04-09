import { toggle, up } from 'slide-element';

function handleMenuItemChildren() {
  function handleMenu(menuElement) {
    const links = menuElement.querySelectorAll('.menu-item-has-children > a');
    links.forEach(link => {
      if (link.getAttribute('href') === '#') {
        link.addEventListener('click', event => event.preventDefault());
      }
    });

    function toggleMenu(event) {
      const target = event.target;
      const menuItem = target.closest('.menu-item-has-children');
      const menuLink = target.closest('.menu-item-has-children > a');

      if (menuItem && menuLink === target) {
        event.preventDefault();
        const subMenu = menuItem.querySelector('.sub-menu');
        toggle(subMenu, { display: 'flex' });
        menuItem.classList.toggle('isOpened');

        const allOpenedItems = menuItem.parentElement.querySelectorAll(
          '.menu-item-has-children.isOpened'
        );
        allOpenedItems.forEach(item => {
          if (item !== menuItem) {
            up(item.querySelector('.sub-menu'));
            item.classList.remove('isOpened');
          }
        });
      }
    }

    function activateMenu() {
      if (menuElement.dataset.hasEventListener !== 'true') {
        menuElement.addEventListener('click', toggleMenu);
        menuElement.dataset.hasEventListener = 'true';
      }
    }

    activateMenu();
  }

  const mobMenu = document.querySelector('.mobmenu .navmenu');

  if (mobMenu) handleMenu(mobMenu);
}

document.addEventListener('DOMContentLoaded', handleMenuItemChildren);
