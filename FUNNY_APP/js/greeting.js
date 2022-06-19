const loginForm = document.querySelector("#login-form");   
const loginInput = document.querySelector("#login-form input");   
const greeting = document.querySelector("#greeting");   

const HIDDEN_CLASS="hidden";
const USERNAME_KEY="username";

function onLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASS);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintingUsername(username);
}

function paintingUsername(username){
  greeting.innerText=`HELLO ! [${username}]`;
  greeting.classList.remove(HIDDEN_CLASS);
}

const savedName=localStorage.getItem(USERNAME_KEY);
if(savedName === null){
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);  
} else{
  paintingUsername(savedName);
}

