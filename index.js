// Rating values
const ratings = ["1", "2", "3", "4", "5"];

// DOM Elements
const submitBtn = document.getElementById("submit");
const ratingScreen = document.getElementById("rating-state");
const thankYouScreen = document.getElementById("thank-you");

// Renders rating buttons
const renderButtons = (numbers) => {
  const divElement = document.getElementById("rating");

  //   Hides thank you screen
  thankYouScreen.style.display = "none";

  //   Create button elements
  numbers.forEach((rating) => {
    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", "radio");
    inputElement.setAttribute("name", "rating");
    inputElement.setAttribute("id", rating);
    inputElement.setAttribute("value", rating);

    divElement.appendChild(inputElement);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", rating);
    labelElement.innerHTML = `${rating}`;

    divElement.appendChild(labelElement);
  });

  //   Submit button event listener and verfies input
  submitBtn.addEventListener("click", getRatingValue);
};

// Verifies input of buttons
const getRatingValue = () => {
  const value = document.querySelector('input[type="radio"]:checked').value;
  const ratingText = document.getElementById("callout-rating");

  if (!value) {
    return;
  }

  ratingText.innerHTML = `${value}`;
  ratingScreen.style.display = "none";
  thankYouScreen.style.display = "flex";
};

renderButtons(ratings);
