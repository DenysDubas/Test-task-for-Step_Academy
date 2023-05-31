'use strict';

const image = document.querySelector('.logo__ima');
const container = document.querySelector('.logo__ima');

container.addEventListener('mousemove', (e) => {
  const containerRect = container.getBoundingClientRect();
  const offsetX = e.clientX - containerRect.left;
  const offsetY = e.clientY - containerRect.top;
  const moveX = offsetX / containerRect.width - 0.5;
  const moveY = offsetY / containerRect.height - 0.5;

  image.style.transform = `translate(${moveX * 20}px, ${moveY * 20}px)`;
});

container.addEventListener('mouseleave', () => {
  image.style.transform = 'none';
});
