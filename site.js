const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
});

form.addEventListener('input', () => {
  status.hidden = true;
});
