function ValidateForm() {
    let error = false;

    function ReturnError(errorMessage) {
        alert(errorMessage);
        error = true;
        return false;
    }

    let Username = document.getElementById("Username");
    let Password = document.getElementById("Password");
    let re = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
    let password_pass = re.exec(Password.value);

    if (Username.value.length < 5) {
        ReturnError("Username must be at least 5 characters.")
    } else if (!password_pass) {
        ReturnError("Password must contain at least 10 characters, 1 special symbol, 1 uppercase, 1 number")
    } else {
        alert("Form submitted! Check the console for results!")
        console.log(Username.value);
        console.log(Password.value);
    }
}