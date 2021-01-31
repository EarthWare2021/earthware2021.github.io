console.clear();
console.log("tests");

var username = "Angie";
var password = "pass1";
var myButton = document.getElementById("login");
myButton.addEventListener("click", logIn);
var myButton2 = document.getElementById("submit");
myButton2.addEventListener("click", see);
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
  var messageName = document.getElementById("first_name").value;
  var messageLastName = document.getElementById("last_name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  let incorrect = document.getElementById("incorrect");
  incorrect.innerText = "Invalid Login";
}
