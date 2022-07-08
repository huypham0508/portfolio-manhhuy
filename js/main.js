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
const menuList = () => {
  const menuLinks = document.querySelectorAll(".menu-links");
  const menuItems = document.querySelectorAll(".menu-items");
  const arLinks = ["#", "#about", "#skill", "#portfolio", "#contact"];
  function Redirect(links) {
    window.location = links;
  }
  menuItems.forEach((item, index) =>
    item.addEventListener("click", function (event) {
      menuItems.forEach((el) => el.classList.remove("active"));
      event.target.classList.add("active");
      Redirect(arLinks[index]);
    })
  );
};
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
const sendContact = () => {
  const sendBtn = document.querySelector(".contact-button");
  sendBtn.addEventListener("click", () => {
    alert("Tính năng chưa được hoàn thiện");
  });
};
menuList();
showSkill();
mode();
sendContact();
