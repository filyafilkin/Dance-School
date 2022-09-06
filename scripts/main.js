let close = document.querySelector(".burger__close");
let hero = document.querySelector(".hero__container");
let burger = document.querySelector(".burger__open"),
  menu = document.querySelector(".burger");

burger.addEventListener("click", function (e) {
  menu.classList.toggle("active");
  close.classList.toggle("active");
  burger.classList.toggle("active");
  hero.classList.toggle("hero__active");
});

close.addEventListener("click", function (e) {
  menu.classList.toggle("active");
  close.classList.toggle("active");
  burger.classList.toggle("active");
  hero.classList.toggle("hero__active");
});

let radio = document.querySelectorAll("shop");
let submitButton = document.querySelector(".shop__btn");

function go() {
  var radios = document.getElementById("radios").getElementsByTagName("INPUT"),
    radio;
  for (var i = 0, L = radios.length; i < L; i++) {
    radio = radios[i];
    if (radio.checked) {
      location.href = radio.value;
      break;
    }
  }
}

// let faqItem = document.querySelectorAll(".faq__item");
// faqItem.addEventListener("mouseover", function (e) {
//   let faqDescription = document.querySelectorAll(".faq__description");
//   faqDescription.classList.toggle("faq__active");
// });

// faqItem.addEventListener("click", function (e) {
//   let faqDescription = document.querySelectorAll(".faq__description");
//   faqDescription.classList.toggle("faq__active");
// });
