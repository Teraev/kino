import { getData } from "../lib/http.request";
import { backsize,  video } from "../main";




export function reloadFilm(item: any) {

  const div = document.createElement('div');
  div.classList.add('film-card');

  const span = document.createElement('span');
  const img = document.createElement('img');

  span.textContent = item.title;
  img.src = `https://image.tmdb.org/t/p/original${item.poster_path}`;

  div.onmouseenter = () => {
    setTimeout(() => {
      backsize.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`;
    }, 500);
  };

  getData(`/movie/${item.id}/videos`)
    .then(res => {
      if (res.status === 200) {
        video.src = `https://www.youtube.com/embed/${res.data.results[0].key}`;
      }
    })

  div.onclick = () => {
    getData(`/movie/${item.id}/videos`)
      .then(res => {
        if (res.status === 200) {
          const Trailer = res.data.results.find(video => video.type === 'Trailer')
          video.src = `https://www.youtube.com/embed/${Trailer.key}`;
          location.assign('./pages/film_page/?id=' + item.id);
        }
      })
      

  }



  div.append(img, span);
  
  return div;
}




