const preBtn = document.querySelector(".pre");
const nextBtn = document.querySelector(".next");
const slides = document.querySelector(".slides");
const descriptions = document.getElementsByClassName("description");

let slideIndex = 0;
let transformInit = "0";
for (let i = 0; i < descriptions.length; i++) {
  descriptions[i].style.display = "none";
  descriptions[0].style.display = "flex";
}

function plusSlide(count) {
  slideIndex += count;
  if (slideIndex > 2) {
    slideIndex = 2;
  } else if (slideIndex < 0) {
    slideIndex = 0;
  }
  slideShow(slideIndex);
  showDescriptions(slideIndex);
}

function showDescriptions(descCount) {
  for (let i = 0; i < descriptions.length; i++) {
    descriptions[i].style.display = "none";
    descriptions[descCount].style.display = "flex";
  }
}

function slideShow(index) {
  switch (index) {
    case 0:
      transformInit = "0%";
      break;
    case 1:
      transformInit = "-33.33%";
      break;
    case 2:
      transformInit = "-66.66%";
      break;
  }
  slides.style.transform = `translateX(${transformInit})`;
}

const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const menu = document.querySelector(".mobile-navigation");

hamburger.addEventListener("click", () => {
  menu.style.display = "block";
});

close.addEventListener("click", () => {
  menu.style.display = "none";
});
