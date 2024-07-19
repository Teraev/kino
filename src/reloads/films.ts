import { reload } from "../lib/utils";
import { body, genres, place, video } from "../main";
import { createGenre } from "./genres";


const conf = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDE0MDUyYzkyYjA1YzlmNGYwZWFmZmVjZTI2NGIyNSIsIm5iZiI6MTcyMTA3OTM5My4yODY0MzIsInN1YiI6IjY2OTU5MzQ1YWZiODk5ZDgwMGU0ZjJlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rOxqFrK9X13NESM8laD0Oq9SMnvLe2P66uRPZszbGJY`
  }
}

export function reloadFilm(item: any) {


  const div = document.createElement('div');
  div.classList.add('film-card');

  const span = document.createElement('span');
  const img = document.createElement('img');

  span.textContent = item.title;
  img.src = `https://image.tmdb.org/t/p/original${item.poster_path}`;

  div.onmouseenter = () => {
    setTimeout(() => {
      body.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`;
    }, 500);
  };

  fetch(`https://api.themoviedb.org/3/movie/${item.id}/videos`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDE0MDUyYzkyYjA1YzlmNGYwZWFmZmVjZTI2NGIyNSIsIm5iZiI6MTcyMTA3OTM5My4yODY0MzIsInN1YiI6IjY2OTU5MzQ1YWZiODk5ZDgwMGU0ZjJlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rOxqFrK9X13NESM8laD0Oq9SMnvLe2P66uRPZszbGJY`
      }
    })
    .then(res => res.json())
    .then(res => {
      
      video.src = `https://www.youtube.com/embed/${res.results[0].key}`;
      
    });
  


  div.onclick = () => {
    fetch(`https://api.themoviedb.org/3/movie/${item.id}/videos`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDE0MDUyYzkyYjA1YzlmNGYwZWFmZmVjZTI2NGIyNSIsIm5iZiI6MTcyMTA3OTM5My4yODY0MzIsInN1YiI6IjY2OTU5MzQ1YWZiODk5ZDgwMGU0ZjJlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rOxqFrK9X13NESM8laD0Oq9SMnvLe2P66uRPZszbGJY`
      }
    })
    .then(res => res.json())
    .then(res => {
      
      const Trailer = res.results.find(video => video.type === 'Trailer')
        video.src = `https://www.youtube.com/embed/${Trailer.key}`;
      
    });

  }


  
   



  

  div.append(img, span);
  return div;
}
  
  
  

