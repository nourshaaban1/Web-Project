let inputs = document.querySelectorAll('input');
let iconsw = document.getElementsByClassName("bxs-check-circle");
let iconsx = document.getElementsByClassName("bxs-x-circle");
let form = document.getElementById('signup-form');
let p = document.querySelectorAll('p')

/////////////////////////////////////////////////////////////
const isValidUsername =   /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;
const isValidPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

form.addEventListener('submit',event => {
  event.preventDefault();
  
  validateUser();
  validatePassword();
  confirmPassword();
})

function validateUser() {
  
  const usernameValue = inputs[0].value.trim();
  
  if(usernameValue == "") {
    p[1].innerHTML = "User can't be empty"
    iconsx[0].style.display = "inline-block"
    inputs[0].style.boxShadow = "0px 0px 5px rgb(184, 17, 17)"
    return false;
  }

  else if (!isValidUsername.test(usernameValue)) {
    p[1].innerHTML = "The number of characters must be between 5 to 20."
    iconsx[0].style.display = "inline-block"
    inputs[0].style.boxShadow = "0px 0px 5px rgb(184, 17, 17)"
    return false;
  }

}

function validatePassword() {
  
  const passwordValue = inputs[1].value.trim();
  
  if(passwordValue == "") {
    p[2].innerHTML = "Password can't be empty"
    iconsx[1].style.display = "inline-block"
    inputs[1].style.boxShadow = "0px 0px 5px rgb(184, 17, 17)"
    return false;
  }

  else if (!isValidPassword.test(passwordValue)) {
    p[2].innerHTML = "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long."
    iconsx[1].style.display = "inline-block"
    inputs[1].style.boxShadow = "0px 0px 5px rgb(184, 17, 17)"
    return false;
  }
  
}

function confirmPassword() {
  
  const confirmValue = inputs[2].value.trim();
  
  if(confirmValue == "") {
    p[3].innerHTML = "Password can't be empty"
    iconsx[2].style.display = "inline-block"
    inputs[2].style.boxShadow = "0px 0px 5px rgb(184, 17, 17)"
    return false;
  }

  else if (passwordValue != confirmValue) {
    p[3].innerHTML = "not like password"
    iconsx[2].style.display = "inline-block"
    inputs[2].style.boxShadow = "0px 0px 5px rgb(184, 17, 17)"
    return false;
  }
  
}
