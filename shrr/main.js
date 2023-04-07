const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});
let my_url="http://localhost:4200/"
document.getElementById("btn1").onclick=
function(){
  window.location.replace(my_url);
}
let my_url2="index2.html"
document.getElementById("btn2").onclick=
function(){
  window.location.replace(my_url2);
}
let my_url3="index3.html"
document.getElementById("btn3").onclick=
function(){
  window.location.replace(my_url3);
}

const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: false,
  dots: true,
  centerMode: true,
  arrows: false,
  responsive: {
    480: {
      dots: false, // dots enabled 1280px and up
    },
  },
});
var menuItem = document.getElementById("MenuItem")

MenuItem.style.maxheight = "0px";

function menutoggle(){
    if(MenuItem.style.maxHeight == "0px")
    {
        MenuItem.style.maxHeight = "200px";
    }
    else
    {
        MenuItem.style.maxHeight = "0px";
    }
  }

  var ProductImg = document.getElementById("ProductImg");
  var SmallImg = document.getElementsByClassName("small-img");

  SmallImg[0].coneclick = function()
  {
      ProductImg.src = SmallImg[0].src;
  }
  SmallImg[1].coneclick = function()
  {
      ProductImg.src = SmallImg[1].src;
  }
  SmallImg[2].coneclick = function()
  {
      ProductImg.src = SmallImg[2].src;
  }
  SmallImg[3].coneclick = function()
  {
      ProductImg.src = SmallImg[3].src;
  }
  var LoginForm = document.getElementById("LoginForm");
  var RegForm = document.getElementById("RegForm");
  var Indicator = document.getElementById("Indicator") 

    function register(){

      RegForm.style.transform = "translateX(0px)"; 
      LoginForm.style.transform = "translateX(0px)";
      Indicator.style.transform = "translateX(100px)";

    }
    function login(){

      RegForm.style.transform = "translateX(300px)"; 
      LoginForm.style.transform = "translateX(300px)";
      Indicator.style.transform = "translateX(0px)";

   }
   function ValidateLoginForm() {
	RemoveAllErrorMessage();

	var LoginEmail = document.getElementById('LoginEmail').value;
	var LoginPassword = document.getElementById('LoginPassword').value;
	var PasswordValidationMessage;
	var	emailValidationMessage;

	emailValidationMessage = isValidEmail(LoginEmail);
	if(emailValidationMessage != "valid"){
		ShowErrorMessage('LoginEmail',emailValidationMessage);
		return false;
	}
	
	PasswordValidationMessage = isValidPassword(LoginPassword);
	if(PasswordValidationMessage != "valid"){
		ShowErrorMessage('LoginPassword',PasswordValidationMessage);
		return false;
	}
	
	return true;
}

function ValidateRegistrationForm(){

	RemoveAllErrorMessage();

	var RegiName = document.getElementById('RegiName').value;
	var RegiEmailAddres = document.getElementById('RegiEmailAddres').value;
	var RegiPassword = document.getElementById('RegiPassword').value;
	var RegiConfirmPassword = document.getElementById('RegiConfirmPassword').value;

	var PasswordValidationMessage;
	var ConfirmPasswordMessage;
	var	emailValidationMessage;

	if(RegiName == ""){
		ShowErrorMessage('RegiName',"Please fill the filed.");
		return false;
	}else if(RegiName.length < 3 || RegiName.length > 20){
		ShowErrorMessage('RegiName',"Name should be minimum 3 and maximum 20 characters long.");
		return false;
	}

	emailValidationMessage = isValidEmail(RegiEmailAddres);

	if(emailValidationMessage != "valid"){
		ShowErrorMessage('RegiEmailAddres',emailValidationMessage);
		return false;
	}
	
	PasswordValidationMessage = isValidPassword(RegiPassword);
	if(PasswordValidationMessage != "valid"){
		ShowErrorMessage('RegiPassword',PasswordValidationMessage);
		return false;
	}
	
	ConfirmPasswordMessage = isValidPassword(RegiConfirmPassword);
	if(ConfirmPasswordMessage != "valid"){
		ShowErrorMessage('RegiConfirmPassword',ConfirmPasswordMessage);
		return false;
	}

	if(RegiPassword != RegiConfirmPassword){
		ShowErrorMessage('RegiConfirmPassword',"Password not match.");
		return false;
	}

	return true;
}


function ValidateForgotPasswordForm(){

	RemoveAllErrorMessage();

	var forgotPassEmail = document.getElementById('forgotPassEmail').value;
	
	var	emailValidationMessage;
	emailValidationMessage = isValidEmail(forgotPassEmail);

	if(emailValidationMessage != "valid"){
		ShowErrorMessage('forgotPassEmail',emailValidationMessage);
		return false;
	}
}



function ValidateResetPasswordForm(){

	RemoveAllErrorMessage();

	var NewPassword = document.getElementById('NewPassword').value;
	var ConfirmNewPassword = document.getElementById('ConfirmNewPassword').value;

	var PasswordValidationMessage;
	var ConfirmPasswordMessage;
	
	PasswordValidationMessage = isValidPassword(NewPassword);
	if(PasswordValidationMessage != "valid"){
		ShowErrorMessage('NewPassword',PasswordValidationMessage);
		return false;
	}
	
	ConfirmPasswordMessage = isValidPassword(ConfirmNewPassword);
	if(ConfirmPasswordMessage != "valid"){
		ShowErrorMessage('ConfirmNewPassword',ConfirmPasswordMessage);
		return false;
	}

	if(NewPassword != ConfirmNewPassword){
		ShowErrorMessage('ConfirmNewPassword',"Password not match.");
		return false;
	}

	return true;
}

function RemoveAllErrorMessage(){

	var allErrorMessage = document.getElementsByClassName('error-message');
	var allErrorFiled = document.getElementsByClassName('error-input');
	var i;

	for(i=(allErrorMessage.length - 1); i>=0; i--){
		allErrorMessage[i].remove();
	}
	
	for(i=(allErrorFiled.length-1);i>=0;i--){
		allErrorFiled[i].classList.remove('error-input');
	}
}

function ShowErrorMessage(InputBoxID,Message){

	var InputBox = document.getElementById(InputBoxID);
	InputBox.classList.add('error-input');
	InputBox.focus();

	var ErrorMessageElement = document.createElement("p");
	ErrorMessageElement.innerHTML = Message;
	ErrorMessageElement.classList.add('error-message');
	ErrorMessageElement.setAttribute("id",InputBoxID+'-error');

	InputBox.parentNode.insertBefore(ErrorMessageElement, InputBox.nextSibling);
	
}

function isValidEmail(email){

	const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if(email == ""){
		return "Please fill the field.";
	}

	if(emailRegex.test(email) == false){
		return "This is not a valid email.";
	}

	return "valid";
}

function isValidPassword(password) {
	
	const minLength = 8;
	const maxLength = 32;
	const letterNumberRegexSpecialChar = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;

	if(password == ""){
		return "Please fill the field."
	}

	if (password.length < minLength || password.length > maxLength) {
		return "Password length should be minimum 8 & maximum 32 characters.";
	}

	if (!letterNumberRegexSpecialChar.test(password)) {
		return "Password should contain alphabetic, numeric and special characters.";
	}
	return "valid";
}