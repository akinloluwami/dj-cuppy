const btnFollow = document.querySelector(".btn-follow");
const btnPfl = document.querySelector(".btn-pfl");
const btnIcon = document.querySelector(".btn-icon");
const suggestion = document.querySelector(".suggestion");
const bio = document.querySelector(".bio");
const seeAll = document.querySelector(".all");
const popUp = document.querySelector(".popup");
const popUpSmall = document.querySelector(".popup-small");
const overLay = document.querySelector(".overlay");
const cancel = document.querySelector(".cancel");
const unFollow = document.querySelector(".unfollow");

btnFollow.addEventListener("click", function () {
  btnPfl.classList.add("active");
  btnFollow.innerHTML = "Message";
});
btnIcon.addEventListener("click", function () {
  suggestion.classList.toggle("active");
});
seeAll.addEventListener("click", function () {
  popUp.classList.add("active");
  overLay.classList.add("active");
});
overLay.addEventListener("click", function () {
  overLay.classList.remove("active");
  popUp.classList.remove("active");
});
btnPfl.addEventListener("click", function () {
  overLay.classList.add("active");
  popUpSmall.classList.add("active");
});
cancel.addEventListener("click", function () {
  overLay.classList.remove("active");
  popUpSmall.classList.remove("active");
});
unFollow.addEventListener("click", function () {
  btnPfl.classList.remove("active");
  btnFollow.innerHTML = "Follow";
  popUpSmall.classList.remove("active");
  overLay.classList.remove("active");
});















