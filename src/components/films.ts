import { getData } from "../lib/http.request";
import { backsize, video } from "../main";


interface MovieItem {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
}

export function reloadFilm(item: MovieItem): HTMLDivElement {
  const div: HTMLDivElement = document.createElement('div');
  div.classList.add('film-card');

  const span: HTMLSpanElement = document.createElement('span');
  const img: HTMLImageElement = document.createElement('img');

  span.textContent = item.title;
  img.src = `https://image.tmdb.org/t/p/original${item.poster_path}`;

  div.onmouseenter = () => {
    setTimeout(() => {
      if (backsize) {
        backsize.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`;
      }
    }, 500);
  };

  getData(`/movie/${item.id}/videos`).then((res: any) => {
    if (res.status === 200 && res.data.results.length > 0) {
      video.src = `https://www.youtube.com/embed/${res.data.results[0].key}`;
    }
  });

  div.onclick = () => {
    getData(`/movie/${item.id}/videos`).then((res: any) => {
      if (res.status === 200) {
        const Trailer = res.data.results.find((video: any) => video.type === 'Trailer');
        if (Trailer) {
          video.src = `https://www.youtube.com/embed/${Trailer.key}`;
          location.assign('/pages/film_page/?id=' + item.id);
        }
      }
    });
  };

  div.append(img, span);

  return div;
}