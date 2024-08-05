import { createFilm } from "../../src/components/create_films";
import { createPoster } from "../../src/components/create_poster";
import { searchFilms } from "../../src/components/create_search_films";
import { getData } from "../../src/lib/http.request";
import { debounce, reload } from "../../src/lib/utils";





const id = location.search.split('=').at(-1) as string;
const container_film = document.querySelector('.container_film')as HTMLElement;
const search = document.querySelector('.searches')as HTMLInputElement;
const modal = document.querySelector('#modal')as HTMLElement;
const poisk = document.querySelector('.poisk')as HTMLElement;
const close = document.querySelector('.close-button')as HTMLElement;
const person_name = document.querySelector('.main_name') as HTMLElement;
const born_date = document.querySelector('.born_date') as HTMLElement;
const born_place = document.querySelector('.born_place') as HTMLElement;
const person_photo = document.querySelector('.person_photo') as HTMLImageElement;
const career = document.querySelector('.career') as HTMLElement; 
const film_container = document.querySelector('.film_container') as HTMLElement;
const photos = document.querySelector('.film_gallery') as HTMLElement;
const home = document.querySelector('.home') as HTMLElement;

getData(`/person/${id}`)
    .then((res: any) => {
        person_name.innerHTML = res.data.name;
        career.innerHTML = `Карьера: ${res.data.known_for_department}`;
        born_date.innerHTML = `Дата рождения: ${res.data.birthday}`;
        born_place.innerHTML = `Место рождения: ${res.data.place_of_birth}`;
        person_photo.src = `https://image.tmdb.org/t/p/original${res.data.profile_path}`;
    });


getData(`/person/${id}/movie_credits`)
    .then((res: any) => {
        reload(res.data.cast.slice(0, 4), createFilm, film_container);
    });


getData(`/person/${id}/images`)
    .then((res: any) => {
        reload(res.data.profiles.slice(0, 8), createPoster , photos);
    });


    home.onclick = () => {
        location.assign('/');
    };


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