const suggestion = document.querySelector(".suggestion");
const loader = document.querySelector(".loader");
const btnArrow = document.querySelector(".btn.arrow");
const btnFollow = document.querySelector(".btn.follow");
const btnFollowing = document.querySelector(".btn.following");

btnArrow.addEventListener("click", () => {
  suggestion.classList.toggle("active");
});

btnFollow.addEventListener("click", () => {
  btnFollowing.classList.add("active");
  btnFollow.classList.add("hide");
});

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("loaded");
    document.body.style.overflow = "auto";
  }, 1500);
});
