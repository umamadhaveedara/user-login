const addUserPopUp = document.getElementById("addUserPopUp");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const emailmgs = document.getElementById("emailmgs");
const firstnamemgs = document.getElementById("firstnamemgs");
const lastnamemgs = document.getElementById("lastnamemgs");
const phonemgs = document.getElementById("phonemgs");
const imageInput = document.getElementById("image-input");
const imagePreview = document.getElementById("image-preview");
const photomgs = document.getElementById("photomgs");
// const userBox = document.getElementById("userBox");
const dataBox = document.getElementById("dataBox");

let cardURL = ""

function profile() {
  window.open("profile.html", "_self");
}
function changepassword1() {
  window.open("changepassword.html", "_self");
}
function logout1() {
  window.open("index.html", "_self");
}

function addUserBtn() {
  addUserPopUp.style.display = "block";
}
function ClosePopUp(event) {
  addUserPopUp.style.display = "none";
  event.preventDefault();
}
var validfirstnamedata;
var validlastnamedata;
var validemaildata;
var validPhoneData;
var validPhotoData;

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
phone.addEventListener("input", () => {
  if (phone.value.trim() === "") {
    phonemgs.textContent = "";
    validPhoneData = false;
  } else if (!phone.value.match(/^\d{10}$/)) {
    phonemgs.textContent = "Please Enter a Valid Phone Number";
    validPhoneData = false;
  } else {
    phonemgs.textContent = "";
    validPhoneData = true;
  }
});
firstname.addEventListener("input", () => {
  if (firstname.value.trim() === "") {
    firstnamemgs.textContent = "";
    validfirstnamedata = false;
  } else {
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
imageInput.addEventListener("change", function () {
  const file = imageInput.files[0];
  if (file) {
    const imageURL = URL.createObjectURL(file);
    console.log(imageURL,"here")
    imagePreview.src = imageURL;
    cardURL = imageURL;
    validPhotoData = true;
    photomgs.textContent = "";
  } else {
    imagePreview.src = "";
    validPhotoData = false;
    photomgs.textContent = "This field is required";
  }
});

function valid(event) {
  if (
    validfirstnamedata &&
    validlastnamedata &&
    validemaildata &&
    validPhoneData &&
    validPhotoData
  ) {
    toastr.success("Sucessfully User Added");
    console.log(imagePreview,"here2")
    addUserPopUp.style.display = "none";
    dataBox.innerHTML += `  <div class="userBox" id="userBox">
    <div class="userIcons">
      <i class="fa-solid fa-pen"></i>
      <i class="fa-solid fa-trash"></i>
    </div>
    <div class="userMainInfo">
      <div class="userImg"><img src="${cardURL}" alt="" srcset=""></div>
      <div class="userdata">
        <p>Name: ${firstname.value}</p>
        <p>Email: ${email.value}</p>
        <p>Mobile No: ${phone.value}</p>
      </div>
    </div>
  </div>`
    event.preventDefault();
    firstname.value ="";
    lastname.value ="";
    email.value ="";
  } else if (validemaildata) {
    firstnamemgs.textContent = "This field is required";
    lastnamemgs.textContent = "This field is required";
    phonemgs.textContent = "This field is required";
    photomgs.textContent = "This field is required";
    event.preventDefault();
  }else if (validfirstnamedata) {
    emailmgs.textContent = "This field is required";
    lastnamemgs.textContent = "This field is required";
    phonemgs.textContent = "This field is required";
    photomgs.textContent = "This field is required";
    event.preventDefault();
  }else if (validlastnamedata) {
    emailmgs.textContent = "This field is required";
    firstnamemgs.textContent = "This field is required";
    phonemgs.textContent = "This field is required";
    photomgs.textContent = "This field is required";
    event.preventDefault();
  }else if (validPhoneData) {
    emailmgs.textContent = "This field is required";
    firstnamemgs.textContent = "This field is required";
    lastnamemgs.textContent = "This field is required";
    photomgs.textContent = "This field is required";
    event.preventDefault();
  }else if (validPhotoData) {
    emailmgs.textContent = "This field is required";
    firstnamemgs.textContent = "This field is required";
    lastnamemgs.textContent = "This field is required";
    phonemgs.textContent = "This field is required";
    event.preventDefault();
  }else{
    emailmgs.textContent = "This field is required";
    firstnamemgs.textContent = "This field is required";
    lastnamemgs.textContent = "This field is required";
    phonemgs.textContent = "This field is required";
    photomgs.textContent = "This field is required";
    event.preventDefault()
  }
}
