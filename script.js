const ratingLists = document.querySelector(".rating__lists");
const submitButton = document.querySelector(".button__submit");
const ratingScore = document.querySelectorAll(".rating__score");
const yourRating = document.querySelector(".your__rating");
const thankYouState = document.querySelector(".thankyou__state");
const ratingState = document.querySelector(".rating__state");

let ratingScoreValue = "";

ratingLists.addEventListener("click", function (e) {
  const clicked = e.target.closest(".rating__score");

  if (!clicked) return;

  ratingScore.forEach((r) => {
    r.classList.remove("active");
  });
  clicked.classList.add("active");

  ratingScoreValue = clicked.value;
});

submitButton.addEventListener("click", function () {
  yourRating.textContent = ratingScoreValue;
  thankYouState.classList.add("active");
  ratingState.classList.add("hide");
});
