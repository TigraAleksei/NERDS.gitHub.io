var link = document.querySelector(".button-footer-content");
var popup = document.querySelector(".form-nerds-feedback");
var overlay = document.querySelector(".modal-overlay");
var close = popup.querySelector(".button-form-close");
var closeall = document.querySelector(".modal-overlay");
var form = popup.querySelector("form");
var userName = popup.querySelector("[name=name-user]");
var userEmail = popup.querySelector("[name=e-mail]");
var userTextarea = popup.querySelector("[name=write-letter]");
  
  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("userName");
    storage = localStorage.getItem("userEmail");
    storage = localStorage.getItem("userTextarea");
  } catch (err) {
    isStorageSupport = false;
  }
  
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("modal-show-overlay");
    if (storage) {
    userName.value = storage;
    userEmail.value = storage;
    userTextarea.focus();
  } else {
    userName.focus();
  }
  });

  closeall.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("modal-show-overlay");
  });
  
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("modal-show-overlay");
  });
  
  form.addEventListener("submit", function (evt) {
    if (!userName.value || !userEmail.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("userName", userName.value);
      }
    }
  });
  
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        overlay.classList.remove("modal-show-overlay");
        popup.classList.remove("modal-error");
      }
    }
  });