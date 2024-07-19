import { reload } from "../lib/utils";
import { place } from "../main";
import { reloadFilm } from "./films";

const conf = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDE0MDUyYzkyYjA1YzlmNGYwZWFmZmVjZTI2NGIyNSIsIm5iZiI6MTcyMTA3OTM5My4yODY0MzIsInN1YiI6IjY2OTU5MzQ1YWZiODk5ZDgwMGU0ZjJlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rOxqFrK9X13NESM8laD0Oq9SMnvLe2P66uRPZszbGJY`
  }
}

export function createGenre(item:any) {
    const a = document.createElement('a')

    a.innerHTML = item.name
    


   console.log(item.id);
   
   a.onclick = () => {
     
    fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${item.id}`, conf)
    .then(res => res.json())
    .then(res => {
      const slice = res.results.slice(0 , 8)
      reload(slice , reloadFilm , place )
    })
  }
    

    return a
}