// this is resume container
function ResumeOpen(){
    document.getElementById("resume").style.display = "flex";
    document.getElementById("resume").style.zIndex= "2";
    document.body.style.backgroundColor = "grey";
    document.body.style.zIndex = "-1";
}
function ResumeClose(){
    document.getElementById("resume").style.display = "none";
    document.body.style.backgroundColor = "white";
}



// this is project container
function ProjectOpen(){
    document.getElementById("project").style.top = "flex";
    document.getElementById("project").style.zIndex= "2";
    document.body.style.top = "1000px";
}
function ProjectClose(){
    document.getElementById("project").style.display = "none";
}


// this is contact container
function ContactOpen(){
    document.getElementById("contact").style.display = "flex";
}
function ContactClose(){
    document.getElementById("contact").style.display = "none";
}