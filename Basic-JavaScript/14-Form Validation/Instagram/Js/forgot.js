let Forgot = document.getElementById("Forgot");

function forgot() {
    if (Forgot.value == "") {
        console.log("Email or Username are Required");
        document.getElementById("error1").innerText ="Email or Username are Required";
        document.getElementById("error1").style.color ="red";
        document.getElementById("error1").style.fontSize ="15px";
    } else {
        console.log(Forgot.value);
        document.getElementById("error1").innerText = "";
    }
}