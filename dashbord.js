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
const addUserMainBtn = document.getElementById("addUserMainBtn")
let cardURL = "";
let users = [];

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
  addUserMainBtn.innerText = "Add User"
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
    var imageURL = URL.createObjectURL(file);
    console.log(imageURL, "here");
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

function adduser() {
  var firstname1 = firstname.value;
  var lastname1 = lastname.value;
  var email1 = email.value;
  var phone1 = phone.value;
  const user = { firstname1, lastname1, email1, phone1, image: cardURL };
  users.push(user);
  addUserPopUp.style.display = "none";
}

function displayuser() {
  dataBox.innerHTML = "";
  users.forEach((userdata, index) => {
    const card = document.createElement("div");
    card.className = "userBox";
    card.innerHTML = `<div class="userIcons"><button onclick="updateUser(${index})"><i class="fa-solid fa-pen"></i></button><button onclick="deleteUser(${index})"><i class="fa-solid fa-trash"></i></button></div><div class="userMainInfo"><div class="userImg"><img src="${userdata.image}" alt="" srcset=""></div><div class="userdata"><p>Name: ${userdata.firstname1} ${userdata.lastname1}</p><p>Email: ${userdata.email1}</p><p>Mobile No: ${userdata.phone1}</p></div></div>`;
    dataBox.appendChild(card);
  });
}

function deleteUser(index) {
  URL.revokeObjectURL(users[index].image);
  users.splice(index, 1);
  displayuser();
}

function updateUser(index) {
  const user = users[index];
  document.getElementById("firstname").value = user.firstname1;
  document.getElementById("lastname").value = user.lastname1;
  document.getElementById("email").value = user.email1;
  document.getElementById("phone").value = user.phone1;
  document.getElementById("image-input").value = "";
  addUserPopUp.style.display = "block";
  addUserMainBtn.innerText = "Update User"
  deleteUser(index);
}

function clearForm() {
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("image-input").value = "";
  imagePreview.src = "";
}


function valid(event) {
  if (
    validfirstnamedata &&
    validlastnamedata &&
    validemaildata &&
    validPhoneData &&
    validPhotoData
  ) {
    toastr.success("Sucessfully User Added");
    adduser();
    displayuser();
    clearForm();
    event.preventDefault();
  } else if (validemaildata) {
    firstnamemgs.textContent = "This field is required";
    lastnamemgs.textContent = "This field is required";
    phonemgs.textContent = "This field is required";
    photomgs.textContent = "This field is required";
    event.preventDefault();
  } else if (validfirstnamedata) {
    emailmgs.textContent = "This field is required";
    lastnamemgs.textContent = "This field is required";
    phonemgs.textContent = "This field is required";
    photomgs.textContent = "This field is required";
    event.preventDefault();
  } else if (validlastnamedata) {
    emailmgs.textContent = "This field is required";
    firstnamemgs.textContent = "This field is required";
    phonemgs.textContent = "This field is required";
    photomgs.textContent = "This field is required";
    event.preventDefault();
  } else if (validPhoneData) {
    emailmgs.textContent = "This field is required";
    firstnamemgs.textContent = "This field is required";
    lastnamemgs.textContent = "This field is required";
    photomgs.textContent = "This field is required";
    event.preventDefault();
  } else if (validPhotoData) {
    emailmgs.textContent = "This field is required";
    firstnamemgs.textContent = "This field is required";
    lastnamemgs.textContent = "This field is required";
    phonemgs.textContent = "This field is required";
    event.preventDefault();
  } else {
    emailmgs.textContent = "This field is required";
    firstnamemgs.textContent = "This field is required";
    lastnamemgs.textContent = "This field is required";
    phonemgs.textContent = "This field is required";
    photomgs.textContent = "This field is required";
    event.preventDefault();
  }
}
