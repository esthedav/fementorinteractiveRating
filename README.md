
# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

## Table of contents

- [Frontend Mentor - Interactive rating component solution](#frontend-mentor---interactive-rating-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Methodology](#methodology)
    - [Difficulty](#difficulty)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)

## Overview

This is a challenge in which we can work with two components, the main focus of the component is that we can rate and get the rating of the component.

### Methodology

- BEM and Mobil first

### Difficulty

- Level Newbie

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![desktop Design](./images/desktop-design.jpg)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

I learned how to work with events.

```js
submitBtn.addEventListener('click', (e) => {
    let scoreSelected = 0
    score.forEach((elemento) => {
        if (elemento.checked){
            scoreSelected = elemento.value
        }
    })
    calificanosContainer.classList.add('inactive');
    graciasContainer.classList.remove('inactive');
    calificacionMostrar.innerText = scoreSelected
    
    console.log(scoreSelected);
    // console.log(score[0].checked);
    e.preventDefault()
})
```
