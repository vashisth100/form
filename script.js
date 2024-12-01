// Select the form and message box
const form = document.getElementById('myForm');
const messageBox = document.getElementById('messageBox');

// Add event listener for form submission
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form data
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validate the input fields
  if (!name || !email || !message) {
    showMessage('Please fill in all fields.', 'error');
    return;
  }

  // Simulate form submission (e.g., send data to a server)
  console.log('Form Submitted:', { name, email, message });

  // Show success message
  showMessage('Your message has been sent successfully!', 'success');

  // Reset the form
  form.reset();
});

// Function to display messages
function showMessage(message, type) {
  messageBox.textContent = message;
  messageBox.style.color = type === 'success' ? 'green' : 'red';
  messageBox.style.marginTop = '10px';
}