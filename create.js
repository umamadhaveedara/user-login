const login = document.getElementById("login");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordmgs = document.getElementById("passwordmgs");
const emailmgs = document.getElementById("emailmgs");
const firstnamemgs = document.getElementById("firstnamemgs");
const lastnamemgs = document.getElementById("lastnamemgs");

login.addEventListener("click", () => {
  window.open("index.html", "_self");
});

var validemaildata;
var validpassworddata;
var validfirstnamedata;
var validlastnamedata;

email.addEventListener("input", () => {
  if (email.value.trim() === "") {
    emailmgs.textContent = "";
    validemaildata = false;
  } else if (
    !email.value.match(/(\<|^)[\w\d._%+-]+@(?:[\w\d-]+\.)+(\w{2,})(\>|$)/i)
  ) {
    emailmgs.textContent = "Please Enter a Valid Email";
    validemaildata = false;
  } else {
    emailmgs.textContent = "";
    validemaildata = true;
  }
});

password.addEventListener("input", () => {
  if (password.value.trim() === "") {
    passwordmgs.textContent = "";
    validpassworddata = false;
  } else if (
    !password.value.match(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    )
  ) {
    // passwordmgs.textContent = "Password length should be between 6 and 16";
    passwordmgs.innerHTML =
      "<ul><p>Password Should contain</p><li>length should be between 6 and 16</li><li>One Special Char</li><li>One Uppercase & Number</li></ul>";
    validpassworddata = false;
  } else {
    passwordmgs.textContent = "";
    validpassworddata = true;
  }
});

firstname.addEventListener("input", () => {
  if (firstname.value.trim() === "") {
    firstnamemgs.textContent = "";
    validfirstnamedata = false;
  }
  // else if (!firstname.value === "") {
  //   firstnamemgs.textContent = "";
  //   validpassworddata = true
  // }
  else {
    validfirstnamedata = true;
    firstnamemgs.textContent = "";
  }
});

lastname.addEventListener("input", () => {
  if (lastname.value.trim() === "") {
    lastnamemgs.textContent = "";
    validlastnamedata = false;
  } else {
    validlastnamedata = true;
    lastnamemgs.textContent = "";
  }
});

function valid(event) {
  if (
    validemaildata &&
    validpassworddata &&
    validfirstnamedata &&
    validlastnamedata
  ) {
    event.preventDefault();
    // window.open("sucessfullycreated.html", "_self");
    toastr.success("Sucessfully created!")
    // alert("Sucessfully created an account!")
    firstname.value = "";
    lastname.value = "";
    email.value = "";
    password.value = "";
    // event.preventDefault();
  } else if (validemaildata) {
    firstnamemgs.textContent = "This field is required";
    lastnamemgs.textContent = "This field is required";
    passwordmgs.innerHTML =
      "<ul><p>Password Should contain</p><li>length should be between 6 and 16</li><li>One Special Char</li><li>One Uppercase & Number</li></ul>";
    event.preventDefault();
  } else if (validpassworddata) {
    emailmgs.textContent = "Please Enter a Valid Email";
    firstnamemgs.textContent = "This field is required";
    lastnamemgs.textContent = "This field is required";
    event.preventDefault();
  } else if (validfirstnamedata) {
    emailmgs.textContent = "Please Enter a Valid Email";
    lastnamemgs.textContent = "This field is required";
    passwordmgs.innerHTML =
      "<ul><p>Password Should contain</p><li>length should be between 6 and 16</li><li>One Special Char</li><li>One Uppercase & Number</li></ul>";
    event.preventDefault();
  } else if (validlastnamedata) {
    emailmgs.textContent = "Please Enter a Valid Email";
    firstnamemgs.textContent = "This field is required";
    passwordmgs.innerHTML =
      "<ul><p>Password Should contain</p><li>length should be between 6 and 16</li><li>One Special Char</li><li>One Uppercase & Number</li></ul>";
    event.preventDefault();
  } else if (validemaildata && validpassworddata) {
    firstnamemgs.textContent = "This field is required";
    lastnamemgs.textContent = "This field is required";
  } else if((validpassworddata)&& !(validfirstnamedata && validlastnamedata)){
    passwordmgs.innerHTML = "";
    firstnamemgs.textContent = "This field is required";
    lastnamemgs.textContent = "This field is required";
  }
  else {
    // alert("Please fill all the details")
      emailmgs.textContent = "Please Enter a Valid Email";
      firstnamemgs.textContent = "This field is required";
      lastnamemgs.textContent = "This field is required";
    passwordmgs.innerHTML =
      "<ul><p>Password Should contain</p><li>length should be between 6 and 16</li><li>One Special Char</li><li>One Uppercase & Number</li></ul>";
    event.preventDefault();
  }
}
