var firstName = document.getElementById('First');
var lastName = document.getElementById('Last');
var email = document.getElementById('Email');
var phone = document.getElementById('Mob');
var Pass = document.getElementById('Pass');
var Cpass = document.getElementById('Cpass');

var user_error = document.getElementById('User_error');
var email_error = document.getElementById('Email_error');
var password_error = document.getElementById('Pass_error');

function Validate(){
    if (firstName.value.length <=0){
        firstName.style.border = "1px solid red";
        user_error.style.display = "block";
        firstName.focus();
        return false;
    }
    if(lastName.value.length <=0){
        lastName.style.border = "1px solid red";
        user_error.style.display = "block";
        lastName.focus();
        return false;
    }
    if (email.value.length == " "){
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if(phone.value.length ==" "  ){
        phone.style.border = "1px solid red";
        email_error.style.display = "block";
        phone.focus();
        return false;
    }
    if (Pass.value == ""){
        Pass.style.border = "1px solid red";
        password_error.style.display = "block";
        Pass.focus();
        return false;
    }
    if (Cpass.value === Pass.value){
        Cpass.style.border = "1px solid red";
        password_error.style.display = "block";
        Cpass.focus();
        return true;
    }
   
}


    