document.addEventListener('DOMContentLoaded', function () {
    // Select the form and feedback division
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Add event listener for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting

        // Retrieve input values and trim whitespaces
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation variables
        let isValid = true;
        let messages = [];

        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email validation
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Display feedback
        feedbackDiv.style.display = 'block';
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // Success message color
        } else {
            feedbackDiv.innerHTML = messages.join('<br>'); // Show error messages
            feedbackDiv.style.color = '#dc3545'; // Error message color
        }
    });
});
