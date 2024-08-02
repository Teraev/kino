export function createPoster(item: any) {
    const div = document.createElement('div')
    const img = document.createElement('img')

    div.classList.add('poster')
    img.src = `https://image.tmdb.org/t/p/original${item.file_path}`;


    div.append(img)

    return div
}