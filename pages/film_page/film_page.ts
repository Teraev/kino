import { getData } from "../../src/lib/http.request"
import { reload } from "../../src/lib/utils"
import { createActors } from "../../src/components/create_actors"
import { createPoster } from "../../src/components/create_poster"
import { createFilmImages } from "../../src/components/film_images"
import { createSimilarFilms} from "../../src/components/similar_films"
const body = document.body
const img = document.querySelector('.poster')

const name_film = document.querySelector('.name_film')
const description = document.querySelector('.description')
const container_actors = document.querySelector('.container_actors')
const video = document.querySelector('.container_treler iframe')
const name_treler = document.querySelector('.name_treler')
const poster_container = document.querySelector('.poster-container')
const film_gallery = document.querySelector('.film_gallery')
const container_similar_films = document.querySelector('.container_filmi')
const trailerbtn = document.querySelector('.trailer-button')
const container_treler = document.querySelector('.container_treler')
const home = document.querySelector('.home')
let id = location.search.split('=').at(-1);

getData(`/movie/${id}`)
    .then(res => {
        if (res.status === 200) {

            body.style.background = `url(https://image.tmdb.org/t/p/original${res.data.backdrop_path})`,
                img.src = `https://image.tmdb.org/t/p/original${res.data.poster_path}`,
                name_film.textContent = res.data.title,
                description.textContent = res.data.overview
        }
    })

getData(`/movie/${id}/credits`)
    .then(res => {
        if (res.status === 200) {
            reload(res.data.cast.slice(0, 10), createActors, container_actors)
        }
    })


getData(`/movie/${id}/videos`)
    .then(res => {
        if (res.status === 200) {
            let result = res.data.results.find(el => el.type === "Trailer");

            video.src = `https://www.youtube.com/embed/${result.key}`;
            name_treler.innerHTML = result.name
        }
    })

getData(`/movie/${id}/images`)
    .then(res => {
        
        reload(res.data.posters.slice(0, 4), createPoster, poster_container)
    })


    getData(`/movie/${id}/images`)
    .then(res => {
        reload(res.data.backdrops.slice(0, 6), createFilmImages , film_gallery)
    })

    getData(`/movie/${id}/similar`)
    .then(res => {
        reload(res.data.results.slice(0, 4), createSimilarFilms, container_similar_films)
    })

trailerbtn.onclick = () => {
    container_treler.scrollIntoView({ 
        behavior: 'smooth' 
      });
}

home.onclick = () => {
    location.assign('/')
}