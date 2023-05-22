const clickedButton = document.querySelectorAll(".btn");
let rating;
console.log(rating);
for (let i = 0; i < clickedButton.length; i++) {
  clickedButton[i].addEventListener("click", function () {
    rating = parseInt(this.innerHTML) - 1;
    console.log(rating);
    clickedButton[rating].classList.add("selected");
  });
}
const submit = document.querySelector(".submit");
submit.addEventListener("click", function () {
  if (rating || rating === 0) {
    document.querySelector(".inner-div").classList.add("hide");
    document.querySelector(".inner-div2").classList.remove("hidden");
    document.querySelector(".main-div").classList.add("grid");

    document.querySelector("#Output").innerHTML =
      "You selected " + `${rating + 1}` + " out of 5";
  }
});
