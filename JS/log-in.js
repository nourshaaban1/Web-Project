let input = document.querySelectorAll('input');
let errorUser = document.querySelector('#validation0');
let errorPass = document.querySelector('#validation1');
let form = document.getElementById("form");
let iconCheck = document.querySelectorAll("#check");
let iconWrong = document.querySelectorAll("#wrong");

console.log(iconCheck)

form.addEventListener("submit", e => {
    // Validate User
    if(input[0].value.trim() === '' || input[0].value.trim() == null) {
        e.preventDefault();
        iconWrong[0].classList.add("wrong");
        errorUser.innerHTML = "Username is required";
    }
    else if(input[0].value.trim().length < 5) {
        e.preventDefault()
        iconWrong[0].classList.add("wrong")
        errorUser.innerHTML = "Username can't be less than 5 characters";
    }
    else {
        iconCheck[0].classList.add("check");
        iconWrong[0].classList.remove("wrong");
        errorUser.innerHTML = "Valid User !";
        errorUser.style.color = "#0FA2B4";
    }
    // Validate User

    // Validate Password
    if(input[1].value === '' || input[1].value == null) {
        e.preventDefault();
        iconWrong[1].classList.add('wrong');
        errorPass.innerHTML = "Password is required";
    }
    else {
        iconCheck[1].classList.add("check");
        iconWrong[1].classList.remove("wrong");
        errorPass.innerHTML = "Good!";
        errorPass.style.color = "#0FA2B4";
    }
})



