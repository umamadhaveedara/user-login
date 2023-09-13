const login = document.getElementById("login");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
// const password = document.getElementById("password");
// const passwordmgs = document.getElementById("passwordmgs");
const emailmgs = document.getElementById("emailmgs");
const firstnamemgs = document.getElementById("firstnamemgs");
const lastnamemgs = document.getElementById("lastnamemgs");

var validemaildata;
// var validpassworddata;
var validfirstnamedata;
var validlastnamedata;

function changepassword1() {
  window.open("changepassword.html", "_self");
}
function logout1(){
  window.open("index.html","_self")
}
function gotodashbord(){
  window.open("dashbord.html","_self")
}
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
    validfirstnamedata &&
    validlastnamedata
  ) {
    event.preventDefault();
    // window.open("sucessfullycreated.html", "_self");
    // alert("Sucessfully created an account!")
    firstname.value = "";
    lastname.value = "";
    email.value = "";
    toastr.success("Sucessfully Updated")
    event.preventDefault();
    validemaildata = false;
    validfirstnamedata = false;
    validlastnamedata = false;
  } else if (validemaildata) {
    firstnamemgs.textContent = "This field is required";
    lastnamemgs.textContent = "This field is required";
    event.preventDefault();
  } else if (validfirstnamedata) {
    emailmgs.textContent = "Please Enter a Valid Email";
    lastnamemgs.textContent = "This field is required";
    event.preventDefault();
  } else if (validlastnamedata) {
    emailmgs.textContent = "Please Enter a Valid Email";
    firstnamemgs.textContent = "This field is required";
    event.preventDefault();
  }else if(validfirstnamedata && validlastnamedata){
    firstnamemgs.textContent = "";
    lastnamemgs.textContent = "";
  }else if(validfirstnamedata && validemaildata){
    firstnamemgs.textContent = "";
    emailmgs.textContent = "";
  }
  else {
    // alert("Please fill all the details")
    emailmgs.textContent = "Please Enter a Valid Email";
    firstnamemgs.textContent = "This field is required";
    lastnamemgs.textContent = "This field is required";
    event.preventDefault();
  }
}
