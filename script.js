// On hover, reveal full text
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.querySelector('.overlay').classList.add('show');
  });
  card.addEventListener('mouseleave', () => {
    card.querySelector('.overlay').classList.remove('show');
  });
});