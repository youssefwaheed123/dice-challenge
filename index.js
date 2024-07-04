function buttonPressed() {
  var randomVariable1 = Math.floor(Math.random() * 6) + 1;
  var randomVariable2 = Math.floor(Math.random() * 6) + 1;
  document
    .querySelector(".img1")
    .setAttribute("src", "./images/dice" + randomVariable1 + ".png");
  document
    .querySelector(".img2")
    .setAttribute("src", "./images/dice" + randomVariable2 + ".png");

  if (randomVariable1 > randomVariable2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins !";
  } else if (randomVariable1 < randomVariable2) {
    document.querySelector("h1").textContent = "Player 2 Wins ! 🚩";
  } else {
    document.querySelector("h1").textContent = "Draw !";
  }
}

// Adding an event listener to the button
document.addEventListener("DOMContentLoaded", (event) => {
  const button = document.getElementById("myButton");
  button.addEventListener("click", buttonPressed);
});
