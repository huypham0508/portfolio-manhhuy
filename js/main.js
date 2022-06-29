$(".portfolio-container").slick({
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:
    '<div class="slick-prev"><ion-icon name="chevron-back-outline"></ion-icon></div>',
  nextArrow:
    '<div class="slick-next"><ion-icon name="chevron-forward-outline"></ion-icon></div>',
});

const showSkill = () => {
  const button = document.querySelectorAll(".skill-items");
  const menu = document.querySelectorAll(".skill-menu");
  for (let index = 0; index < button.length; index++) {
    button[index].addEventListener("click", () => {
      menu[index].classList.toggle("show-skill");
      button[index].classList.toggle("show-skill");
    });
  }
};
const mode = () => {
  const moon = document.querySelector(".header-moon");
  const sun = document.querySelector(".header-sun");
  const container = document.querySelectorAll(".container");
  for (let index = 0; index < container.length; index++) {
    sun.addEventListener("click", () => {
      sun.classList.toggle("is-show");
      moon.classList.toggle("is-show");
      container[index].classList.toggle("is-mode");
      document.body.classList.toggle("is-mode");
    });
    moon.addEventListener("click", () => {
      sun.classList.toggle("is-show");
      moon.classList.toggle("is-show");
      container[index].classList.toggle("is-mode");
      document.body.classList.toggle("is-mode");
    });
  }
};
showSkill();
mode();
