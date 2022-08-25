# Responsive intro section
This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Desktop 
<img width="814" alt="image" src="https://user-images.githubusercontent.com/57645180/186547625-7b883a2d-e659-477e-9dd2-58d46cc00981.png">

## Mobile
<img width="280" alt="image" src="https://user-images.githubusercontent.com/57645180/186547563-2a196b8c-3b97-4893-8770-8cc852d0eb6a.png">

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links.
- View the optimal layout for the content depending on their device's screen size.
- See hover states for all interactive elements on the page.


### Links

- Live Demo: [Demo](https://cacosted-intro-section.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- BEM naming convention
- JavaScript (+ES6) 
- Flexbox
- CSS Grid
- [Stylus-lang](https://stylus-lang.com/)
- Mobile-first workflow
- BEM naming convention

### What I learned

This challenge was great to put in practice CSS and JavaScript and how to handle responsive design with these two.

I set up a script on `package.json` to compile and watch the stylus files:
```js
"scripts": {
    "stylus": "stylus -w ./styles/main.styl -o ./public/css/main.css"
},
// 👇 Usage on terminal
// npm run stylus
```
To add icons on the `features` dropdown I used this cool trick:

```css
// With the list-style property you can change the default bullet point of unordered list with a custom image
&__item
    cursor: pointer     
    &--todo
      list-style: url('../images/icon-todo.svg')
```

The intended way of implementing the dropdown arrow, was to add one picture of two depending if is opened or not.
I found a better solution, use just one image and rotate it depending on the state.
```css
.turn-up
  transform: rotate(180deg)
```
```js
title.addEventListener('click', ({target}) => {
  const ulSibling = target.nextSibling.nextSibling
  arrowImg.classList.toggle('turn-up')
}
```

The most tricky part was to make work the navbar in both in mobile and on desktop, 
but with mobile-first workflow and some media queries the job was done.

```cs
// A cool thing about stylus is how clean it looks
@media (min-width: 800px)
  .navbar
    display: flex;
    align-items: center
    justify-content: start
    gap: 1em
    padding-inline: 2em
```

## Author

- Frontend Mentor - [@cacosted](https://www.frontendmentor.io/profile/cacosted)
- Twitter - [@cacosted](https://www.twitter.com/cacosted)
