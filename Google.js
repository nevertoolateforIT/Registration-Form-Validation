
const password =document.getElementById ('password');
const confirm =document.getElementById ('confirm');
let errors =[];

function checkValidity (input){
    let validity=input.validity;
    if (validity.valueMissing){errors.push ('Field ' + input.placeholder + ' is missing');}
    if (validity.patternMismatch) {errors.push (input.placeholder + ' format requirements are not met');}
    if (validity.typeMismatch) {errors.push (input.placeholder + 'input type is incorrect');}
    if (password.value != confirm.value){errors.push ('Confirmation does not match the password');}
}

// function ValidateEmail (emailField){
//     let isValidEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     if (emailField.value.match(isValidEmail)){
//         return true;
//     }
//     else {errors.push ('Email requirements are not met');
//     return false;
// }


function checkAll(){
    errors=[];
    let inputs=document.querySelectorAll("input");

    for (let input of inputs){
        checkValidity(input);
    }

    document.getElementById ('errorsInfo').innerHTML =errors.join ('. <br>');
}
postBtn.onclick=function(e){
    e.preventDefault();

    let user={
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        confirm: document.getElementById("confirm").value,
    }
    console.log(user)
    fetch("https://httpbin.org/post",
    {
        method:'POST',
        body:JSON.stringify(user),
        headers:{
            'Content-Type':'application/json;cahrset=utf-8'
        },
    })
    .then(response => response.json())
    .then (user => { console.log(user);
    })
}