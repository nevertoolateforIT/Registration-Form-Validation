

function Validate(){   
const firstname =document.getElementById ('firstname');
const lastname =document.getElementById ('lastname');
const email =document.getElementById ('username');
const password =document.getElementById ('password');
const confirm =document.getElementById ('confirm');
const isValidEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

let messages ="";
firstname.style.borderColor="gray";
lastname.style.borderColor="gray";
email.style.borderColor="gray";
password.style.borderColor="gray";
confirm.style.borderColor="gray";

if (firstname.value == ""){
    messages +=('Enter your first name \n');
    firstname.style.borderColor="red";
}

if (lastname.value == ""){
    messages +=('Enter your last name \n');
    lastname.style.borderColor="red";
}

if (email.value == ""){
    messages +=('Enter your username \n');
    email.style.borderColor="red";
}

else if (!isValidEmail.test(email.value)) {
    messages +=('Please provide a valid email address');
    email.style.borderColor="red";
}

if (password.value == ""){
    messages +=('Enter your password \n');
    password.style.borderColor="red";
}
else if (password.value.length < 8){
    messages += ('Your password must be at least 8 characters \n'); 
    password.style.borderColor="red";
    }

if (confirm.value == ""){
    messages +=('Confirm your password \n');
    confirm.style.borderColor="red";
}

else if (password.value != confirm.value){
    messages += ('Your password does not match \n');
    confirm.style.borderColor="red";
}

if (messages !=""){
    alert (messages); 
    return false;
}  
}
