/*Caroussel */

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}

/*Menu Burger */

function toggleMenu() {
  const navbar = document.querySelector(".header");
  const burger = document.querySelector(".burger");

  burger.addEventListener("click", (e) => {
    navbar.classList.toggle("show-nav");
  });

  /* bonus */
  const navbarMenu = document.querySelectorAll(".header a");
  navbarMenu.forEach((link) => {
    link.addEventListener("click", (e) => {
      navbar.classList.toggle("show-nav");
    });
  });
}
toggleMenu();



/*Caroussel infoGlobale */


/*Card formules et garantie */


const card1 = document.querySelector('.card_1');
const card2 = document.querySelector('.card_2');
const text = document.getElementById('formule1');
const text2 = document.getElementById('formule2');

card1.addEventListener('click', function () {
  card1.style.backgroundColor = 'var(--color-blue-transparent)';
  text.style.color = 'var(--color-yellow)';
  card2.style.backgroundColor = "white";
  text2.style.color = "var(--color-blue)";
});

card2.addEventListener('click', function () {
  card1.style.backgroundColor = "white";
  text.style.color = "var(--color-blue)";
  card2.style.backgroundColor = 'var(--color-blue-transparent)';
  text2.style.color = 'var(--color-yellow)';
});


function openOverlay() {
  document.getElementById("overlay").style.visibility = "visible";
}


function openOverlayWarning() {
  document.getElementById("overlay_warning").style.visibility = "visible";
}
function openOverlayCross() {
  document.getElementById("overlay_cross").style.visibility = "visible";
}
function openOverlayGlobe() {
  document.getElementById("overlay_globe").style.visibility = "visible";
}
function openOverlayHand() {
  document.getElementById("overlay_hand").style.visibility = "visible";
}
function openOverlayResiliation() {
  document.getElementById("overlay_resiliation").style.visibility = "visible";
}
function openOverlayTime() {
  document.getElementById("overlay_time").style.visibility = "visible";
}
function openOverlayMoney() {
  document.getElementById("overlay_money").style.visibility = "visible";
}



/*Modal AIPP */
const mots = document.querySelectorAll(".infos");
const monModal = document.getElementById("modal");

for (let i = 0; i < mots.length; i++) {
  mots[i].addEventListener("mouseover", function() {
    monModal.style.display = "block";
  });
  
  mots[i].addEventListener("mouseout", function() {
    monModal.style.display = "none";
  });
}

const fermerModal = document.getElementById("fermer-modal");
fermerModal.addEventListener("click", function() {
  monModal.style.display = "none";
});