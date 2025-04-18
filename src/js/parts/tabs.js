const tabs = document.querySelectorAll('.tabs');

function initTabController() {
  tabs?.forEach(tab => {
    const tabButtons = tab.querySelectorAll('.tabs__btn');
    const tabContents = tab.querySelectorAll('.tabs__cont');

    if (!tabButtons.length || !tabContents.length) return;

    function handleTabBtns(event) {
      const button = event.currentTarget;
      if (button.classList.contains('isActive')) return;
      const tabId = button.dataset.tab;
      const targetTab = document.getElementById(tabId);

      if (!targetTab) return;

      tabButtons.forEach(btn => btn.classList.remove('isActive'));
      button.classList.add('isActive');

      tabContents.forEach(content =>
        content.classList.remove('isActive', 'isAnim')
      );

      targetTab.classList.add('isActive');
      setTimeout(() => {
        targetTab.classList.add('isAnim');
      }, 100);
    }

    tabButtons.forEach(button => {
      button.addEventListener('click', handleTabBtns);
    });
  });
}

document.addEventListener('DOMContentLoaded', initTabController);
