document.addEventListener("DOMContentLoaded", function() {
    const phoneContainer = document.querySelector('.phone');
    phoneContainer.classList.add('show-animation');
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000);
}

const menus = document.querySelector("nav ul");
const menusBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menusBtn.addEventListener("click", function () {
  menus.classList.add("display");
});

closeBtn.addEventListener("click", function () {
  menus.classList.remove("display");
});

{
  var sel = document.getElementById("select1")
  sel.disabled = check1.checked ? false : true;
  if (!select1.disabled)
  {
      select1.focus();
  }
}