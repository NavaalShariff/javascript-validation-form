document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    validateForm();
});

function validateForm() {
    // Fetching input field values
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phonenumber = document.getElementById('phonenumber').value;
    var password = document.getElementById('password').value;
    var confirmpassword = document.getElementById('confirmpassword').value;
    // Fetch other fields similarly

    // Validation logic
    var isValid = true;
    if (fullName.length < 5) {
        document.getElementById('fullNameError').innerHTML = "Name must be at least 5 characters long";
        isValid = false;
    } else {
        document.getElementById('fullNameError').innerHTML = "";
    }
    var isValid = true;
     // Email validation
    if (!email.includes('@')) {
        document.getElementById('emailError').innerHTML = "Enter a valid email address";
        isValid = false;
    } else {
        document.getElementById('emailError').innerHTML = "";
    }

    var isValid = true;
    //phonenumber validation
    if (phone === '123456789' || isNaN(phone) || phone.length !== 10) {
        document.getElementById('phoneError').innerHTML = "Enter a valid 10-digit phone number";
        isValid = false;
    } else {
        document.getElementById('phoneError').innerHTML = "";
    }

    var isValid = true;
    //password
    if (password === 'password' || password === fullName || password.length < 8) {
        document.getElementById('passwordError').innerHTML = "Password is not strong";
        isValid = false;
    } else {
        document.getElementById('passwordError').innerHTML = "";
    }
    // Confirm password validation
    var isValid = true;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerHTML = "Passwords do not match";
        isValid = false;
    } else {
        document.getElementById('confirmPasswordError').innerHTML = "";
    }
    if (!isValid) {
        alert("Please fix the errors in the form before submitting.");
    } else {
        alert("Form submitted successfully!");
        // You can submit the form here or perform other actions
    }

    
    // Implement similar validation for other fields

    if (isValid) {
        alert("Form submitted successfully!");
        // You can submit the form here or perform other actions
    }
}

