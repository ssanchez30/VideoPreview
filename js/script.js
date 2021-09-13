
let myVideo = document.querySelectorAll(".myVideo"); 

for (let i=0; i<myVideo.length; i++){
    console.log(myVideo[i]);
}


function darPlay(e) {

    e.target.play();
}

function detener(e){
    e.target.pause();
}

for (let i=0; i<myVideo.length; i++){
    myVideo[i].addEventListener("mouseover", darPlay);
}

for (let i=0; i<myVideo.length; i++){
    myVideo[i].addEventListener('mouseout', detener);
}
