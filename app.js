const suggestion = document.querySelector(".suggestion");
const loader = document.querySelector(".loader");
const btnArrow = document.querySelector(".btn.arrow");
const btnFollow = document.querySelector(".btn.follow");
const btnFollowing = document.querySelector(".btn.following");
const popUpCont = document.querySelector(".popup-cont");
const overLay = document.querySelector(".overlay");
const overLay2 = document.querySelector(".overlay2");
const navBar = document.querySelector(".navbar");
const unFollow = document.querySelector(".unfollow");
const optionsBtn = document.querySelector(".fa-ellipsis-v");
const optionsCont = document.querySelector(".options-cont");

btnArrow.addEventListener("click", () => {
  suggestion.classList.toggle("active");
});

btnFollow.addEventListener("click", () => {
  btnFollowing.classList.add("active");
  btnFollow.classList.add("hide");
  suggestion.classList.add("active");
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

unFollow.addEventListener("click", () => {
  popUpCont.classList.remove("active");
  btnFollow.classList.remove("hide");
  btnFollowing.classList.remove("active");
  overLay.classList.remove("active");
});

optionsBtn.addEventListener("click", () => {
  optionsCont.classList.add("active");
  overLay2.classList.add("active");
});

overLay2.addEventListener("click", () => {
  overLay2.classList.remove("active");
  optionsCont.classList.remove("active");
});

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("loaded");
    document.body.style.overflow = "auto";
  }, 2000);
});
