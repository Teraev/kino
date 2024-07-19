import { reload } from "./lib/utils"
import { createActor, createActorOther } from "./reloads/actors"
import { reloadFilm } from "./reloads/films"
import { createGenre } from "./reloads/genres"
import { createNewfilms } from "./reloads/newfilms"
import { createWaitfilms } from "./reloads/waitfilms"
export const body = document.body
const now_playing_films = 'https://api.themoviedb.org/3/movie/now_playing'
const new_films = 'https://api.themoviedb.org/3/movie/popular'
const upcoming_films = 'https://api.themoviedb.org/3/movie/upcoming'
const actors = 'https://api.themoviedb.org/3/person/popular'
const genre = 'https://api.themoviedb.org/3/genre/movie/list'
export const video = document.querySelector('.container_treler iframe')
const main_actor = document.querySelector('.main_actor')
const other_actors = document.querySelector('.other_actors')
const place_genre = document.querySelector('.kino')
const place_wait_films = document.querySelector('.movie-grid_wait_films')
export const place = document.querySelector('.container_films')
const place_new_films = document.querySelector('.movie-grid')



const conf = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDE0MDUyYzkyYjA1YzlmNGYwZWFmZmVjZTI2NGIyNSIsIm5iZiI6MTcyMTA3OTM5My4yODY0MzIsInN1YiI6IjY2OTU5MzQ1YWZiODk5ZDgwMGU0ZjJlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rOxqFrK9X13NESM8laD0Oq9SMnvLe2P66uRPZszbGJY`
  }
}


fetch(now_playing_films, conf)
  .then(res => res.json())
  .then(res => {
    const limitedfilms = res.results.slice(0, 8);
    reload(limitedfilms, reloadFilm, place)
  })


fetch(new_films, conf)
  .then(res => res.json())
  .then(res => {
    const limitednewfilms = res.results.slice(0, 4);
    reload(limitednewfilms, createNewfilms, place_new_films)
  })


fetch(upcoming_films, conf)
  .then(res => res.json())
  .then(res => {
    const limitedwaitfilms = res.results.slice(0, 4);
    reload(limitedwaitfilms, createWaitfilms, place_wait_films)
  })

fetch(actors, conf)
  .then(res => res.json())
  .then(res => {
    const limitedwaitfilms = res.results.slice(0, 2);
    reload(limitedwaitfilms, createActor, main_actor)
  })

fetch(actors, conf)
  .then(res => res.json())
  .then(res => {
    const limitedwaitfilms = res.results.slice(2, 7);
    reload(limitedwaitfilms, createActorOther, other_actors)
  })


fetch(genre, conf)
  .then(res => res.json())
  .then(res => {

    reload(res.genres, createGenre, place_genre)
  })


















