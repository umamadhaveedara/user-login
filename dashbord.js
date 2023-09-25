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
const addUserMainBtn = document.getElementById("addUserMainBtn");
const popuptitle = document.getElementById("popuptitle");
// const updateUserMainBtn = document.getElementById("updateUserMainBtn");
const deletePopUp = document.getElementById("deletePopUp");
const search = document.getElementById("search");
const emptyDataPopUp = document.getElementById("emptyDataPopUp")
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
  addUserMainBtn.innerText = "Add User";
  popuptitle.innerText = "Add User";

  addUserPopUp.scrollTop = 0;
}
function ClosePopUp(event) {
  addUserPopUp.style.display = "none";
  event.preventDefault();
  clearForm();
}

var validfirstnamedata;
var validlastnamedata;
var validemaildata;
var validPhoneData;
var validPhotoData;
var recheckemail;
var recheckpassword;

// email.addEventListener("input",()=>{
//   users.forEach((checking, index)=>{
//     if(email.value.trim() === checking.email1){
//       recheck = false;
//     }else if(
//       phone.addEventListener("input",()=>{
//         users.forEach((checkingphone, index)=>{
//           if(phone.value.trim() === checkingphone.phone1){
//             recheck = false;
//           }
//         })
//       })
//     )
//   })
// })

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
function handleImageUrl(event) {
  let file;
  const files = event.target.files;
  if (files) {
    file = files && files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      imagePreview.src = reader.result;
      cardURL = reader.result;
      validPhotoData = true;
      photomgs.textContent = "";
    };
    //var imageURL = URL.createObjectURL(file);
    // console.log(imageURL, "here");
  } else {
    imagePreview.src = "";
    validPhotoData = false;
    photomgs.textContent = "This field is required";
  }
}

function adduser() {
  var firstname1 = firstname.value;
  var lastname1 = lastname.value;
  var email1 = email.value;
  var phone1 = phone.value;
  const user = { firstname1, lastname1, email1, phone1, image: cardURL };
  users.push(user);
  addUserPopUp.style.display = "none";
  clearForm();
}
var users2 = "";
search.addEventListener("input", (event) => {
  searchValue = event.target.value;
  var searchData = users.filter((user) => {
    return (
      user.firstname1.includes(searchValue) ||
      user.lastname1.includes(searchValue) ||
      user.email1.includes(searchValue) ||
      user.phone1.includes(searchValue)
    );
  });
  users2 = searchData;
  displayuser();
});

