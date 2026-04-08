document.getElementById('myform').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const position = document.getElementById('position').value;
    const resumeInput = document.getElementById('resume');
    const resumeFilename = resumeInput.files.length ? resumeInput.files[0].name : '';

    if (!name || !email || !position) {
        alert('Please enter your name, email, and select a position.');
        return;
    }

    const formData = {
        name: name,
        email: email,
        phone: phone,
        position: position
    };

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'submit.json', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                alert('Form submitted successfully.');
                try {
                    const response = JSON.parse(xhr.responseText);
                    document.getElementById('message').innerText = response.message || 'Your application was submitted.';
                } catch (error) {
                    document.getElementById('message').innerText = 'Your application was submitted.';
                }
                document.getElementById('myform').reset();
            } else {
                alert('Error submitting form');
            }
        }
    };
    xhr.send(JSON.stringify(formData));
    console.log(formData);
});    