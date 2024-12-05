const signupBtn = document.querySelector("#signupBtn");
const signupNameInput = document.querySelector("#signupName");
const signupEmailInput = document.querySelector("#signupEmail");
const signupPasswordInput = document.querySelector("#signupPassword");
const loginAnchor = document.querySelector("#loginAnchor");
const signUpinputsRequired = document.querySelector("#inputs-required");
const successMsg = document.querySelector("#success-msg");
const emailExist = document.querySelector("#email-exst");

let users = [];

if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

function signUp() {
  let user = {
    name: signupNameInput.value,
    email: signupEmailInput.value,
    password: signupPasswordInput.value,
  };

  if (
    signupNameInput.value === "" ||
    signupEmailInput.value === "" ||
    signupPasswordInput.value === ""
  ) {
    signUpinputsRequired.classList.remove("d-none");
    return;
  }

  if (
    isValidEmail(signupEmailInput.value) &&
    isNewEmail(signupEmailInput.value)
  ) {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    clearForm();
    console.log(users);
    successMsg.classList.remove("d-none");
    emailExist.classList.add("d-none");
  } else {
    emailExist.classList.remove("d-none");
    signUpinputsRequired.classList.add("d-none");
    successMsg.classList.add("d-none");
  }
}

signupBtn.addEventListener("click", function () {
  signUp();
});

function isValidEmail(email) {
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function isNewEmail(email) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      return false;
    }
  }
  return true;
}

function clearForm() {
  signupNameInput.value = "";
  signupEmailInput.value = "";
  signupPasswordInput.value = "";
}

loginAnchor.addEventListener("click", function () {
  window.location.href = "index.html";
});
