let Email = document.getElementById("Email");
let FullName = document.getElementById("FullName");
let Username = document.getElementById("Username");
let Password = document.getElementById("Password");

function email() {
    if (Email.value == "") {
        console.log("Mobile Number or Email is Required");
        document.getElementById("error1").innerText = "Mobile Number or Email is Required";
        document.getElementById("error1").style.color = "red";
        document.getElementById("error1").style.fontSize = "15px";
    } else {
        console.log(Email.value);
        document.getElementById("error1").innerText = "";

    }
}
function fullname() {
    if (FullName.value == "") {
        console.log("FullName is Required");
        document.getElementById("error2").innerText = "FullName is Required";
        document.getElementById("error2").style.color = "red";
        document.getElementById("error2").style.fontSize = "15px";
    } else {
        console.log(FullName.value);
        document.getElementById("error2").innerText = "";

    }
}
function username() {
    if (Username.value == "") {
        console.log("Username is Required");
        document.getElementById("error3").innerText = "Username is Required";
        document.getElementById("error3").style.color = "red";
        document.getElementById("error3").style.fontSize = "15px";
    } else {
        console.log(Username.value);
        document.getElementById("error3").innerText = "";

    }
}
function password() {
    if (Password.value == "") {
        console.log("Password is Required");
        document.getElementById("error4").innerText = "Password is Required";
        document.getElementById("error4").style.color = "red";
        document.getElementById("error4").style.fontSize = "15px";
    } else {
        console.log(Password.value);
        document.getElementById("error4").innerText = "";

    }
}