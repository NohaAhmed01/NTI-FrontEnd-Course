var row = document.getElementById("row");
// var posts = [];
// var myReq = new XMLHttpRequest();
// myReq.open("GET","https://jsonplaceholder.typicode.com/posts")
// myReq.send();
// myReq.addEventListener("readystatechange",function(){
//     if(myReq.readyState == 4 && myReq.status ==200){
//        posts = JSON.parse(myReq.response);
//        console.log(posts);
//        displayPosts();
//     }
// })

// function displayPosts(){
//      var cartona = '';
//  for(var i = 0; i<posts.length;i++){
//     cartona+=`<div class="col-md-3">
//                 <div class="item">
//                     <h4>${posts[i].title}</h4>
//                     <p>${posts[i].body}</p>
//                 </div>
//             </div>` 
//  }
//  row.innerHTML = cartona;
// }

var movies = [];
var req = new XMLHttpRequest();
req.open("GET","https://api.themoviedb.org/3/trending/movie/day?api_key=2dc4f3b7280c70e5009487448e8c74f4");
req.send();
req.addEventListener("readystatechange",function(){
    if(req.readyState==4 &&req.status ==200){
        movies = JSON.parse(req.response).results;
        displayMovies();
    }
})

function displayMovies(){
    var cartona = '';
    for(var i = 0;i<movies.length;i++){
        cartona+=`<div class="col-md-3">
                     <div class="item">
                     <h3>${movies[i].vote_average}</h3>
                     <img class="img-fluid" src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path}" alt ="">
                     <h4>${movies[i].title}</h4>
                     <p>${movies[i].overview}</p>
                    </div>
                </div>`
    }
    row.innerHTML=cartona;
}