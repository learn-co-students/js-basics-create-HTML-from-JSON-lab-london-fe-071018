document.addEventListener("DOMContentLoaded", e => {

  function plugJson (movieName) {
    function exceptionSolver(movieName,parameter,para2,para3){
      document.getElementById(parameter).innerHTML="";
      let ulElement=null;
      ulElement=document.createElement("ul");
      for (let i=0;i<movies[movieName][parameter].length;i++){
        let listElement=null;
        listElement=document.createElement("li");
        listElement.innerText=movies[movieName][parameter][i][para2]+"\n"+movies[movieName][parameter][i][para3];
        ulElement.appendChild(listElement);
      }
      document.getElementById(parameter).appendChild(ulElement);
    }
    for(let el in movies[movieName]){
      
      if(el==="poster"){
        document.getElementById(el).src=movies[movieName][el];
      }
      else if(el==="cast"){
        exceptionSolver(movieName,el,"role","actor");
      }
      else if(el==="reviews"){
        exceptionSolver(movieName,el,"username","content");
      }
      else{
        document.getElementById(el).innerText=movies[movieName][el];
      }
    }

  }
  plugJson("Titanic");
  document.getElementById("Titanic").addEventListener("click", e1 =>{
    plugJson("Titanic");
  })
  document.getElementById("Terminator 2").addEventListener("click", e2 =>{
    plugJson("Terminator 2");
  })
});