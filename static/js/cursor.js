// scripts.js
document.addEventListener('mousemove', (event) => {
    const cursor = document.getElementById('customCursor');
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });
  