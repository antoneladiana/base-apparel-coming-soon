// Validate email address
function validateEmail() {
    let email = document.querySelector(".form__input").value;
    let errorMessage = document.querySelector(".error__message");
    let errorIcon = document.querySelector(".error__icon");
    let form = document.querySelector(".form");

    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+) *$/.test(email)) {
        // If a valid email is sent, hide error message
        errorMessage.classList.add("--hidden");
        errorIcon.classList.add("--hidden");
        form.classList.remove("--error");
        return (true)
    }
    
    // Show error message if email is not valid or empty
    errorMessage.classList.remove("--hidden");
    errorIcon.classList.remove("--hidden");
    form.classList.add("--error");
    return (false)
}

// Show form outline
function showOutline() {
    let form = document.querySelector(".form");
    form.style.outline = "2px solid var(--main-color)";
}

// Hide form outline
function hideOutline() {
    let form = document.querySelector(".form");
    form.style.outline = "none";
}

// Get button element
let button = document.querySelector(".form__button");
// Get the input element
let input = document.querySelector(".form__input");

// Validate email when button is clicked
button.addEventListener("click", validateEmail);

// Validate email when "Enter" key is pressed
input.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        // Cancel the default action
        event.preventDefault();
        // Validate email
        validateEmail();
    }
});

// Show form outline when input is focused
input.addEventListener("focus", showOutline);
// Hide form outline when input is unfocused
input.addEventListener("focusout", hideOutline)