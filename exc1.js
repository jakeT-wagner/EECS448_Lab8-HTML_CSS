function validate() {
    let inp1 = document.getElementById("password1").value;
    let inp2 = document.getElementById("password2").value;
    if (inp1 === inp2) {
        if (inp1.length >= 8) {
            alert("Well done! Your passwords match! :)");
        }
        else {
            alert("Your password needs to be eight characters long!");
        }
    }
    else {
        alert("Your passwords do not match :(");
    }
}