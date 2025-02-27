var i = 0;
var concat="";
for(i = 0; i<5 ; i++){
    concat += `<li> About </li>`;
   
}
document.getElementById("myUl").innerHTML = concat;
concat="";
for(var i = 0; i<9 ; i++){
    console.log("i am here")
    concat += `<div class="col-md-4">
            <div class="item text-center">
                <img src="https://www.google.com/logos/doodles/2025/new-years-day-2025-6753651837110593-2xa.gif" class="w-75" alt="">
                <h1>Happy New Year</h1>
                <p>a doodle made by google for the new year's celebration</p>
            </div>
        </div>`
}
document.getElementById("myrow").innerHTML=concat;