export function createFilm(item: any) {
    const div = document.createElement('div')
    const img = document.createElement('img')

    div.classList.add('filem')
    img.src =  `https://image.tmdb.org/t/p/original${item.poster_path}`;


    div.append(img)

    return div
}