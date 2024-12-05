const loginEmailInput = document.querySelector("#loginEmail");
const loginPasswordInput = document.querySelector("#loginPassword");
const loginBtn = document.querySelector("#loginBtn");
const signupAnchor = document.querySelector("#signupAnchor");
const inputsRequired = document.querySelector("#inputs-required");
const wrongCred = document.querySelector("#wrong-cred");

let users = [];

if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

function signIn() {
  const loginEmail = loginEmailInput.value;
  const loginPassword = loginPasswordInput.value;

  if (loginEmail === "" || loginPassword === "") {
    inputsRequired.classList.remove("d-none");
    return;
  }

  if (isCorrectEmailAndPassword(loginEmail, loginPassword)) {
    window.location.href = "home.html";
  } else {
    wrongCred.classList.remove("d-none");
  }
}

function isCorrectEmailAndPassword(email, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      localStorage.setItem("userName", users[i].name);
      return true;
    }
  }
  return false;
}

loginBtn.addEventListener("click", function (e) {
  signIn();
});

signupAnchor.addEventListener("click", function () {
  window.location.href = "signup.html";
});
