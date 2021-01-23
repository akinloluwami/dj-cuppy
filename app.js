/*const btnFollow = document.querySelector(".btn-follow");
const btnPfl = document.querySelector(".btn-pfl");
const btnIcon = document.querySelector(".btn-icon");*/
const suggestion = document.querySelector(".suggestion");
const bio = document.querySelector(".bio");
const popUp = document.querySelector(".popup");
const overLay = document.querySelector(".overlay");
const loader = document.querySelector(".loader");

/*btnFollow.addEventListener("click", function () {
  btnPfl.classList.add("active");
  btnFollow.innerHTML = "Message";
  btnFollow.classList.add("active");
});
btnIcon.addEventListener("click", function () {
  suggestion.classList.toggle("active");
  btnIcon.classList.toggle("active");
});*/

overLay.addEventListener("click", function () {
  overLay.classList.remove("active");
  popUp.classList.remove("active");
});
/*btnPfl.addEventListener("click", function () {
  overLay.classList.add("active");
  unFollow.classList.add("active");
});*/

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("loaded");
    document.body.style.overflow = "auto";
  }, 1500);
});
