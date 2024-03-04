function validateForm(event) {
    event.preventDefault();
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var country = document.getElementById("country").value.trim();
    var gender = document.querySelector('input[name="gender"]:checked');
    var hobbies = document.querySelectorAll('input[name="hobbies"]:checked');
    var isValid = true;
  
    // Name validation
    if (name === "") {
      document.getElementById("nameError").innerText = "Name is required";
      isValid = false;
    } else {
      document.getElementById("nameError").innerText = "";
    }
  
    // Email validation
    if (email === "") {
      document.getElementById("emailError").innerText = "Email is required";
      isValid = false;
    } else if (!isValidEmail(email)) {
      document.getElementById("emailError").innerText = "Invalid email address";
      isValid = false;
    } else {
      document.getElementById("emailError").innerText = "";
    }
  
    // Phone validation
    if (phone === "") {
      document.getElementById("phoneError").innerText = "Phone number is required";
      isValid = false;
    } else if (!isValidPhone(phone)) {
      document.getElementById("phoneError").innerText = "Invalid phone number";
      isValid = false;
    } else {
      document.getElementById("phoneError").innerText = "";
    }
  
    // Country validation
    if (country === "") {
      document.getElementById("countryError").innerText = "Country is required";
      isValid = false;
    } else {
      document.getElementById("countryError").innerText = "";
    }
  
    // Gender validation
    if (!gender) {
      document.getElementById("genderError").innerText = "Gender is required";
      isValid = false;
    } else {
      document.getElementById("genderError").innerText = "";
    }
  
    // Hobbies validation
    if (hobbies.length === 0) {
      document.getElementById("hobbiesError").innerText = "At least one hobby is required";
      isValid = false;
    } else {
      document.getElementById("hobbiesError").innerText = "";
    }
  
    // Display success message if form is valid
    if (isValid) {
      document.getElementById("successMessage").innerText = "Form successfully submitted!";
    } else {
      document.getElementById("successMessage").innerText = "";
    }
  
    return isValid;
  }
  
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function isValidPhone(phone) {
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }
