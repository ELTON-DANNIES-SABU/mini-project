
// Function to handle role selection
function selectRole(element) {
    // Remove active class from all options
        document.querySelectorAll('.role-option').forEach(option => {
            option.classList.remove('active');
        });
                
    // Add active class to selected option
        element.classList.add('active');
                
                // Set the role in the hidden input
        document.getElementById('roleInput').value = element.getAttribute('data-role');
                
                // Update placeholder text based on role
        const usernameField = document.getElementById('username');
                
        switch(element.getAttribute('data-role')) {
            case 'student':
                usernameField.placeholder = 'Enter your Student ID';
                    break;
            case 'faculty':
                usernameField.placeholder = 'Enter your Faculty ID';
                    break;
            case 'warden':
                usernameField.placeholder = 'Enter your Warden ID';
                    break;
            case 'admin':
                usernameField.placeholder = 'Enter your Admin Username';
                    break;
            default:
                usernameField.placeholder = 'Enter your username or ID';
            }
    }
            
            // Form submission handling
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
                
            const role = document.getElementById('roleInput').value;
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
                
                // Simple validation
            if (!role) {
                alert('Please select a role');
                return false;
            }
                
                // Normally, you would send this data to a server for authentication
                // For this demo, we'll simulate successful login and redirect to dashboard
                
                // You can add specific validation logic based on role here
                
                // Redirect to dashboard with role parameter
            window.location.href = `dashboard.html?role=${role}`;
    });
            
            // Set student as default selected role on page load
    window.onload = function() {
        const studentRole = document.querySelector('.role-option[data-role="student"]');
        selectRole(studentRole);
    };