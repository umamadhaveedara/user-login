const login = document.getElementById("login");
const email = document.getElementById("email");
const emailvalid = document.getElementById("emailvalid");

login.addEventListener("click", () => {
  window.open("index.html", "_self");
});
var validemaildata;
email.addEventListener("input", () => {
  if (email.value.trim() === "") {
    emailvalid.textContent = "";
    validemaildata = false;
  } else if (
    !email.value.match(/(\<|^)[\w\d._%+-]+@(?:[\w\d-]+\.)+(\w{2,})(\>|$)/i)
  ) {
    // emailvalid.textContent = "This field is required";
    emailvalid.textContent = "Please Enter a Valid Email";
    validemaildata = false;
  } else {
    emailvalid.textContent = "";
    validemaildata = true;
  }
});

function validcheck(event){
    if(validemaildata){
      event.preventDefault()
      toastr.success("Sucessfully Email sent")
      // window.open("forgotmail.html","_self")
      // alert("Mail sent sucessfully")
      email.value = ""
    }else{
      // alert("Please Enter a Valid Email")
      emailvalid.textContent = "This field is required";
      event.preventDefault()
    }
}