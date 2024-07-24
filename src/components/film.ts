export function createFilm(item:any) {
    const div = document.createElement('div')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')

    p.classList.add('description')

    h2.textContent = "rere"
    p.textContent = "123"

    div.append(h2 , p)
    return div
}