document.getElementById('myform').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstname = document.getElementById('firstname').value;
    const middlename = document.getElementById('middlename').value;
    const lastname = document.getElementById('lastname').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!firstname || !middlename || !lastname || !email || !password) {
        alert("You need put you Full Name, your email and password to sign up.");
        return;
    }
    if (!age || age < 18){
        alert("You must be 18 years or older to submit this form.");
        return;
    }

    const formData = {
        firstname: firstname,
        middlename: middlename,
        lastname: lastname,
        age: age,
        email: email,
        password: password
    };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.json", true);
    xhr.setRequestHeader("Context-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200){
            alert('Form submitted Succuessfully.');
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            document.getElementById('myform').innerHTML='';
            document.getElementById('message').innerText = response.message;
        }else if (xhr.readyState === 4 ){
            alert('Error submitting form');
        }
    }
    xhr.send(JSON.stringify(formData));
    console.log(formData);
});    