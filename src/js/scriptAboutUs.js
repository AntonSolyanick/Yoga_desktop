"use strict";

//-----Sticky navigation-------
const h1 = document.querySelector("h1");
const nav = document.querySelector(".nav");

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const h1Observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "50px",
});

h1Observer.observe(h1);

//------------Location---------------
const map = L.map("map").setView([-37.82, 144.949], 15);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([-37.82, 144.949])
  .addTo(map)
  //.bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
  .openPopup();

//---------------Slider----------------
const activeDot = function (slide) {
  const dots = document.querySelectorAll(".button--slider");
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[slide].classList.add("active");
};

const dotContainer = document.querySelector(".dot--container");
const slides = document.querySelectorAll(".slide");

slides.forEach(function (_, i) {
  dotContainer.insertAdjacentHTML(
    "beforeend",
    `<button class="button--slider" data-slide="${i}"></button>`
  );
});

activeDot(0);

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("button--slider")) {
    const { slide } = e.target.dataset;
    slides.forEach((slide) => slide.classList.add("none"));
    slides[slide].classList.remove("none");
    activeDot(slide);
  }
});

//--------------------------NOT ACTIVE BUTTONS----------------------------

const notActiveButtons = document.querySelectorAll(".not--active--button");
notActiveButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    e.preventDefault();
    alert("This button is currently not active ");
  })
);
