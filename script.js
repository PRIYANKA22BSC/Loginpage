const showPasswordCheckbox = document.getElementById("show-password-checkbox");
      const passwordInput = document.getElementById("password");

      showPasswordCheckbox.addEventListener("change", function () {
        if (showPasswordCheckbox.checked) {
          passwordInput.type = "text"; // Show password
        } else {
          passwordInput.type = "password"; // Hide password
        }
      });
