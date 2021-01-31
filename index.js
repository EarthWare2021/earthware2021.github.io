console.clear();
console.log("tests");

var username = "User1";
var password = "pass1";
var myButton = document.getElementById("login");
myButton.addEventListener("click", logIn);
var myButton2 = document.getElementById("submit");
myButton2.addEventListener("click", see);
var myButton3 = document.getElementById("button3");
myButton3.addEventListener("click", request);
function logIn() {
  var ident = document.getElementById("user").value;
  var ident2 = document.getElementById("pass").value;
  if (username === ident && password === ident2) {
    updateScreen();
  } else {
    updateScreen2();
  }
}

function updateScreen() {
  window.location.assign("messages.html");
}

function updateScreen2() {
  let incorrect = document.getElementById("incorrect");
  incorrect.innerText = "Invalid Login";
}

function see() {
  var messageName = localStorage.getItem("first_name");
  var messageLastName = localStorage.getItem("last_name");
  var email = localStorage.getItem("email");
  var phone = localStorage.getItem("phone");
  let message = document.getElementById("message");
  message.innerText =
    messageName +
    " " +
    messageLastName +
    " wants to volunteer! Email: " +
    email +
    " Phone: " +
    phone;
}

function request() {
  var messageName2 = localStorage.getItem("name2");
  var text = localStorage.getItem("text");
  let message = document.getElementById("request");
  message.innerText = messageName2 + " says " + text;
}
