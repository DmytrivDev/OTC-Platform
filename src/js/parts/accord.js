document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card-prod');

  document.addEventListener('click', e => {
    const target = e.target;

    const clickedCard = target.closest('.card-prod');
    const clickedPanel = target.closest('.card-prod__panel');

    // Клік поза картками — закриваємо всі
    if (!clickedCard) {
      cards.forEach(card => card.classList.remove('isOpened'));
      return;
    }

    // Клік на панелі — нічого не робимо
    if (clickedPanel) return;

    // Перемикаємо клас на натиснутій картці
    const isAlreadyOpened = clickedCard.classList.contains('isOpened');

    // Закриваємо всі картки
    cards.forEach(card => card.classList.remove('isOpened'));

    // Якщо раніше не була відкрита — відкриваємо
    if (!isAlreadyOpened) {
      clickedCard.classList.add('isOpened');
    }
  });
});
