
    function togglePassword() {
      const passwordInput = document.getElementById("password");
      const button = event.target; // Get the button element

      if (passwordInput.type === "password") {
        passwordInput.type = "text"; // Show the password
        button.textContent = "Hide"; // Change button text
      } else {
        passwordInput.type = "password"; // Hide the password
        button.textContent = "Show"; // Change button text back
      }
    }