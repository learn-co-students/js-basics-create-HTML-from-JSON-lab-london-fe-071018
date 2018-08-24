function replaceMovieContent(movie){
  document.getElementById("title").innerHTML = movies[movie].title;
 
  document.getElementById("director").innerHTML =
  movies[movie].director;
  
  document.getElementById("genre").innerHTML =
  movies[movie].genre;
  
  document.getElementById("filmRating").innerHTML =
  movies[movie].filmRating;
  
  document.getElementById("poster").src =
  movies[movie].poster;
  
  document.getElementById("audienceScore").innerHTML =
  movies[movie].audienceScore;
  
  document.getElementById("description").innerHTML =
  movies[movie].description;
  
  // let cast = document.getElementById("cast");
    let movieCast = '';
  for (let index=0;index<movies[movie].cast.length;index++){
   movieCast=movieCast+movies[movie].cast[index].role + movies[movie].cast[index].actor;
  }
  document.getElementById("cast").innerHTML =movieCast;
   movies[movie].cast;
  let movieReviews = '';
 for (let index=0; index< movies[movie].reviews.length;index++) {
  movieReviews = movieReviews+movies[movie].reviews[index].username + movies[movie].reviews[index].content;
 }
 document.getElementById("reviews").innerHTML=movieReviews; 
 
 

}




document.addEventListener("DOMContentLoaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here
  document.getElementById("Titanic").addEventListener("click", function(e) {
      replaceMovieContent("Titanic");
    }
  );
  document.getElementById("Terminator 2").addEventListener("click",function(e) {
      replaceMovieContent("Terminator 2");
      

  });
});
  
 
  
