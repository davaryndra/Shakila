// Animasi love jatuh
document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 300);
});

// Efek teks muncul perlahan (fade-in)
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach((el, i) => {
  el.style.opacity = 0;
  el.style.transition = 'opacity 2s ease ' + i * 0.5 + 's';
});

window.addEventListener('load', () => {
  fadeElements.forEach(el => {
    el.style.opacity = 1;
  });
});

// Smooth scroll (opsional jika kamu ingin link ke galeri, dsb.)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
