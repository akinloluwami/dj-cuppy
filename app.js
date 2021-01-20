const btnFollow = document.querySelector(".btn-follow");
const btnPfl = document.querySelector(".btn-pfl");
const btnIcon = document.querySelector(".btn-icon");
const suggestion = document.querySelector(".suggestion");
const bio = document.querySelector(".bio");

btnFollow.addEventListener("click", function () {
  btnPfl.classList.toggle("active");
  btnFollow.innerText("Following");
});
btnIcon.addEventListener("click", function () {
  suggestion.classList.toggle("active");
});
