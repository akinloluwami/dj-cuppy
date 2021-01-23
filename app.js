const suggestion = document.querySelector(".suggestion");
const loader = document.querySelector(".loader");
const btnArrow = document.querySelector(".btn.arrow");
const btnFollow = document.querySelector(".btn.follow");
const btnFollowing = document.querySelector(".btn.following");
const popUpCont = document.querySelector(".popup-cont");
const overLay = document.querySelector(".overlay");
const navBar = document.querySelector(".navbar");

btnArrow.addEventListener("click", () => {
  suggestion.classList.toggle("active");
});

btnFollow.addEventListener("click", () => {
  btnFollowing.classList.add("active");
  btnFollow.classList.add("hide");
});

btnFollowing.addEventListener("click", () => {
  popUpCont.classList.add("active");
  overLay.classList.add("active");
  navBar.classList.add("hide");
});

overLay.addEventListener("click", () => {
  popUpCont.classList.remove("active");
  overLay.classList.remove("active");
  navBar.classList.remove("hide");
});

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("loaded");
    document.body.style.overflow = "auto";
  }, 1500);
});
