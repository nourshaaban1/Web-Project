let inputs = document.querySelectorAll('input');
let iconsw = document.querySelectorAll(".bxs-check-circle");
let iconsx = document.querySelectorAll(".bxs-x-circle");
let form = document.getElementById('form');
let p = document.querySelectorAll('.sign-up .info .register form p');
console.log(form);

/////////////////////////////////////////////////////////////
const isValidUsername =   /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;
const isValidPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

form.addEventListener('submit', event => {
  
  // Validate User
  if(inputs[0].value.trim() === '' || inputs[0].value.trim() == null) {
    event.preventDefault();
    iconsx[0].classList.add("wrong");
    p[0].innerHTML = "Username is required";
  }
  else if(inputs[0].value.trim().length < 5) {
    event.preventDefault()
    iconsx[0].classList.add("wrong")
    p[0].innerHTML = "Username can't be less than 5 characters";
  }
  else {
    iconsw[0].classList.add("check");
    iconsx[0].classList.remove("wrong");
    p[0].innerHTML = "Valid User !";
    p[0].style.color = "#0FA2B4";
  }
  // Validate User

  // Validate Password
  if(inputs[1].value === '' || inputs[1].value == null) {
    event.preventDefault();
    iconsx[1].classList.add('wrong');
    p[1].innerHTML = "Password is required";
  }
  else if (inputs[1].value.length < 5) {
    event.preventDefault();
    iconsx[1].classList.add('wrong');
    p[1].innerHTML = "Password can't be less than 5"
  }
  else if (inputs[1].value.length > 20){
    event.preventDefault();
    iconsx[1].classList.add('wrong');
    p[1].innerHTML = "Password can't be more than 20"  
  }
  else {
    iconsw[1].classList.add("check");
    iconsx[1].classList.remove("wrong");
    p[1].innerHTML = "Good!";
    p[1].style.color = "#0FA2B4";
  }
  // Validate Password
  
  // Validate confirm

  if(inputs[2].value !== inputs[1].value) {
    event.preventDefault();
    iconsx[2].classList.add('wrong');
    p[2].innerHTML = "Passwords not the same";
  }
  else if(inputs[2].value === "" || inputs[2].value == null) {
    event.preventDefault();
    iconsx[2].classList.add('wrong');
    p[2].innerHTML = "Can't Be Empty";  
  }
  else {
    iconsw[2].classList.add("check");
    iconsx[2].classList.remove("wrong");
    p[2].innerHTML = "Good!";
    p[2].style.color = "#0FA2B4";
  }
  // Validate Password

  let isChecked = document.getElementById('admin').checked;
  let role;

  if (isChecked) {
    role = 'admin';
  } else {
    role = 'user';
  }

  localStorage.setItem('role', JSON.stringify(role)); 
})

