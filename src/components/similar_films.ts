import { getData } from "../lib/http.request";
import { backsize } from "../main";

export function createSimilarFilms(item: any) {
  const movie = document.createElement('div');
  movie.classList.add('movie');


  const img = document.createElement('img');
  img.src = `https://image.tmdb.org/t/p/original${item.poster_path}`;



  const rating = document.createElement('div');
  rating.classList.add('rating');
  rating.textContent = item.vote_average.toFixed(1).toString();

  const title = document.createElement('div');
  title.classList.add('title');
  title.textContent = item.title;

  movie.onclick = () => {
    location.assign('/pages/film_page/?id=' + item.id);
  }

  movie.append(img, rating, title);

  movie.onmouseenter = () => {
    setTimeout(() => {
      if (backsize) {
        backsize.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`;
      }
    }, 500);
  };

  getData(`/movie/${item.id}/videos`).then((res: any) => {
    const video = document.querySelector('.container_treler iframe') as HTMLIFrameElement;
    if (res.status === 200 && res.data.results.length > 0) {
 
      video.src = `https://www.youtube.com/embed/${res.data.results[0].key}`;
    }
  });

  return movie
}