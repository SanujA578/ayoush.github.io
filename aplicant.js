document.addEventListener("DOMContentLoaded", function () {
    // Buttons and sections
    const adminLoginBtn = document.getElementById("adminLoginBtn");
    const applicantLoginBtn = document.getElementById("applicantLoginBtn");
  
    const adminLoginSection = document.getElementById("adminLoginSection");
    const applicantLoginSection = document.getElementById("applicantLoginSection");
    const applicantFormSection = document.getElementById("applicantFormSection");
    const adminDashboardSection = document.getElementById("adminDashboardSection");
  
    // Simulated applications database (in real cases, you would fetch this from a backend)
    let applications = [];
  
    // Show Administrator login
    adminLoginBtn.addEventListener("click", function () {
      adminLoginSection.classList.remove("hidden");
      applicantLoginSection.classList.add("hidden");
      applicantFormSection.classList.add("hidden");
      adminDashboardSection.classList.add("hidden");
    });
  
    // Show Applicant login
    applicantLoginBtn.addEventListener("click", function () {
      adminLoginSection.classList.add("hidden");
      applicantLoginSection.classList.remove("hidden");
      applicantFormSection.classList.add("hidden");
      adminDashboardSection.classList.add("hidden");
    });
  
    // Handle Admin Login
    const adminLoginForm = document.getElementById("adminLoginForm");
    adminLoginForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const adminUsername = document.getElementById("adminUsername").value;
      const adminPassword = document.getElementById("adminPassword").value;
  
      if (adminUsername === "admin" && adminPassword === "admin123") {
        alert("Admin login successful!");
        adminLoginSection.classList.add("hidden");
        adminDashboardSection.classList.remove("hidden");
  
        displayApplications();
      } else {
        alert("Invalid admin credentials!");
      }
    });
  
    // Handle Applicant Login
    const applicantLoginForm = document.getElementById("applicantLoginForm");
    applicantLoginForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const applicantUsername = document.getElementById("applicantUsername").value;
      const applicantPassword = document.getElementById("applicantPassword").value;
  
      if (applicantUsername === "applicant" && applicantPassword === "applicant123") {
        alert("Applicant login successful!");
        applicantLoginSection.classList.add("hidden");
        applicantFormSection.classList.remove("hidden");
      } else {
        alert("Invalid applicant credentials!");
      }
    });
  
    // Handle Applicant Form Submission
    const applicationForm = document.getElementById("applicationForm");
    applicationForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const startupName = document.getElementById("startupName").value;
      const email = document.getElementById("email").value;
      const documentFile = document.getElementById("document").files[0];
  
      if (!startupName || !email || !documentFile) {
        alert("Please fill out all fields and upload a document.");
        return;
      }
  
      // Save the application (you can send this data to a backend in real scenarios)
      const applicationData = {
        startupName,
        email,
        documentFileName: documentFile.name
      };
  
      applications.push(applicationData);
      alert("Application submitted successfully!");
  
      // Reset the form
      applicationForm.reset();
    });
  
    // Function to display applications for admin
    function displayApplications() {
      const applicationsTable = document.getElementById("applicationsTable").querySelector("tbody");
      applicationsTable.innerHTML = ""; // Clear the table before rendering
  
      applications.forEach((application, index) => {
        const row = document.createElement("tr");
  
        const nameCell = document.createElement("td");
        nameCell.textContent = application.startupName;
  
        const emailCell = document.createElement("td");
        emailCell.textContent = application.email;
  
        const docCell = document.createElement("td");
        docCell.textContent = application.documentFileName;
  
        row.appendChild(nameCell);
        row.appendChild(emailCell);
        row.appendChild(docCell);
  
        applicationsTable.appendChild(row);
      });
    }
  });