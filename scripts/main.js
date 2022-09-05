let close = document.querySelector(".burger__close");
let burger = document.querySelector(".burger__open"),
  menu = document.querySelector(".burger");

burger.addEventListener("click", function (e) {
  menu.classList.add("active");
  close.classList.add("active");
  burger.classList.remove("active");
});

close.addEventListener("click", function (e) {
  menu.classList.remove("active");
  close.classList.remove("active");
  burger.classList.add("active");
});
