var formButton = document.querySelector(".contacts-button");
var formModal = document.querySelector(".form-modal");
var formCloseButton = formModal.querySelector(".form-modal-close");
var messageForm = formModal.querySelector("form");
var formName = formModal.querySelector("[name=user-name]");
var formEmail = formModal.querySelector("[name=user-mail]");
var formUserMessage = formModal.querySelector("textarea");
var mapButton = document.querySelector(".contacts-map");
var mapModal = document.querySelector(".map-modal");
var mapCloseButton = mapModal.querySelector(".form-modal-close");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("user-name");
  storageEmail = localStorage.getItem("user-email");
} catch (err) {
  isStorageSupport = false;
}

formButton.addEventListener("click", function(openForm) {
    openForm.preventDefault();
    formModal.classList.add("modal-show");
    if (storageName || storageEmail) {
      if (storageName) {
        formName.value = storageName;
        formEmail.focus();
      }
      if (storageEmail) {
        formEmail.value = storageEmail;
        formUserMessage.focus();
      }
    } else {
      formName.focus();
    }
  }
);

formCloseButton.addEventListener("click", function(closeForm) {
  closeForm.preventDefault();
  formModal.classList.remove("modal-show");
  formModal.classList.remove("modal-error");
});

messageForm.addEventListener("submit", function(submitForm) {
  if (!formName.value || !formEmail.value) {
    submitForm.preventDefault();
    formModal.classList.remove("modal-error");
    formModal.offsetWidth = formModal.offsetWidth;
    formModal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("user-name", formName.value);
      localStorage.setItem("user-email", formEmail.value);
    }
  }
});

window.addEventListener("keydown", function (closeForm) {
  if (closeForm.keyCode === 27) {
    closeForm.preventDefault();
    if (formModal.classList.contains("modal-show")) {
      formModal.classList.remove("modal-show");
      if (formModal.classList.contains("modal-error")){
        formModal.classList.add("modal-error");
      }
    }
    if (mapModal.classList.contains("modal-show")) {
      mapModal.classList.remove("modal-show");
    }
  }
});

mapButton.addEventListener("click", function(openMap) {
  openMap.preventDefault();
  mapModal.classList.add("modal-show");
});

mapCloseButton.addEventListener("click", function(closeMap) {
  closeMap.preventDefault();
  mapModal.classList.remove("modal-show");
});
