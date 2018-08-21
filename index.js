function replaceContent(movie, part){
  const item = document.getElementById(part);
  while (item.firstChild) item.removeChild(item.firstChild);
  console.log(item);
  const list = document.createElement("ul");
  movie[part].forEach(val => {
    const listItem = document.createElement("li");
    const itemAndValue = Object.keys(val).forEach(key => {
      listItem.innerHTML += `${key}: ${val[key]} `;
    })
    list.appendChild(listItem);
  })
  item.appendChild(list);
}

function replace(movie){
  const mainTitle = document.getElementsByTagName("title")[0];
  mainTitle.innerHTML = movie.title;
  ["title", "director", "genre", "filmRating", "description", "audienceScore"].forEach(info=>{
    const item = document.getElementById(info);
    item.innerHTML = movie[info];
  })
  document.getElementById("poster").src=movie.poster;
  replaceContent(movie, "cast");
  replaceContent(movie, "reviews");
}

replace(movies.Titanic);

document.addEventListener("DOMContentLoaded", (e) => {
  ["Titanic", "Terminator 2"].forEach(movie=>document.getElementById(movie).addEventListener("click", ()=>{
    replace(movies[movie]);
  }))
});
