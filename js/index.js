'use strict';

function submit(){
    //Adjective 1
    let a = document.querySelector("#adjective1").value;
    document.querySelector("#blank1").innerHTML = a;
    //Noun 1
    let b = document.querySelector("#noun1").value;
    document.querySelector("#blank2").innerHTML = b;
    //
    
    
}

function story(){
    window.location.href="/story.html";
}