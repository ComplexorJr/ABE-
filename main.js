console.log('Hello World!');
function toggleMode() {
  document.body.classList.toggle('dark-mode');
}
function toggleMode() {
  document.body.classList.toggle('dark-mode');
}

// Scroll-triggered card animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2,
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
  });
});