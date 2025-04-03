const email = document.querySelector(".email-input");
const submitButton = document.querySelector(".submit-btn");
const emailErrorMsg = document.querySelector(".email-error-msg");
const firstWrapper = document.querySelector('.wrapper');
const secondWrapper = document.querySelector(".second-wrapper");
const confirmationMsg = document.querySelector(".confirmation-msg");
const dismissBtn = document.querySelector(".dismiss");

email.addEventListener('input', () => {
  emailErrorMsg.classList.remove("email-error-msg-show");
  email.classList.remove("error-border");

});

submitButton.addEventListener("click", () => {
  // catch and clear previous error
  emailErrorMsg.classList.remove("email-error-msg-show");
  email.classList.remove("error-border");

  let emailValue = email.value.trim();
  if (emailValue === "") {
    emailErrorMsg.style.display = "block";
    email.classList.add("error-border");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    emailErrorMsg.style.display = "block";
    email.classList.add("error-border");
  } else {
    firstWrapper.style.display = 'none';
    secondWrapper.style.display = "block";
    confirmationMsg.innerHTML = `
     A confirmation email has been sent to <b>${emailValue}</b>. Please open
        it and click the button inside to confirm your subscription.`;
        email.value = '';
  }
});

dismissBtn.addEventListener("click", () => {
  secondWrapper.style.display = "none";
  firstWrapper.style.display = 'block';
});
