document.addEventListener("DOMContentLoaded", (e) => {

  document.getElementById("Titanic").addEventListener("click", function (e){
    // console.log("Potato")
    document.getElementById("title").innerHTML=movies["Titanic"].title
    document.getElementById("director").innerHTML=movies["Titanic"].director
    document.getElementById("genre").innerHTML=movies["Titanic"].genre
    document.getElementById("filmRating").innerHTML=movies["Titanic"].filmRating
    document.getElementById("poster").src=movies["Titanic"].poster
    document.getElementById("audienceScore").innerHTML=movies["Titanic"].audienceScore
    document.getElementById("description").innerHTML=movies["Titanic"].description
    
    let domcast = document.getElementById("cast") 
    // domcast.innerHTML = movies["Titanic"].cast[0].role + ' - ' +movies["Titanic"].cast[0].actor;
    
    let thisMovie = movies["Titanic"].cast;
    let credits = '';
    
    for(let i=0; i<thisMovie.length; i++) {
      credits += thisMovie[i].role + ' - '+ thisMovie[i].actor + ' <br>' ;
    }
  domcast.innerHTML = credits;
    
    
    let domreview = document.getElementById("reviews") 
    let thisReview = movies["Titanic"].reviews;
    let creditsReview = '';
    
    for(let i=0; i<thisReview.length; i++) {
      creditsReview += thisReview[i].username + ' - '+ thisReview[i].content + ' <br>' ;
    }
  domreview.innerHTML = creditsReview;
    
  })
  
// .appendChild("role","actor").innerHTML
// find div for cast.. Find first child



  document.getElementById("Terminator 2").addEventListener("click", function (e){
    // console.log("Leek")
    document.getElementById("title").innerHTML=movies["Terminator 2"].title
    document.getElementById("director").innerHTML=movies["Terminator 2"].director
    document.getElementById("genre").innerHTML=movies["Terminator 2"].genre
    document.getElementById("filmRating").innerHTML=movies["Terminator 2"].filmRating
    document.getElementById("poster").src=movies["Terminator 2"].poster
    document.getElementById("audienceScore").innerHTML=movies["Terminator 2"].audienceScore
    document.getElementById("description").innerHTML=movies["Terminator 2"].description
    
       let domcast = document.getElementById("cast") 
    // domcast.innerHTML = movies["Titanic"].cast[0].role + ' - ' +movies["Titanic"].cast[0].actor;
    
    let thisMovie = movies["Terminator 2"].cast;
    let credits = '';
    
    for(let i=0; i<thisMovie.length; i++) {
      credits += thisMovie[i].role + ' - '+ thisMovie[i].actor + ' <br>' ;
    }
  domcast.innerHTML = credits;
    
    
    let domreview = document.getElementById("reviews") 
    let thisReview = movies["Terminator 2"].reviews;
    let creditsReview = '';
    
    for(let i=0; i<thisReview.length; i++) {
      creditsReview += thisReview[i].username + ' - '+ thisReview[i].content + ' <br>' ;
    }
  domreview.innerHTML = creditsReview;
  })
  
  
  
  // genre, filmrating, poster, audienceScore, description
  // invoking a function here will make sure it happens on page load
  // your code here
});
