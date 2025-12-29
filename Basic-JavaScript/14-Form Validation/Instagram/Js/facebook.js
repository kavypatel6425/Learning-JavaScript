let Email = document.getElementById("Email");
let Password = document.getElementById("Password");

function email() {
    if (Email.value == "") {
        console.log("Email or PhoneNumber is Required");
        document.getElementById("error1").innerText = "Email or PhoneNumber is Required";
        document.getElementById("error1").style.color = "red";
        document.getElementById("error1").style.fontSize = "13px";
        
    } else {
        console.log(Email.value);
        document.getElementById("error1").innerText = "";
    }
}
function password() {
    if (Password.value == "") {
        console.log("Password is Required");
        document.getElementById("error2").innerText = "Password is Required";
        document.getElementById("error2").style.color = "red";
        document.getElementById("error2").style.fontSize = "13px";
        
    } else {
        console.log(Password.value);
        document.getElementById("error2").innerText = "";
    }
}