function displayuser() {
  if (search.value.trim() === "") {
    dataBox.innerHTML = "";
    users.forEach((userdata, index) => {
      const card = document.createElement("div");
      card.className = "userBox";
      card.innerHTML = `<div class="userIcons"><button onclick="updateUser(${index})"><i class="fa-solid fa-pen"></i></button><button onclick="deleteUser(${index})"><i class="fa-solid fa-trash"></i></button></div><div class="userMainInfo"><div class="userImg"><img src="${userdata.image}" alt="" srcset=""></div><div class="userdata"><p>Name: ${userdata.firstname1} ${userdata.lastname1}</p><p>Email: ${userdata.email1}</p><p>Mobile No: ${userdata.phone1}</p></div></div>`;
      dataBox.appendChild(card);
      emptyDataPopUp.style.display = "none"
    });
  } else if(search.value.trim() !== ""){
    dataBox.innerHTML = "";
    if(users2 != ""){
      users2.forEach((userdata, index) => {
        const card = document.createElement("div");
        card.className = "userBox";
        card.innerHTML = `<div class="userIcons"><button onclick="updateUser(${index})"><i class="fa-solid fa-pen"></i></button><button onclick="deleteUser(${index})"><i class="fa-solid fa-trash"></i></button></div><div class="userMainInfo"><div class="userImg"><img src="${userdata.image}" alt="" srcset=""></div><div class="userdata"><p>Name: ${userdata.firstname1} ${userdata.lastname1}</p><p>Email: ${userdata.email1}</p><p>Mobile No: ${userdata.phone1}</p></div></div>`;
        dataBox.appendChild(card);
      });
    }else if(users2 == ""){
      emptyDataPopUp.style.display = "block"
    }
    
  }
}
let userDeleteIndex = "";
function deleteUser(index) {
  userDeleteIndex = index;
  deletePopUp.style.display = "block";
}
function deleteyes(event) {
  URL.revokeObjectURL(users[userDeleteIndex].image);
  users.splice(userDeleteIndex, 1);
  displayuser();
  deletePopUp.style.display = "none";
  toastr.info("User data deleted");
  event.preventDefault();
}
function deleteno(event) {
  displayuser();
  deletePopUp.style.display = "none";
  event.preventDefault();
}
var a = "add";
// console.log(a);
var indexValue = "";
function updateUser(index) {
  indexValue = index;
  const user = users[index];
  a = "edit";
  // console.log(user, index, a);
  document.getElementById("firstname").value = user.firstname1;
  document.getElementById("lastname").value = user.lastname1;
  document.getElementById("email").value = user.email1;
  document.getElementById("phone").value = user.phone1;
  document.getElementById("image-input").value = "";
  if (imageInput.value === "") {
    user.image = user.image;
  }
  document.getElementById("image-preview").src = user.image;
  addUserPopUp.style.display = "block";
  addUserMainBtn.innerText = "Update User";
  popuptitle.innerText = "Update User";
  // user.firstname1 = document.getElementById("firstname").value;
  // user.lastname1 = document.getElementById("lastname").value
  // user.email1 = document.getElementById("email").value
  // user.phone1 = document.getElementById("phone").value
  users[index].firstname1 = firstname.value;
  users[index].lastname1 = lastname.value;
  users[index].email1 = email.value;
  users[index].phone1 = phone.value;
  addUserPopUp.scrollTop = 0;
}
function edituser() {
  users[indexValue].firstname1 = firstname.value;
  users[indexValue].lastname1 = lastname.value;
  users[indexValue].email1 = email.value;
  users[indexValue].phone1 = phone.value;
  users[indexValue].image = cardURL;
  addUserPopUp.style.display = "none";
  clearForm();
}

function clearForm() {
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("image-input").value = "";
  imagePreview.src = "";
  // validfirstnamedata = false;
  // validlastnamedata = false;
  // validemaildata = false;
  // validPhoneData = false;
  // validPhotoData = false;
  firstnamemgs.textContent = "";
  lastnamemgs.textContent = "";
  phonemgs.textContent = "";
  photomgs.textContent = "";
  emailmgs.textContent = "";
}

// search.addEventListener("input",(event)=>{
//   searchValue = event.target.value;
//   console.log(searchValue)
//   let searchData = users.filter((user) =>{
//     var isVisiable = user.firstname1.includes(searchValue) || user.lastname1.includes(searchValue) || user.email1.includes(searchValue) || user.phone1.includes(searchValue)
//   })
// })


function valid(event) {
  if (
    firstname.value !== "" &&
    validfirstnamedata &&
    validlastnamedata &&
    validemaildata &&
    validPhoneData &&
    validPhotoData
  ) {
    if (a === "edit") {
      edituser();
      displayuser();
      toastr.success("Sucessfully User Updated");
      a = "add";
      addUserMainBtn.innerText = "Add User";
    } else if (a === "add") {
      adduser();
      displayuser();
      // console.log(users);
      toastr.success("Sucessfully User Added");
      clearForm();
    }
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
  }
  // else if(!recheckemail || !recheckpassword){
  //   toastr.info("Data allready exist");
  //   recheckemail = false;
  //   recheckpassword = false;
  //   event.preventDefault();
  // }
  else {
    emailmgs.textContent = "This field is required";
    firstnamemgs.textContent = "This field is required";
    lastnamemgs.textContent = "This field is required";
    phonemgs.textContent = "This field is required";
    photomgs.textContent = "This field is required";
    event.preventDefault();
  }
}
