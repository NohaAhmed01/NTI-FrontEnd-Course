var h1 = document.getElementsByClassName("h1");
for(let i = 0;i<h1.length;i++){
    // h1[i].addEventListener("click",function(){
    //     window.alert("you clicked the h1");
    // })
    h1[i].addEventListener("click",function(){
        h1[i].style.backgroundColor = "red";
    })
}

var img = document.querySelector("img")
// document.addEventListener("mousemove",function(eventInfo){
//     img.style.left = eventInfo.clientX+"px";
//     img.style.top = eventInfo.clientY+"px";
// })
img.addEventListener("click",function(){
    img.setAttribute('src','https://w7.pngwing.com/pngs/251/430/png-transparent-drop-drinking-water-water-blue-electric-blue-water-thumbnail.png');
})