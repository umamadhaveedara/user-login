const forgot = document.getElementById("forgot");
const noaccount = document.getElementById("noaccount");
const emailvalid = document.getElementById("emailvalid");
const mailIndex = document.getElementById("mail-index");
const passwordIndex = document.getElementById("password-index");
const passvalid = document.getElementById("passvalid");
const submitBtn = document.getElementById("submit-btn")

forgot.addEventListener("click", () => {
  window.open("forgot.html", "_self");
});
noaccount.addEventListener("click", () => {
  window.open("create.html", "_self");
});

var validemaildata;
var validpassworddata;

mailIndex.addEventListener("input", () => {
  if (mailIndex.value.trim() === "") {
    emailvalid.textContent = "";
    validemaildata = false;
  } else if (
    !mailIndex.value.match(/(\<|^)[\w\d._%+-]+@(?:[\w\d-]+\.)+(\w{2,})(\>|$)/i)
  ) {
    emailvalid.textContent = "Please Enter a Valid Email";
    validemaildata = false;
  } else {
    emailvalid.textContent = "";
    validemaildata = true;
  }
});


passwordIndex.addEventListener("input", () => {
  if (passwordIndex.value.trim() === "") {
    passvalid.textContent = "";
    validpassworddata = false
  } else if (!passwordIndex.value.match(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
    passvalid.textContent = "Please Enter a Valid Password";
    validpassworddata = false
  } else {
    passvalid.textContent = "";
    validpassworddata = true
  }
});

function validlogin(event){
    if(validemaildata && validpassworddata){
      event.preventDefault()
      // alert("Sucessfully login")
      window.open("sucessfullylogin.html","_self")
    }
    else{
      passvalid.textContent = "Please Enter a Valid Password";
      emailvalid.textContent = "Please Enter a Valid Email";
      event.preventDefault()
    }
}
