// Typewriter Effect
let i = 0;
const txt = 'Web Developer proficient in HTML, CSS, and JavaScript';
const speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.querySelector('.typewriter').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
