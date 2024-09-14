// Function to generate and display the captcha
function generateCaptcha() {
    let captchaCode = Math.floor(1000 + Math.random() * 9000); // Random 4-digit number
    document.getElementById('captcha-code').textContent = captchaCode;
}

// Call the generateCaptcha function on page load
window.onload = function() {
    generateCaptcha();
};

// Form validation
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting automatically
    let userCaptcha = document.getElementById('captcha').value;
    let generatedCaptcha = document.getElementById('captcha-code').textContent;

    // Simple captcha validation
    if (userCaptcha !== generatedCaptcha) {
        alert('Captcha does not match!');
        generateCaptcha(); // Refresh captcha if incorrect
    } else {
        alert('Form submitted successfully!');
        // Add further form submission code (e.g., AJAX or server-side handling)
    }
});
