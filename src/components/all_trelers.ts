import { getData } from "../lib/http.request";
import { video } from "../main";

export function createTrelers(item:any) {
  const movieCard = document.createElement('div');
  movieCard.classList.add('trelers');

  const img = document.createElement('img');
  img.src = `https://image.tmdb.org/t/p/original${item.poster_path}`;
  img.alt = "";

  const title = document.createElement('h3');
  title.classList.add('movie-title');
  title.textContent = item.title;
  
  movieCard.append(img, title);

  movieCard.onclick = () => {
    getData(`/movie/${item.id}/videos`)
    .then(res => {
      if (res.status === 200) {
        const Trailer = res.data.results.find(video => video.type === 'Trailer')
        video.src = `https://www.youtube.com/embed/${Trailer.key}`;
        
      }
    })
    tralerName.innerText = item.title;
  }
  
  
  return movieCard
}


