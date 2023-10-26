const errorMessage = document.getElementById("error");
const emailInput = document.getElementById('email_adress');
const defualtStyle = emailInput.style.border;

function isValidEmail(email) {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}

function checkEmail() {

    if (emailInput.value === "") {
        errorMessage.style.display = 'none';
        emailInput.style.border = defualtStyle;
    }
}

function submit() {
    if (isValidEmail(emailInput.value)) {
        errorMessage.style.display = "flex";
        errorMessage.textContent = "Thank you!";
        errorMessage.style.color = "green";
        emailInput.style.border = defualtStyle;
        ;
    }
    else {
        errorMessage.style.display = "flex";
        errorMessage.textContent = "Please provide a valid email address";
        errorMessage.style.color = "red";
        emailInput.style.border = "solid 2px red";
    }
}