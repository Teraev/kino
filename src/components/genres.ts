import { getData } from "../lib/http.request";
import { reload } from "../lib/utils";
import { place } from "../main";
import { reloadFilm } from "./films";



export function createGenre(item: any) {
  const a = document.createElement('a')

  a.innerHTML = item.name

  // Set up the onclick handler
  a.onclick = () => {
    getData(`/discover/movie?with_genres=${item.id}`)
      .then(res => {
        if (res.status === 200) {
          const slice = res.data.results.slice(0, 8)
          reload(slice, reloadFilm, place)
        }
      })
  }

  // Return the anchor element after setting up the onclick handler
  return a
} 