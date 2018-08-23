document.addEventListener("DOMContentLoaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here

function pageChange(movieTitle){
    let castDetails='' ;
    let reviewDetails='';
    
    document.getElementById('title').innerHTML=movies[movieTitle].title;
    document.getElementById('director').innerHTML=movies[movieTitle].director;
    document.getElementById('genre').innerHTML=movies[movieTitle].genre;
    document.getElementById('filmRating').innerHTML=movies[movieTitle].filmRating;
      document.getElementById('poster').src=movies[movieTitle].poster;
    document.getElementById('description').innerHTML=movies[movieTitle].description;
    document.getElementById('audienceScore').innerHTML=movies[movieTitle].audienceScore;
    for (let index=0; index<movies[movieTitle].cast.length;index++){
      console.log(index);
      castDetails=castDetails+movies[movieTitle].cast[index].role+':'+movies[movieTitle].cast[index].actor+'<br>';
        console.log(castDetails);
      }
    
    document.getElementById('cast').innerHTML=castDetails;
    
    for (let index=0; index<movies[movieTitle].reviews.length;index++){
      console.log(index);
      reviewDetails=reviewDetails+movies[movieTitle].reviews[index].username+':'+movies[movieTitle].reviews[index].content+'<br>';
        console.log(castDetails);
      }
    
    document.getElementById('reviews').innerHTML=reviewDetails;
  }

  document.getElementById('Titanic').addEventListener('click',(event)=>{
    console.log('listener',document.getElementById('Titanic').innerHTML);
    pageClick=document.getElementById('Titanic').innerHTML;
    
    pageChange(pageClick);
    
  })
  
   document.getElementById('Terminator 2').addEventListener('click',(event)=>{
    console.log('listener',document.getElementById('Terminator 2').innerHTML);
    // document.getElementById('title').innerHTML=movies.Titanic['title'];
    pageClick=document.getElementById('Terminator 2').innerHTML;
    
    pageChange(pageClick);
  })
   pageChange('Titanic');
});
