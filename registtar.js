// Applicant Form Submission
document.getElementById('startupForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const applicantData = {
        startupName: document.getElementById('startupName').value,
        applicantName: document.getElementById('applicantName').value,
        fathersName: document.getElementById('fathersName').value,
        mobileNumber: document.getElementById('mobileNumber').value,
        email: document.getElementById('email').value,
        adharNumber: document.getElementById('adharNumber').value,
        panCard: document.getElementById('panCard').value,
        dob: document.getElementById('dob').value,
        gender: document.getElementById('gender').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        pinCode: document.getElementById('pinCode').value,
        founderName: document.getElementById('founderName').value,
        experience: document.getElementById('experience').value,
        problemArea: document.getElementById('problemArea').value,
        relatedToAyush: document.getElementById('relatedToAyush').value,
        innovation: document.getElementById('innovation').value,
        development: document.getElementById('development').value,
        revenue: document.getElementById('revenue').value,
        employment: document.getElementById('employment').value,
        growthPlan: document.getElementById('growthPlan').value
    };

    // Save data to local storage (just for demo; you may integrate with backend)
    let applicants = JSON.parse(localStorage.getItem('applicants')) || [];
    applicants.push(applicantData);
    localStorage.setItem('applicants', JSON.stringify(applicants));

    alert('Your startup application has been submitted successfully!');

    // Redirect to some success page or reset form
    this.reset();
});

// Load Applicant Data in Admin Dashboard
document.addEventListener('DOMContentLoaded', function () {
    const applicantDataContainer = document.getElementById('applicantDataContainer');
    
    if (applicantDataContainer) {
        let applicants = JSON.parse(localStorage.getItem('applicants')) || [];
        
        if (applicants.length === 0) {
            applicantDataContainer.innerHTML = '<p>No applications found.</p>';
        } else {
            applicants.forEach(applicant => {
                const applicantEntry = document.createElement('div');
                applicantEntry.className = 'applicant-entry';
                
                applicantEntry.innerHTML = `
                    <h3>${applicant.startupName}</h3>
                    <p><strong>Applicant Name:</strong> ${applicant.applicantName}</p>
                    <p><strong>Mobile Number:</strong> ${applicant.mobileNumber}</p>
                    <p><strong>Email:</strong> ${applicant.email}</p>
                    <p><strong>Problem Area:</strong> ${applicant.problemArea}</p>
                    <p><strong>Innovation:</strong> ${applicant.innovation}</p>
                    <hr>
                `;
                
                applicantDataContainer.appendChild(applicantEntry);
            });
        }
    }
});
