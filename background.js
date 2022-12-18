function bindShortcut(shortcut, selector) {
  document.addEventListener('keydown', event => {
    if (event.key === shortcut) {
      const button = document.querySelector(selector);
      button.click();
    }
  });
}

const form = document.querySelector('form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const shortcut = document.querySelector('#shortcut').value;
  const selector = document.querySelector('#selector').value;
  bindShortcut(shortcut, selector);
});




