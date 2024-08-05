import { getData } from "../../src/lib/http.request";
import { debounce, reload } from "../../src/lib/utils";
import { createActors } from "../../src/components/create_actors";
import { createPoster } from "../../src/components/create_poster";
import { createFilmImages } from "../../src/components/film_images";
import { createSimilarFilms } from "../../src/components/similar_films";
import { searchFilms } from "../../src/components/create_search_films";

const poisk: HTMLElement | null = document.querySelector('.poisk');
const close: HTMLElement | null = document.querySelector('.close-button');
const container_film: HTMLElement | null = document.querySelector('.container_film');
const search: HTMLInputElement | null = document.querySelector('.searches');
const img: HTMLImageElement | null = document.querySelector('.poster');
const backsize: HTMLElement | null = document.querySelector('.backsize');
const name_film: HTMLElement | null = document.querySelector('.name_film');
const description: HTMLElement | null = document.querySelector('.description');
const container_actors: HTMLElement | null = document.querySelector('.container_actors');
const video: HTMLIFrameElement | null = document.querySelector('.container_treler iframe');
const name_treler: HTMLElement | null = document.querySelector('.name_treler');
const poster_container: HTMLElement | null = document.querySelector('.poster-container');
const film_gallery: HTMLElement | null = document.querySelector('.film_gallery');
const container_similar_films: HTMLElement | null = document.querySelector('.container_filmi');
const trailerbtn: HTMLElement | null = document.querySelector('.trailer-button');
const container_treler: HTMLElement | null = document.querySelector('.container_treler');
const home: HTMLElement | null = document.querySelector('.home');
const modal: HTMLElement | null = document.querySelector('#modal'); 

let id: string | null = location.search.split('=').at(-1);

if (id) {
    getData(`/movie/${id}`).then((res: any) => {
        if (res.status === 200 && backsize && img && name_film && description) {
            backsize.style.background = `url(https://image.tmdb.org/t/p/original${res.data.backdrop_path})`;
            img.src = `https://image.tmdb.org/t/p/original${res.data.poster_path}`;
            name_film.textContent = res.data.title;
            description.textContent = res.data.overview;
        }
    });

    getData(`/movie/${id}/credits`).then((res: any) => {
        if (res.status === 200 && container_actors) {
            reload(res.data.cast.slice(0, 10), createActors, container_actors);
        }
    });

    getData(`/movie/${id}/videos`).then((res: any) => {
        if (res.status === 200 && video && name_treler) {
            let result = res.data.results.find((el: any) => el.type === "Trailer");
            if (result) {
                video.src = `https://www.youtube.com/embed/${result.key}`;
                name_treler.innerHTML = result.name;
            }
        }
    });

    getData(`/movie/${id}/images`).then((res: any) => {
        if (res.status === 200 && poster_container) {
            reload(res.data.posters.slice(0, 4), createPoster, poster_container);
        }
    });

    getData(`/movie/${id}/images`).then((res: any) => {
        if (res.status === 200 && film_gallery) {
            reload(res.data.backdrops.slice(0, 6), createFilmImages, film_gallery);
        }
    });

    getData(`/movie/${id}/similar`).then((res: any) => {
        if (res.status === 200 && container_similar_films) {
            reload(res.data.results.slice(0, 4), createSimilarFilms, container_similar_films);
        }
    });
}

if (trailerbtn && container_treler) {
    trailerbtn.onclick = () => {
        container_treler.scrollIntoView({
            behavior: 'smooth'
        });
    };
}

if (home) {
    home.onclick = () => {
        location.assign('/');
    };
}

if (poisk && modal) {
    poisk.onclick = () => {
        modal.style.display = "flex";
    };
}

if (close && modal) {
    close.onclick = () => {
        modal.style.display = "none";
    };
}

if (search && container_film) {
    const debouncedLog = debounce((e: Event) => {
        getData(`/search/multi?query=${search.value}`).then((res: any) => {
            reload(res.data.results, searchFilms, container_film);
        });
    }, 600);

    search.onkeyup = debouncedLog;
}
