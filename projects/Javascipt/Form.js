const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const firstname = document.getElementById('firstname').value;
    const middlename = document.getElementById('middlename').value;
    const lastname = document.getElementById('lastname').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phoneinput').value;
    const date = document.getElementById('dateinput').value;
    const state = document.getElementById('state').value;
    const password = document.getElementById('password').value;
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : null;
    const agree = document.getElementById('agree').checked;

    if (!firstname) {
        alert("First name is missing.");
        return;
    }
    if (!middlename) {
        alert("Middle name is missing.");
        return;
    }
    if (!lastname) {
        alert("Last name is missing.");
        return;
    } 

    if (!email){
        alert("You need to enter your email.");
        return;
    }
    if (password.length !== 12) {
        alert("Your password needs to be 12 characters.");
        return;
    }

    if (!age || age < 18){
        alert("You must be 18 years or older to submit this form.");
        return;
    }

    const digits = phone.replace(/\D/g, '');
    if (!phone || digits.length !== 10) {
        alert("Please enter a valid 10-digit phone number. US phone numbers only.");
        return;
    }

    if (!state || state === 'none') {
        alert("Please select your state.");
        return;
    }

    if (!date) {
        alert("Please enter your birth date.");
        return;
    }
    if (!gender) {
        alert("Please select your gender.");
        return;
    }
    if (!agree) {
        alert("You must agree to the terms to submit the form.");
        return;
    }

    const formData = {
        firstname: firstname,
        middlename: middlename,
        lastname: lastname,
        age: age,
        email: email,
        phone: phone,
        date: date,
        state: state,
        password: password,
        gender: gender,
        agree: agree
    };

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "Submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200){
            alert('Form submitted Succuessfully.');
            const response = JSON.parse(xhr.responseText);
            document.getElementById('myform').innerHTML='';
            document.getElementById('message').innerText = response.message;
        }else if (xhr.readyState === 4 ){
            alert('Error submitting form');
        }
    }
    xhr.send(JSON.stringify(formData));
    console.log(formData);
});    