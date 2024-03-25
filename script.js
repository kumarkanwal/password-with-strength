document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const strengthBar = document.getElementById('strengthBar');
  
    passwordInput.addEventListener('input', function() {
      const password = passwordInput.value;
  
      if (password.length === 0) {
        clearStrengthBar();
        return;
      }
  
      let complexity = 0;
      const conditions = [
        /[a-z]/, // lowercase letters
        /[A-Z]/, // uppercase letters
        /[0-9]/, // numbers
        /[!@#$%^&*()_+~`|}{[\]\\:;'<>,.?/]/ // special characters
      ];
  
      conditions.forEach(condition => {
        if (condition.test(password)) {
          complexity++;
        }
      });
  
      switch (complexity) {
        case 1:
          updateStrengthBar(30, 'bg-danger', 'Weak');
          break;
        case 2:
        case 3:
          updateStrengthBar(60, 'bg-warning', 'Medium');
          break;
        case 4:
          updateStrengthBar(100, 'bg-success', 'Strong');
          break;
      }
    });
  
    function updateStrengthBar(width, className, text) {
      strengthBar.style.width = `${width}%`;
      strengthBar.classList.remove('bg-danger', 'bg-warning', 'bg-success'); // Remove previous color classes
      strengthBar.classList.add(className); // Add the new color class
      strengthBar.textContent = text;
    }
  
    function clearStrengthBar() {
      strengthBar.style.width = '0%';
      strengthBar.textContent = '';
      strengthBar.classList.remove('bg-danger', 'bg-warning', 'bg-success'); // Clear any color class when input is empty
    }
  });
  