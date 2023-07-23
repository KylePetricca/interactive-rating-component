# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on the device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating


### Screenshot

![](./images/FireShot%20Capture%20001%20-%20Frontend%20Mentor%20-%20Interactive%20rating%20component%20-%20127.0.0.1.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)


## My process
Going into this challenge, I focused on reducing the amount of CSS I wrote for each content box as they both followed a similar design structure. I also knew that I wanted the inputs to be rendered with JavaScript instead of inside the HTML to reduce the amount of HTML code I would be writing and repeat the five inputs one by one.

My approach to the initial HTML and CSS structure was to style the first 'rating' card before adding the 'thank you' card. So firstly, I added all the relevant HTML and CSS to create the general structure that mimicked the design brief provided. I also made sure that the styles that I applied also looked good in mobile view; as the mobile and desktop designs were reasonably similar, I tried to keep the CSS as clean, minimal, and broad as possible to remove the need for added mobile styling in media queries which paid off in the end.

After I had the general framework for the 'rating' card, my next challenge was to remove the placeholder inputs I currently had in my HTML to style with CSS and replace them with inputs rendered by JavaScript. My method for doing this was to create an array of strings containing the numbers 1 through 5. I then used the iterating method, forEach, inside the function I would use for most of the program's functionalities. Within the anonymous function of my forEach method, I created the new elements, added the appropriate attributes, and then appended these newly created elements to my document.

After completing this, I was on the home stretch of the challenge. I then only needed to complete the 'thank you' card and add the functionality to get the value selected and return this on the next screen. The 'thank 'you card was easy to complete as I already had the base framework laid out in my CSS styling for the .container class; the only addition needed was to center the content, which I did by simply adding an extra class with an additional flexbox property of align-items.

Finally, I just needed to collect the input and render the result. I chose to nest the functions of gathering the input value and updating the DOM display inside a separate function that would be called in the event listener for my Submit button; I felt this was the best choice over an anonymous function regarding readability. I then decided to nest my event listener on the button inside of the original function that renders the inputs; my thought behind this was that I didn't want the submit button to be interactable should the inputs not render correctly.


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JavaScript


### What I learned

In this project, I expanded on my knowledge of using iterating methods, such as the forEach method, in a different way to assist with rendering elements that would otherwise need to be implemented separately:

```js
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

  //   Submit button event listener and verifies input
  submitBtn.addEventListener("click", getRatingValue);
};
```


### Continued development

I want to develop my JavaScript ability and create more complex programs in future projects. I am also currently learning ReactJs, so I plan to incorporate this in future projects to expand the scope of projects and their functionalities.
Furthermore, I am constantly researching ways to expand on my existing CSS knowledge to achieve new effects and styles.


### Useful resources

- [Codecademy JS Course](https://www.codecademy.com/enrolled/courses/introduction-to-javascript) - The Codecademy Intro to JavaScript has been beneficial in expanding my knowledge of JS, giving me an understanding of the main fundamentals of the language as a whole.


## Author

- Frontend Mentor - [@KylePetricca](https://www.frontendmentor.io/profile/KylePetricca)


## Acknowledgments

I want to thank Frontend mentor user @fernandolapaz for some of his tips on one of my earlier challenges, especially using the display: grid; paired with place-content: center; to place the content in the middle of the screen. It is a much more refined and cleaner solution to achieving this than I had been using before, and I will continue to use this solution in the future. 
