let userName = document.getElementById("username");
let userPassword = document.getElementById("password");

function Uname() {
    if (userName.value == "") {
        console.log("Username is Required");
        document.getElementById("error1").innerText = "Username is Required";
        document.getElementById("error1").style.color = "red";
        document.getElementById("error1").style.fontSize = "13px";
        // document.getElementById("error1").style.textAlign = "Left";
    } else {
        console.log(userName.value);
        document.getElementById("error1").innerText = "";

    }
}

function Upassword() {
    if (userPassword.value == "") {
        console.log("Password is Required");
        document.getElementById("error2").innerText = "Password is Required";
        document.getElementById("error2").style.color = "red";
        document.getElementById("error2").style.fontSize = "13px";
    } else {
        console.log(userPassword.value);
        document.getElementById("error2").innerText = "";
    }
}