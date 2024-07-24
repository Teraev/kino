export function createFilmImages(item:any) {
    const div = document.createElement('div');
    div.classList.add('photo')

    div.style.background = `url(https://image.tmdb.org/t/p/original${item.file_path}) no-repeat center / cover`;

    return div;
}