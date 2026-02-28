const toggleIcon = document.getElementById("toggle-icon");
const navMenu = document.getElementById("navMenu");

toggleIcon.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// javascript for contact form

let loginBtn = document.querySelector(".login-btn");
let registerBtn = document.querySelector(".register-btn");
let accountWrapper = document.querySelector(".account-wrapper")
let indicator = document.querySelector(".indicator")
let clickRegisterbtn = () => {
    accountWrapper.style.transform = "translateX(-50%)";
    indicator.style.transform = "translateX(240%)";
}
let loginBtnclick = () => {
    accountWrapper.style.transform = "translateX(0%)";
    indicator.style.transform = "translateX(0%)";
}
registerBtn.addEventListener("click", clickRegisterbtn);
loginBtn.addEventListener("click", loginBtnclick)

