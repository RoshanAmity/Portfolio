const body = document.body;
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const checkbox = document.getElementById('darkModeButton');
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('nav ul');
const root = document.documentElement;

function lightMode() {
  body.classList.toggle('dark-mode');
  header.classList.toggle('dark-mode');
  footer.classList.toggle('dark-mode');

  document.querySelector('.fa-moon').style.display = 'none';
  document.querySelector('.fa-sun').style.display = 'block';
  root.style.setProperty('--color', '#4ff8ed');

  checkbox.checked = false;
}

function darkMode() {
  body.classList.toggle('light-mode');
  header.classList.toggle('light-mode');
  footer.classList.toggle('light-mode');

  document.querySelector('.fa-moon').style.display = 'block';
  document.querySelector('.fa-sun').style.display = 'none';
  root.style.setProperty('--color', '#0B60B0');

  checkbox.checked = true;
}

checkbox.addEventListener('click', function() {
  if (this.checked) {
    darkMode();
  } else {
    lightMode();
  }
});

const text = ["Android Application Development.","Web Development."];
let currentMessage = 0;
let i = 0;
let speed = 300;

function typeWriter() {
if(i<text[currentMessage].length) {
    document.getElementById("multiple").innerHTML += text[currentMessage].charAt(i);
    i++;
    setTimeout(typeWriter, speed);
}
else {
    document.getElementById("multiple").innerHTML = "";
    i=0;
    currentMessage = (currentMessage+1)%text.length;
    setTimeout(typeWriter,1000);
}
}

typeWriter();


hamburger.addEventListener('click', () =>{
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
});






