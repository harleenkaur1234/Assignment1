const form = document.querySelector('form');

const userInput = document.querySelector(
    'input[name="user"]'
);
const emailInput = document.querySelector(
    'input[id="email"]'
);
const msgInput = document.querySelector('textarea[id="comment"]');

const inputs = [userInput, emailInput, msgInput];
let isFormValid = false;
let isValidationOn = false;

const isValidEmail = (email) => {
    const regEmail = /^[a-zA-Z0-9._]{3,}@[a-zA-Z]{5,}[.]{1}[a-zA-Z.]{3,6}$/;
    return regEmail.test(String(email).toLowerCase());
};

/* function for showing correct data*/
const resetInput = (element) => {
    element.classList.add("valid");
    element.classList.remove("invalid");
    element.nextElementSibling.classList.add("hidden");
};

/* function for showing error*/
const inValidateElm = (error) => {
    error.classList.remove("valid");
    error.classList.add("invalid");
    error.nextElementSibling.classList.remove("hidden");
}

const validateForm = () => {
    if (!isValidationOn) return;
    isFormValid = true;

    inputs.forEach(resetInput)

    /*Username validation */
    const regUser = /^[a-z A-Z]+$/;
    if (userInput.value.trim() == "") {
        isFormValid = false;
        inValidateElm(userInput);
        document.getElementById('userError').innerHTML = "Name can't be blank";

    }
    else if (!regUser.test(userInput.value.trim())) {
        isFormValid = false;
        inValidateElm(userInput);
        document.getElementById('userError').innerHTML = "Name cannot contain special characters or numbers and should only be alphabets";
    }
    else {
        isFormValid = true;
    }
    /*Email Validation */
    if (emailInput.value.trim() == "") {
        isFormValid = false;
        inValidateElm(emailInput);
        document.getElementById('emailError').innerHTML = "Email can't be blank";
    }
    else if (!isValidEmail(emailInput.value)) {
        isFormValid = false;
        inValidateElm(emailInput);
        document.getElementById('emailError').innerHTML = "Email must be valid";
    }
    else {
        isFormValid = true;
    }

    /*Message Validation */
    if (msgInput.value.trim() == "") {
        isFormValid = false;
        inValidateElm(msgInput);
        document.getElementById('msgError').innerHTML = "Message can't be blank";
    }
    else if (msgInput.value.trim().length < 40) {
        isFormValid = false;
        inValidateElm(msgInput);
        document.getElementById('msgError').innerHTML = "Message must be of minimum 40 characters long"
    }
    else {
            isFormValid = true;
        }
};

/*validating each field*/
inputs.forEach(input => {
    input.addEventListener('input', () => {
        validateForm();
    });
});

/*On Targetting submit  */
form.addEventListener('submit', (event) => {
    event.preventDefault();
    isValidationOn = true;
    validateForm();
    if (isFormValid) {
        alert("You are being redirected");
        window.open("https://lng-consultancy.com/")
    }
});