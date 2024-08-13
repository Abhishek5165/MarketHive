const slider = document.querySelector(".slider");

const slider1 = document.querySelector(".slider1");

const slides1 = document.querySelectorAll(".slide");
const slides2 = document.querySelectorAll(".mobile");

const prevBtn = document.querySelector(".prev-slide");
const nextBtn = document.querySelector(".next-slide");

const prevBtn1 = document.querySelector(".prev-slide1");
const nextBtn1 = document.querySelector(".next-slide1");

let dots = document.getElementsByClassName("dot");
let dots1 = document.getElementsByClassName("dot1");

let slideIndex = 0;

slides1[slideIndex].classList.add("active");
slides2[slideIndex].classList.add("active");

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

prevBtn1.addEventListener("click", prevSlide1);
nextBtn1.addEventListener("click", nextSlide1);

function prevSlide() {
  slides1[slideIndex].classList.remove("active");
  slideIndex = slideIndex === 0 ? slides1.length - 1 : slideIndex - 1;
  slides1[slideIndex].classList.add("active");
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex - 1].className += " active";
}

function prevSlide1() {
  slides2[slideIndex].classList.remove("active");
  slideIndex = slideIndex === 0 ? slides2.length - 1 : slideIndex - 1;
  slides2[slideIndex].classList.add("active");
  slider1.style.transform = `translateX(-${slideIndex * 100}%)`;

  for (i = 0; i < dots1.length; i++) {
    dots1[i].className = dots1[i].className.replace(" active", "");
  }
  dots1[slideIndex - 1].className += " active";
}

function nextSlide() {
  slides1[slideIndex].classList.remove("active");
  slideIndex = slideIndex === slides1.length - 1 ? 0 : slideIndex + 1;
  slides1[slideIndex].classList.add("active");
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex - 1].className += " active";
}

function nextSlide1() {
  slides2[slideIndex].classList.remove("active");
  slideIndex = slideIndex === slides2.length - 1 ? 0 : slideIndex + 1;
  slides2[slideIndex].classList.add("active");
  slider1.style.transform = `translateX(-${slideIndex * 100}%)`;

  for (i = 0; i < dots1.length; i++) {
    dots1[i].className = dots1[i].className.replace(" active", "");
  }
  dots1[slideIndex - 1].className += " active";
}

setInterval(nextSlide, 11000);
setInterval(nextSlide1, 11000);