import { reload, setSwiper, debounce } from "./lib/utils";
import { getData } from "./lib/http.request";
import { createActor, createActorOther } from "./components/actors";
import { createGenre } from "./components/genres"
import { createTrailers } from "./components/all_trelers";
import { searchFilms } from "./components/create_search_films";
import { createSimilarFilms } from "./components/similar_films"
import { Movie } from "./components/swiper";



type HTMLElementOrNull = HTMLElement | null;
type EventListener = (event: Event) => void;


export const video: HTMLIFrameElement | null = document.querySelector('.container_treler iframe');
export const place: HTMLElementOrNull = document.querySelector('.container_films');
export const backsize: HTMLElementOrNull = document.querySelector('.backsize');

const body = document.body;
const container_new_film = document.querySelector('.container_new_film')
const container_film: HTMLElementOrNull = document.querySelector('.container_film');
const search: HTMLInputElement | null = document.querySelector('.searches');
const modal: HTMLElementOrNull = document.querySelector('#modal');
const close: HTMLElementOrNull = document.querySelector('.close-button');
const other_trelers: HTMLElementOrNull = document.querySelector('.trailers');
const main_actor: HTMLElementOrNull = document.querySelector('.main_actor');
const other_actors: HTMLElementOrNull = document.querySelector('.other_actors');
const place_genre: HTMLElementOrNull = document.querySelector('.kino');
const place_wait_films: HTMLElementOrNull = document.querySelector('.movie-grid_wait_films');
const place_wrapper = document.querySelector('.popular-playing') as HTMLElement;

const btn_all: HTMLElementOrNull = document.querySelector('.novinki');
const poisk: HTMLElementOrNull = document.querySelector('.poisk');

let all: boolean = false;


getData('/movie/popular')
.then((res: any) => {
  if (res.status === 200) {
    setSwiper(res.data.results, "swiper", createSimilarFilms, container_new_film);
  }
});




if (btn_all) {
  btn_all.onclick = () => {
    if (all === false) {
      getData('/movie/now_playing').then((res: any) => {
        if (res.status === 200) {
          reload(res.data.results, createSimilarFilms, place);
          all = true;
        }
      });
    } else {
      getData('/movie/now_playing')
      .then((res: any) => {
        if (res.status === 200) {
          const limitednewfilms = res.data.results.slice(0, 8);
          reload(limitednewfilms, createSimilarFilms, place);
          all = false;
        }
      });
    }
  };
}

getData('/movie/now_playing')
.then((res: any) => {
  if (res.status === 200) {
    const limitednewfilms = res.data.results.slice(0, 8);
    reload(limitednewfilms, createSimilarFilms, place);
  }
});



getData('/movie/upcoming?limit=4')
.then((res: any) => {
  if (res.status === 200) {
    const limitednewfilms = res.data.results.slice(0, 4);
    reload(limitednewfilms, createSimilarFilms, place_wait_films);
  }
});

getData('/person/popular')
.then((res: any) => {
  if (res.status === 200) {
    const limitedwaitfilms = res.data.results.slice(0, 2);
    reload(limitedwaitfilms, createActor, main_actor);
  }
});

getData('/person/popular')
.then((res: any) => {
  if (res.status === 200) {
    reload(res.data.results, createActorOther, other_actors);
  }
});

getData('/genre/movie/list')
.then((res: any) => {
  if (res.status === 200) {
    reload(res.data.genres, createGenre, place_genre);
  }
});

getData('/movie/now_playing')
.then((res: any) => {
  if (res.status === 200) {
    reload(res.data.results, createTrailers, other_trelers);
  }
});

if (poisk) {
  poisk.onclick = () => {
    if (modal) {
      modal.style.display = "flex";
      body.style.overflow = "hidden";
    }
  };
}

if (close) {
  close.onclick = () => {
    if (modal) {
      modal.style.display = "none";
      body.style.overflow = "auto";
    }
  };
}

const debouncedLog: EventListener = debounce((e: any) => {
  if (search) {
    getData(`/search/multi?query=${search.value}`).then((res: any) => {
      reload(res.data.results, searchFilms, container_film);
    });
  }
}, 600);

if (search) {
  search.onkeyup = debouncedLog;
}
