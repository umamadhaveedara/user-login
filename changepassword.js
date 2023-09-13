const currentpassword = document.getElementById("currentpassword")
const newpassword = document.getElementById("newpassword")
const confirmpassword = document.getElementById("confirmpassword")
const btn = document.getElementById("btn")
const currentpasswordmgs = document.getElementById("currentpasswordmgs")
const newpasswordmgs = document.getElementById("newpasswordmgs")
const confirmpasswordmgs = document.getElementById("confirmpasswordmgs")

var confirmpasswordvalid;
var newpasswordvalid;
var currentpasswordvalid;
var validcheck;

currentpassword.addEventListener('input',()=>{
    if(currentpassword.value.trim()===""){
        currentpasswordvalid = false;
    }
    else{
        currentpasswordmgs.textContent = ""
        currentpasswordvalid = true;
    }
})
newpassword.addEventListener('input',()=>{
    if(newpassword.value.trim()===""){
        // newpasswordmgs.textContent = ""
        newpasswordvalid = false;
    }else if(!newpassword.value.match(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)){
        newpasswordmgs.innerHTML = "<ul><p>Password Should contain</p><li>length should be between 6 and 16</li><li>One Special Char</li><li>One Uppercase & Number</li></ul>"
        newpasswordvalid = false;
    }
    else{
        newpasswordmgs.textContent = ""
        newpasswordvalid = true;
    }
})
confirmpassword.addEventListener('input',()=>{
    if(confirmpassword.value.trim()===""){
        confirmpasswordvalid = false;
    }else if(confirmpassword.value !== newpassword.value){
        confirmpasswordmgs.textContent = "Confirm Password did't match"
        confirmpasswordvalid = false;
    }
    else{
        confirmpasswordmgs.textContent = ""
        confirmpasswordvalid = true;
    }
})

function valid(event){
    if(newpassword.value === confirmpassword.value){
        validcheck = true
    }
    else if(newpassword.value !== confirmpassword.value){
        validcheck = false
    }
    if(confirmpasswordvalid && newpasswordvalid && currentpasswordvalid && validcheck){
        toastr.success("Sucessfully Updated")
        currentpassword.value = "";
        newpassword.value = "";
        confirmpassword.value = "";
        currentpasswordmgs.textContent = ""
        newpasswordmgs.textContent = ""
        confirmpasswordmgs.textContent = ""
        // btn.textContent = "Go Back"
        // btn.addEventListener("click",()=>{
        //     window.open("dashbord.html","_self")
        // })
        event.preventDefault()
        validcheck = false;
        newpasswordvalid = false;
        confirmpasswordvalid = false;
    }
    else if((confirmpasswordvalid && newpasswordvalid && currentpasswordvalid)&&(!validcheck)){
        toastr.info("confirm Password did not match")
        confirmpassword.value = "";
        event.preventDefault()
    }
    else if(!(confirmpasswordvalid && newpasswordvalid && currentpasswordvalid && validcheck)){
        // toastr.warning("All fields are required")
        if(currentpassword.value === ""){
            currentpasswordmgs.textContent = "This Field is required"
        }
        if(newpassword.value === ""){
            newpasswordmgs.textContent = "This Field is required"
        }
        if(confirmpassword.value === ""){
            confirmpasswordmgs.textContent = "This Field is required"
        }
        event.preventDefault()
    }
    
}
function profile(){
    window.open("profile.html",'_self')
}
function logout1(){
    window.open("index.html","_self")
  }
function gotodashbord(){
    window.open("dashbord.html","_self")
  }
