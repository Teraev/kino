import { reload } from "./lib/utils"
import { getData } from "./lib/http.request"
import { createActor, createActorOther } from "./components/actors"
import { reloadFilm } from "./components/films"
import { createGenre } from "./components/genres"
import { createNewfilms } from "./components/newfilms"
import { createWaitfilms } from "./components/waitfilms"
import { createTrelers } from "./components/all_trelers"
export const body = document.body
import Swiper from "swiper";
import { Navigation } from "swiper/modules"


const other_trelers = document.querySelector('.other_trelers')
export const video = document.querySelector('.container_treler iframe')
const main_actor = document.querySelector('.main_actor')
const other_actors = document.querySelector('.other_actors')
const place_genre = document.querySelector('.kino')
const place_wait_films = document.querySelector('.movie-grid_wait_films')
export const place = document.querySelector('.container_films')

const place_wrapper = document.querySelector('.swiper-wrapper')
const btn_all = document.querySelector('.novinki')


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

      reload(res.data.results, createNewfilms, place_wrapper)
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



new Swiper(".swiper", {
  modules: [Navigation],
  slidesPerView: 4,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



















