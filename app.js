const btnFollow = document.querySelector(".btn-follow");
const btnPfl = document.querySelector(".btn-pfl");
const btnIcon = document.querySelector(".btn-icon");
const suggestion = document.querySelector(".suggestion");
const bio = document.querySelector(".bio");
const seeAll = document.querySelector(".all");
const popUp = document.querySelector(".popup");
const unFollow = document.querySelector(".unfollow-container");
const unFollowBtn = document.querySelector(".unfollow-btn");
const overLay = document.querySelector(".overlay");
const cancel = document.querySelector(".cancel");

btnFollow.addEventListener("click", function () {
  btnPfl.classList.add("active");
  btnFollow.innerHTML = "Message";
  btnFollow.classList.add("active");
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
  unFollow.classList.add("active");
});
cancel.addEventListener("click", function () {
  overLay.classList.remove("active");
  unFollow.classList.remove("active");
});
unFollowBtn.addEventListener("click", function () {
  btnPfl.classList.remove("active");
  btnFollow.innerHTML = "Follow";
  unFollow.classList.remove("active");
  overLay.classList.remove("active");
});
