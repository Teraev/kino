export function searchFilms(item:any) {
const main_div = document.createElement('div')
const img = document.createElement('img')
const content = document.createElement('div')
const name = document.createElement('div')
const raiting = document.createElement('div')


main_div.classList.add("modal-item_films")
content.classList.add('content')
raiting.classList.add('rating')

name.textContent = item.name
img.src = `https://image.tmdb.org/t/p/original${item.poster_path}`
raiting.textContent = item.vote_average
content.append(name)
main_div.append(img , content , raiting)

return main_div
}

