var nameError = document.getElementById('name_error');
var emailError = document.getElementById('email_error');
var phoneError = document.getElementById('phone_error');
var messageError = document.getElementById('message_error');
var submitError = document.getElementById('submit_error');

function validateName(){
    var name = document.getElementById('fName').value;

    if(name.length == 0){
        nameError.innerHTML = '*Name is required';
        return false;
    }
    if(name.length < 5){
        nameError.innerHTML = '*Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contactNumber').value;

    if(phone.length == 0){
        phoneError.innerHTML = '*Phone no. is required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = '*Phone no. is not valid';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = '*Digits only please';
        return false;
    }
    phoneError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('email').value;

    if(email.length == 0){
        emailError.innerHTML = '*Email is required'
        return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
        emailError.innerHTML = '*Email is Invalid'
        return false;
    }
    emailError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById('message').value;
    var required = 30;
    var left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + '*more characters is required'
        return false;
    }
    messageError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone || !validateEmail || validateMessage){
        submitError.style.display = 'block'
        submitError.innerHTML = '*Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    } 
}