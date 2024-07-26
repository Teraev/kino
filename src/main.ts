import Swiper from "swiper";
import { reload, setSwiper } from "./lib/utils"
import { getData } from "./lib/http.request"
import { createActor, createActorOther } from "./components/actors"
import { reloadFilm } from "./components/films"
import { createGenre } from "./components/genres"
import { createNewfilms } from "./components/newfilms"
import { createWaitfilms } from "./components/waitfilms"
import { createTrelers } from "./components/all_trelers"
import { Navigation } from "swiper/modules"
import { searchFilms } from "./components/create_search_films"


export const video = document.querySelector('.container_treler iframe')
export const place = document.querySelector('.container_films')
export const backsize = document.querySelector('.backsize')
const body = document.body
const container_film = document.querySelector('.container_film')
const search = document.querySelector('.searches')
const modal = document.querySelector('#modal')
const close = document.querySelector('.close-button')
const other_trelers = document.querySelector('.other_trelers')
const main_actor = document.querySelector('.main_actor')
const other_actors = document.querySelector('.other_actors')
const place_genre = document.querySelector('.kino')
const place_wait_films = document.querySelector('.movie-grid_wait_films')
const place_wrapper = document.querySelector('.container_swiper')
const btn_all = document.querySelector('.novinki')
const poisk = document.querySelector('.poisk')


let all = false
btn_all.onclick = () => {
  if (all === false) {
    getData('/movie/now_playing')
      .then(res => {
        if (res.status === 200) {
          reload(res.data.results, reloadFilm, place);
          all = true;
        }
      });
  } else {
    getData('/movie/now_playing')
      .then(res => {
        if (res.status === 200) {
          const limitednewfilms = res.data.results.slice(0, 8);
          reload(limitednewfilms, reloadFilm, place);
          all = false;
        }
      });
  }
}

getData('/movie/now_playing')
  .then(res => {
    if (res.status === 200) {
      const limitednewfilms = res.data.results.slice(0, 8);
      reload(limitednewfilms, reloadFilm, place);
    }
  })



getData('/movie/popular')
  .then(res => {
    if (res.status === 200) {

      setSwiper(res.data.results, "swiper" , reloadFilm, place_wrapper)
    }

  })


getData('/movie/upcoming?limit=4')
  .then(res => {
    if (res.status === 200) {
      const limitednewfilms = res.data.results.slice(0, 8);
      reload(limitednewfilms, createWaitfilms, place_wait_films)
    }

  })




getData('/person/popular')
  .then(res => {

    if (res.status === 200) {
      const limitedwaitfilms = res.data.results.slice(0, 2);
      reload(limitedwaitfilms, createActor, main_actor)
    }
  })

getData('/person/popular')
  .then(res => {
    if (res.status === 200) {

      reload(res.data.results, createActorOther, other_actors)
    }
  })



getData('/genre/movie/list')
  .then(res => {

    if (res.status === 200) {
      reload(res.data.genres, createGenre, place_genre)
    }
  })

getData('/movie/now_playing')
  .then(res => {
    if (res.status === 200) {

      reload(res.data.results, createTrelers, other_trelers);
    }
  })






poisk.onclick = () => {
  modal.style.display = "flex"
  body.style.overflow = "hidden"
}
close.onclick = () => {
  modal.style.display = "none"
  body.style.overflow = "auto"
}

function debounce(func, timeout = 800) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const debouncedLog = debounce((e) => {
  getData(`/search/multi?query=${search.value}`)
    .then(res => {
      reload(res.data.results, searchFilms, container_film)
    })

}, 600);

search.onkeyup = debouncedLog;


















