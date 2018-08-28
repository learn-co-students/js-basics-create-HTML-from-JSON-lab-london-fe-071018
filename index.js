document.addEventListener("DOMContentLoaded", (e) => {
  console.log("document loaded!")
  document.getElementById("Titanic").addEventListener("click", function(e){
    
    document.getElementById("title").innerHTML=movies["Titanic"].title
    document.getElementById("director").innerHTML=movies["Titanic"].director
    document.getElementById("genre").innerHTML=movies["Titanic"].genre
    document.getElementById("filmRating").innerHTML=movies["Titanic"].filmRating
    document.getElementById("description").innerHTML=movies["Titanic"].description
    document.getElementById("audienceScore").innerHTML=movies["Titanic"].audienceScore
    document.getElementById("poster").src=movies["Titanic"].poster
    document.getElementById("cast").innerHTML=movies["Titanic"].cast.map(el => `${el.role}: ${el.actor}`).join("<br>")
    document.getElementById("reviews").innerHTML=movies["Titanic"].reviews.map(el => `${el.username}: ${el.content}`).join("<br>")
    })
    
    document.getElementById("Terminator 2").addEventListener("click", function(e){
    document.getElementById("title").innerHTML=movies["Terminator 2"].title
    document.getElementById("director").innerHTML=movies["Terminator 2"].director
    document.getElementById("genre").innerHTML=movies["Terminator 2"].genre
    document.getElementById("filmRating").innerHTML=movies["Terminator 2"].filmRating
    document.getElementById("description").innerHTML=movies["Terminator 2"].description
    document.getElementById("audienceScore").innerHTML=movies["Terminator 2"].audienceScore
    document.getElementById("poster").src=movies["Terminator 2"].poster
    document.getElementById("cast").innerHTML=movies["Terminator 2"].cast.map(el => `${el.role}: ${el.actor}`).join("<br>")
    document.getElementById("reviews").innerHTML=movies["Terminator 2"].reviews.map(el => `${el.username}: ${el.content}`).join("<br>")
  })
  
});