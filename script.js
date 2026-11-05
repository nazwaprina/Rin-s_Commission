// Widget jam: hanya ini yang memakai JavaScript
const clock = document.getElementById('clock');
const date = document.getElementById('date');

function tick() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString('en-GB');
  date.textContent = now.toLocaleDateString('id-ID', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  });
}

tick();
setInterval(tick, 1000);