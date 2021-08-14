function getEle(id) {
  return document.getElementById(id);
}

function setStyle(id) {
  let obj = getEle(id);
  obj.style.fontWeight = "bold";
  obj.style.borderBottom = "2px solid black";
}

function removeStyle(id) {
  let obj = getEle(id);
  obj.style.fontWeight = "normal";
  obj.style.borderBottom = "none";
}

function login() {
  setStyle("login");
  removeStyle("signup");
  getEle("cpass").style.display = "none";
  getEle("hello_text").style.display = "none";
  getEle("welcome_text").style.display = "block";
  getEle("forgot_block").style.display = "block";
}

function signup() {
  setStyle("signup");
  removeStyle("login");
  getEle("cpass").style.display = "block";
  getEle("hello_text").style.display = "block";
  getEle("welcome_text").style.display = "none";
  getEle("forgot_block").style.display = "none";
}

function getValid(exp, val) {
  let re = RegExp(exp);
  return re.test(val);
}

function spanInv(text, id) {
  let sp = getEle(id);
  if (text != null) {
    sp.innerHTML = text;
    return;
  }
  sp.innerHTML = "";
}

function checkValid() {
  emailValidation();
  passValidation();
}

function disableButton() {
  getEle("button").disabled = true;
}

function enableButton() {
  getEle("button").disabled = false;
}

function emailValidation() {
  let obj = getEle("email");
  if (
    getValid(
      "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
      obj.value
    )
  ) {
    obj.value = obj.value.toLowerCase();
    spanInv(null, "email_error");
    enableButton();
  } else {
    spanInv("Email is invalid", "email_error");
    disableButton();
  }
}

function passValidation() {
  let obj = getEle("pass");
  if (
    getValid(
      "^(?=(.*[a-z]){3,})(?=(.*[A-Z]){2,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()-__+.]){1,}).{8,}$",
      obj.value
    )
  ) {
    spanInv(null, "password_error");
    enableButton();
  } else {
    spanInv("Password is invalid", "password_error");
    disableButton();
  }
}

function cpassValidation() {
  let obj = getEle("cpassi");
  let obj2 = getEle("pass");
  if (obj === obj2) {
    spanInv(null, "cpassword_error");
    enableButton();
  } else {
    spanInv("Password doesn't match", "cpassword_error");
    disableButton();
  }
}
