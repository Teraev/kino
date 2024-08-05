import { getData } from "../lib/http.request";


interface MovieItem {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string; 
}



export function createTrailers(item: MovieItem): HTMLDivElement {
  const movieCard = document.createElement('div');
  movieCard.classList.add('trelers');

  

  const img = document.createElement('img');
  img.src = `https://image.tmdb.org/t/p/original${item.backdrop_path}`;
  img.alt = "";

  const play = document.createElement('img')
  play.classList.add('play')
   play.src = '../../img/play.svg'

  const title = document.createElement('h3');
  title.classList.add('movie-title');
  title.textContent = item.title;

  movieCard.append(img, title , play);

  movieCard.onclick = () => {
    getData(`/movie/${item.id}/videos`)
      .then((res: any) => { // Type the response
        const videos = document.querySelector('.container_treler iframe') as HTMLIFrameElement;
        if (res.status === 200) {
          const Trailer = res.data.results.find((video:any) => video.type === 'Trailer'); 
          if (Trailer) {
            videos.src = `https://www.youtube.com/embed/${Trailer.key}`;
          }
        }
      })  
  };

  return movieCard;
}