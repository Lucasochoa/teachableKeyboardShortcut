
function bindShortcut(shortcut, selector) {
  console.log("binding shortcut");
  document.addEventListener('keydown', event => {
    console.log("firing shortcut", event.keyCode);
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



const selectButton = document.querySelector('input[type="button"]');
const selectorField = document.querySelector('#selector');

selectButton.addEventListener('click', () => {
  document.body.addEventListener('click', event => {
    event.preventDefault();
    const selector = getComputedStyle(event.target, '::before').content;
    selectorField.value = selector;
  });
});



