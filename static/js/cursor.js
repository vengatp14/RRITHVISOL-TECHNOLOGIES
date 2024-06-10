// scripts.js
document.addEventListener('mousemove', (event) => {
  const cursor = document.getElementById('customCursor');
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
});
// scripts.js
document.addEventListener('mousemove', (event) => {
  const cursor = document.getElementById('customCursor');
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
});

document.querySelectorAll('a, button').forEach(element => {
  element.addEventListener('mouseover', () => {
    const cursor = document.getElementById('customCursor');
    cursor.classList.add('hover');
  });
  element.addEventListener('mouseout', () => {
    const cursor = document.getElementById('customCursor');
    cursor.classList.remove('hover');
  });
});