var slideIndex = 1;

document.addEventListener("DOMContentLoaded", () => {
	showSlides(slideIndex);
});

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".slide");
  let dots = document.querySelectorAll('.dots span');
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  slides.forEach( (obj) => { obj.style.display = "none"; });
	dots.forEach( (obj) => { obj.classList.remove("active");});
  slides[slideIndex-1].style.display = "flex"; 
  dots[slideIndex-1].classList.add("active");
}