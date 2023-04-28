const loginForm = document.querySelector(".login-form");
const message = document.querySelector(".message");
const loginInput = loginForm.querySelector("input");
const greeting1 = document.querySelector(".one");
const greeting2 = document.querySelector(".two");
const greeting3 = document.querySelector(".three");

const grediv = document.querySelector(".grediv");
const likediv = document.querySelector(".likediv");

const tteokImg = document.querySelector(".tteok");

const KEYUSERNAME = "username";
const CLASSHIDDEN = "hidden";

function onSubmit(event) {
    const inputUsername = loginInput.value;
    event.preventDefault();
    localStorage.setItem(KEYUSERNAME,inputUsername);
    loginForm.classList.add(CLASSHIDDEN);
    message.classList.add(CLASSHIDDEN);
    greeting2.innerText = ` ${inputUsername}`;
    greeting1.classList.remove(CLASSHIDDEN);
    greeting2.classList.remove(CLASSHIDDEN);
    greeting3.classList.remove(CLASSHIDDEN);
    grediv.classList.remove(CLASSHIDDEN);
    tteokImg.classList.remove(CLASSHIDDEN);
    likediv.classList.remove(CLASSHIDDEN);
}

const savedUserName =  localStorage.getItem(KEYUSERNAME);

if (savedUserName === null) {
    loginForm.classList.remove(CLASSHIDDEN);
    message.classList.remove(CLASSHIDDEN);
    loginForm.addEventListener("submit", onSubmit);
    
} else {
    greeting2.innerText = ` ${savedUserName}`;
    greeting1.classList.remove(CLASSHIDDEN);
    greeting2.classList.remove(CLASSHIDDEN);
    greeting3.classList.remove(CLASSHIDDEN);
    
    grediv.classList.remove(CLASSHIDDEN);
    tteokImg.classList.remove(CLASSHIDDEN);
    likediv.classList.remove(CLASSHIDDEN);

}

