var contactsBtn = document.querySelector(".contacts-btn");
var overlay = document.querySelector(".overlay");
var feedbackForm = document.querySelector(".feedback-form");
var feedbackFormClose = document.querySelector(".feedback-form-close");
var feedbackFormName = document.querySelector(".feedback-form-name");
var feedbackFormEmail = document.querySelector(".feedback-form-email");
var feedbackFormMessage = document.querySelector(".feedback-form-message");
/*var storageName = localStorage.getItem("name");
var storageEmail = localStorage.getItem("email");*/

contactsBtn.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("overlay-show");
  feedbackForm.classList.add("feedback-form-show");
  /*if (storageName) {
    feedbackFormName.value = storageName;
    if (storageEmail) {
      feedbackFormEmail.value = storageEmail;
      feedbackFormMessage.focus();
    } else {
      feedbackFormEmail.focus();
    }
  } else {
    feedbackFormName.focus();
    if (storageEmail) {
      feedbackFormEmail.value = storageEmail;
    }
  }*/
});

feedbackFormClose.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.remove("overlay-show");
  feedbackForm.classList.remove("feedback-form-show");
});

feedbackForm.addEventListener("submit", function() {
  if (!(feedbackFormName.value && feedbackFormEmail.value && feedbackFormMessage.value)) {
    event.preventDefault();
    console.log("Заполните все поля перед отправкой");
  } else {
    localStorage.setItem("name", feedbackFormName.value);
    localStorage.setItem("email", feedbackFormEmail.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (feedbackForm.classList.contains("feedback-form-show")) {
      feedbackForm.classList.remove("feedback-form-show");
      overlay.classList.remove("overlay-show");
    }
  }
})