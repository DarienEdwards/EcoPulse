window.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.tab-button');
  const contents = document.querySelectorAll('.tab-content');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      buttons.forEach(b => b.classList.toggle('active', b === btn));
      contents.forEach(c => {
        if (c.classList.contains(target)) {
          c.classList.add('active');
        } else {
          c.classList.remove('active');
        }
      });
    });
  });
});
