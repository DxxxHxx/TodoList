const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const handleLoginForm = (event) => {
  event.preventDefault();
  const userName = loginInput.value;

  localStorage.setItem(USERNAME_KEY, userName);

  loginForm.classList.toggle(HIDDEN_CLASSNAME);

  paintGreeting(userName);
};

const paintGreeting = (userName) => {
  greeting.classList.toggle(HIDDEN_CLASSNAME);
  const hour=new Date().getHours()
  if(hour>=0 && hour<=10){
    greeting.innerText = `Good morning ${userName}🌞`;
  }
  else if(hour>=11 && hour<=17){
    greeting.innerText=`Good afternoon ${userName}⛅`;
  }
  else{
    greeting.innerText=`Good evening ${userName}🌙`;
  }
  
};

const savedUserName = localStorage.getItem(USERNAME_KEY);
if (savedUserName === null) {
  //loginform
  loginForm.classList.toggle(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginForm);
} else {
  //greeting
  paintGreeting(savedUserName);
}
