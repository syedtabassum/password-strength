let state = false;
let password = document.getElementById("password");
let passwordStrength = document.getElementById("password-strength");
let lowerUppercase = document.querySelector(".low-upper-case i");
let oneNumber = document.querySelector(".one-number i");
let specialChar = document.querySelector(".special-char i");
let eight = document.querySelector(".eight-min i");

function toggle() {
  if (state) {
    document.getElementById("password").setAttribute("type", "password");
    state = false;
  } else {
    document.getElementById("password").setAttribute("type", "text");
    state = true;
  }
}
function myfunction(show) {
  show.classList.toggle("fa-eye-slash");
}

password.addEventListener("keyup", function () {
  let pass = password.value;
  checkStrength(pass);
});

function checkStrength(password) {
  let strength = 0;
  if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
    strength += 1;
    lowerUppercase.classList.remove("fa-circle");
    lowerUppercase.classList.add("fa-check");
  } else {
    lowerUppercase.classList.add("fa-circle");
    lowerUppercase.classList.remove("fa-check");
  }
  if (password.match(/([0-9])/)) {
    strength += 1;
    oneNumber.classList.remove("fa-circle");
    oneNumber.classList.add("fa-check");
  } else {
    oneNumber.classList.add("fa-circle");
    oneNumber.classList.remove("fa-check");
  }
  if (password.match(/([@,#,*,&])/)) {
    strength += 1;
    specialChar.classList.remove("fa-circle");
    specialChar.classList.add("fa-check");
  } else {
    specialChar.classList.add("fa-circle");
    specialChar.classList.remove("fa-check");
  }
  if (password.length > 7) {
    strength += 1;
    eight.classList.remove("fa-circle");
    eight.classList.add("fa-check");
  } else {
    eight.classList.add("fa-circle");
    eight.classList.remove("fa-check");
  }
  if(strength==0){
    passwordStrength.style = 'width:0%';
  }
  else if (strength==2){
    passwordStrength.classList.remove('progress-bar-warning');
    passwordStrength.classList.remove('progress-bar-success');
    passwordStrength.classList.add('progress-bar-danger');
    passwordStrength.style = "width:10%";
  }
  else if (strength==3){
    passwordStrength.classList.remove('progress-bar-danger');
    passwordStrength.classList.remove('progress-bar-success');
    passwordStrength.classList.add('progress-bar-warning');
    passwordStrength.style = "width:60%";
  }
  else if (strength==4){
    passwordStrength.classList.remove('progress-bar-danger');
    passwordStrength.classList.remove('progress-bar-warning');
    passwordStrength.classList.add('progress-bar-success');
    passwordStrength.style = "width:100%";
  }
}
