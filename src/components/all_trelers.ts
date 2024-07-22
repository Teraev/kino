import { getData } from "../lib/http.request";
import { video } from "../main";

export function createTrelers(item:any) {
   const main_div = document.createElement('div')
  
   const picture = document.createElement("img");
   const tralerName = document.createElement("h3");
   const play = document.createElement("div");

   main_div.classList.add("trailer-item");
   picture.classList.add("picture");
   play.classList.add("play");

   picture.src = `https://image.tmdb.org/t/p/original${item.poster_path}`;
   tralerName.innerText = item.title

   main_div.onclick = () => {
    getData(`/movie/${item.id}/videos`)
      .then(res => {
        if (res.status === 200) {
          const Trailer = res.data.results.find(video => video.type === 'Trailer')
          video.src = `https://www.youtube.com/embed/${Trailer.key}`;

        }
      })
       tralerName.innerText = item.title;
   }

  main_div.append(picture , tralerName , play)
   return main_div
}


