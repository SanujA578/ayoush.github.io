// JavaScript for handling login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'applicant' && password === 'applicant123') {
        alert('Applicant logged in successfully.');
        // Redirect to applicant's dashboard or section
    } else if (username === 'coapplicant' && password === 'coapplicant123') {
        alert('Co-Applicant logged in successfully.');
        // Redirect to co-applicant's dashboard or section
    } else {
        alert('Invalid username or password.');
    }
});

// JavaScript for handling registration form submission
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Gather all form data
    const formData = new FormData(this);
    
    // Example of handling form data (adjust for actual backend implementation)
    const name = formData.get('name');
    const aadhar = formData.get('aadhar');
    const email = formData.get('email');

    alert('Registration successful for ' + name + ' with Aadhar: ' + aadhar + ' and Email: ' + email);
    
    // Reset form
    this.reset();
});
// JavaScript to dynamically populate the gallery section

document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = [
        'img2.jpeg',
        'img2.jpeg',
        'img3.jpeg',
        'gallery4.jpg',
        'gallery5.jpg',
        'gallery6.jpg',
        'gallery7.jpg',
        'gallery8.jpg',
        'gallery9.jpg',
        'gallery10.jpg'
    ];

    const galleryContainer = document.getElementById('gallery-loop');

    galleryImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = `path/to/images/${image}`;
        imgElement.alt = `Gallery Image ${image}`;
        galleryContainer.appendChild(imgElement);
    });
});
// JavaScript for handling modal display
document.addEventListener('DOMContentLoaded', function() {
    // Get the modal elements
    const applicantModal = document.getElementById('applicant-login');
    const coApplicantModal = document.getElementById('co-applicant-login');

    // Get the buttons that open the modals
    const applicantBtn = document.querySelector('a[href="#applicant-login"]');
    const coApplicantBtn = document.querySelector('a[href="#co-applicant-login"]');

    // Get the <span> elements that close the modals
    const closeBtns = document.querySelectorAll('.close');

    // When the user clicks the button, open the modal
    applicantBtn.onclick = function() {
        applicantModal.style.display = 'block';
    }

    coApplicantBtn.onclick = function() {
        coApplicantModal.style.display = 'block';
    }

    // When the user clicks on <span> (x), close the modal
    closeBtns.forEach(function(btn) {
        btn.onclick = function() {
            btn.closest('.modal').style.display = 'none';
        }
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == applicantModal) {
            applicantModal.style.display = 'none';
        }
        if (event.target == coApplicantModal) {
            coApplicantModal.style.display = 'none';
        }
    }

    // Form submission logic for Registration
    document.getElementById('registrationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Registration form submitted');
        // Add your form submission logic here
    });

    // Form submission logic for Contact
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Contact form submitted');
        // Add your form submission logic here
    });

    // Form submission logic for Applicant Login
    document.getElementById('applicantForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Applicant Login submitted');
        // Add your form submission logic here
    });

    // Form submission logic for Co-Applicant Login
    document.getElementById('coApplicantForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Co-Applicant Login submitted');
        // Add your form submission logic here
    });
});
// JavaScript for handling modal display and form submissions
document.addEventListener('DOMContentLoaded', function() {
    const modals = {
        applicant: document.getElementById('applicant-login'),
        coApplicant: document.getElementById('co-applicant-login')
    };

    const buttons = {
        applicant: document.querySelector('a[href="#applicant-login"]'),
        coApplicant: document.querySelector('a[href="#co-applicant-login"]')
    };

    const closeBtns = document.querySelectorAll('.close');

    // Function to open modal
    function openModal(modal) {
        modal.style.display = 'block';
    }

    // Function to close modal
    function closeModal(modal) {
        modal.style.display = 'none';
    }

    // Open modals on button click
    buttons.applicant.addEventListener('click', () => openModal(modals.applicant));
    buttons.coApplicant.addEventListener('click', () => openModal(modals.coApplicant));

    // Close modals on close button click
    closeBtns.forEach(btn => btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        closeModal(modal);
    }));

    // Close modals when clicking outside of them
    window.addEventListener('click', (event) => {
        if (event.target === modals.applicant) {
            closeModal(modals.applicant);
        }
        if (event.target === modals.coApplicant) {
            closeModal(modals.coApplicant);
        }
    });

    // Handle form submissions
    document.getElementById('applicantForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Applicant Login submitted');
        // Add form submission logic here
    });

    document.getElementById('coApplicantForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Co-Applicant Login submitted');
        // Add form submission logic here
    });

    // Populate gallery section dynamically
    const galleryImages = [
        'img2.jpeg', 'img3.jpeg', 'img4.jpeg', 'img5.jpeg', 'img6.jpeg',
        'image7.jpeg', 'image8.jpeg', 'image9.jpeg', 'image10.jpeg'
    ];

    const galleryContainer = document.getElementById('gallery-loop');

    galleryImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = `path/to/images/${image}`;
        imgElement.alt = `Gallery Image ${image}`;
        galleryContainer.appendChild(imgElement);
    });
});
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        alert('More information coming soon!');
    });
});
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        alert('More information coming soon!');
    });
});
