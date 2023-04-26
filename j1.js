/********w************

    Do not alter this comment block. 
    Only fill out the information below.

    Competency 17
    Name: Parmis Sekhavatpour
    Date: 2023-04-23
    Description: Module 8- Competency 17

*********************/

var contactForm = document.getElementById("contact-form");
var nameInput = document.getElementById("name");
var phoneInput = document.getElementById("phone");
var emailInput = document.getElementById("email");
var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");

contactForm.addEventListener("submit", function(event) {
    if (!nameInput.checkValidity()) {
        event.preventDefault();
        nameInput.focus();
        nameError.style.display = "inline";
        nameInput.style.backgroundColor = "#fdd";
        nameInput.style.color = "#f00";
    } else {
        nameError.style.display = "none";
        nameInput.style.backgroundColor = "";
        nameInput.style.color = "";
    }
    
    if (!phoneInput.checkValidity()) {
        event.preventDefault();
        phoneInput.focus();
        phoneError.style.display = "inline";
    }
}