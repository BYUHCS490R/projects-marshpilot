
document.getElementById('myform').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    if (!firstname || !lastname || !email) {
        alert("You need put you Full Name, your email Apply.");
        return;
    }
    if (!age || age < 18){
        alert("You must be 18 years or older to submit this form.");
        return;
    }

    const formData = {
        firstname: firstname,
        lastname: lastname,
        age: age,
        email: email,
    };

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
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