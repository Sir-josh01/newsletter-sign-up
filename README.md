# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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



## Overview
-A newsletter with a success and message for sign-up and error message if any error was noticed
### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshots/Screenshot%20(101).png)
![](./screenshots/Screenshot%20(102).png)
![](./screenshots/Screenshot%20(103).png)
![](./screenshots/Screenshot%20(104).png)


### Links

- Solution URL: [GitHub-Address](https://github.com/Sir-josh01/newsletter-sign-up)
- Live Site URL: [Github-pages](https://sir-josh01.github.io/newsletter-sign-up/)

## My process
-HTML structure
-CSC styling
-Javascript iteractivity
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
-DOM manipulation

### What I learned

```css
  .wrapper .content-1 {
    display: flex; /* Keep flex display to reorder */
    flex-direction: column-reverse; /* Reverse the order */
  }

```
```js
email.addEventListener('input', () => {
  emailErrorMsg.classList.remove("email-error-msg-show");
  email.classList.remove("error-border");

});
```

### Continued development

-Media Queries

### Useful resources

- [Example resource 1](https://www.google.com) - This helped me
- [Example resource 2](https://www.chatGPT.com) - This helped to cross check my code to identify Errors in time

## Author

- Website - [None](https://www.your-site.com)
- Frontend Mentor - [@Sir-josh01](https://www.frontendmentor.io/profile/sir-josh01)
- Twitter - [@sir_josh01](https://www.twitter.com/sir_josh01)


