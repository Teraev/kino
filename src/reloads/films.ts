import { body } from "../main";

export function reloadFilm(arr: any, place: any) {
  place.innerHTML = ""; 

  for (let item of arr) {
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
    
    div.append(img, span);
    place.append(div); 
  }
}
