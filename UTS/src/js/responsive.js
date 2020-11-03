function triggerButton(){
    var x = document.getElementById("nav-bar");
    if(x.className === "navbar"){
        x.className += " respon";
    }else{
        x.className = "navbar";
    }
}

function closedAnnouncement(){
    var y = document.getElementById("Announ");
    if(y.className === "peng"){
        y.className += " closed";
    }
}