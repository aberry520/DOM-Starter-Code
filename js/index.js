'use strict';
console.log(document.querySelector("#eight").value)
function submit(){
    document.querySelector("#blank1").innerHTML = document.querySelector("#one").value;
    document.querySelector("#blank2").innerHTML = document.querySelector("#two").value;
    document.querySelector("#blank3").innerHTML = document.querySelector("#three").value;
    document.querySelector("#blank4").innerHTML = document.querySelector("#four").value;
    document.querySelector("#blank5").innerHTML = document.querySelector("#five").value;
    document.querySelector("#blank6").innerHTML = document.querySelector("#six").value;
    document.querySelector("#blank7").innerHTML = document.querySelector("#seven").value;
    document.querySelector("#blank8").innerHTML = document.querySelector("#eight").value;
}

function story(){
    window.location.href="#box";
}

function reset(){
    window.location.href="#home";
    document.querySelector(["#one"]).value = "";
    document.querySelector("#two").value = "";
    document.querySelector("#three").value = "";
    document.querySelector("#four").value = "";
    document.querySelector("#five").value = "";
    document.querySelector("#six").value = "";
    document.querySelector("#seven").value = "";
    document.querySelector("#eight").value = "";

}