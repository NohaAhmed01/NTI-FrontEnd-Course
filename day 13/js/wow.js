var photos = Array.from(document.querySelectorAll(".item img"));
var chosenPic = document.getElementById("chosenPic");
var lightBoxContainer = document.getElementById("lightBoxContainer");

for(var i = 0; i<photos.length;i++){
    photos[i].addEventListener("click",function(eventInfo){
        chosenPic.style.backgroundImage = `url(${eventInfo.target.getAttribute("src")})`;
        lightBoxContainer.style.display="flex";
    
    });
}

var left = document.getElementById("left");
var right = document.getElementById("right");
var close = document.getElementById("close");

var index = 0;
function closePic(){
    lightBoxContainer.style.display="none";
}
close.addEventListener("click",closePic)
function leftPic(){
     index--;
    if(index <0){
        index=photos.length-1;
    }
    chosenPic.style.backgroundImage = `url(${photos[index].getAttribute("src")})`;   
}
left.addEventListener("click",leftPic)
function rightPic(){
    index++;
    if(index == photos.length){
        index=0;
    }
    chosenPic.style.backgroundImage = `url(${photos[index].getAttribute("src")})`;
}
right.addEventListener("click",rightPic)

document.addEventListener("keydown", function(eventInfo){
    if(eventInfo.code == "ArrowRight"){
        rightPic();
    }else if(eventInfo.code == "ArrowLeft"){
        leftPic();
    }else if(eventInfo.code == "Escape" ){
        closePic();
    }

})
document.addEventListener("click",function(eventInfo){
    if(!eventInfo.target.id == "chosenPic" ){
        closePic();
    }

})

