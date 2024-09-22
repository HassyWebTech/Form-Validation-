
function validateRegistration() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const country = document.getElementById('country').value;
    const terms = document.getElementById('terms').checked;
    let errors = '';

   
    if (!name) {
        errors += 'Name is required.<br>';
    }

   
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        errors += 'Enter a valid email.<br>';
    }

  
    if (password.length < 8) {
        errors += 'Password must be at least 8 characters long.<br>';
    }

    if (password !== confirmPassword) {
        errors += 'Passwords do not match.<br>';
    }

    if (age < 18 || age > 100) {
        errors += 'Age must be between 18 and 100.<br>';
    }


    if (!gender) {
        errors += 'Select a gender.<br>';
    }

   
    if (!country) {
        errors += 'Select a country.<br>';
    }

   
    if (!terms) {
        errors += 'You must accept the Terms and Conditions.<br>';
    }

    
    document.getElementById('regErrors').innerHTML = errors;
    if (!errors) {
        alert('Registration Successful!');
        document.getElementById('regForm').reset();
    }
}


function validateLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    let errors = '';

   
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        errors += 'Enter a valid email.<br>';
    }


    if (!password) {
        errors += 'Password is required.<br>';
    }


    document.getElementById('loginErrors').innerHTML = errors;
    if (!errors) {
        alert('Login Successful!');
        document.getElementById('loginForm').reset();
    }
}
