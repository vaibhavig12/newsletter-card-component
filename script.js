// Function to display a message after clicking the submit button
function displayMessage(event) {
    event.preventDefault(); // Prevent default form submission behavior
    
    // Get the value of the email input field
    var emailValue = document.getElementById("email").value.trim();
    
    // Check if the email field is empty
    if (emailValue === "") {
        alert('Error: Email field cannot be empty!');
    } else {
        alert('Thank you for submitting the form!');
    }
}

// Attach event listener to the submit button
document.getElementById("submitButton").addEventListener('click', displayMessage);
