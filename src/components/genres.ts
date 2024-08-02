import { getData } from "../lib/http.request";
import { reload } from "../lib/utils";
import { place } from "../main";
import { createSimilarFilms } from "./similar_films";


interface GenreItem {
  id: number;
  name: string;
}

export function createGenre(item: GenreItem): HTMLAnchorElement {
  const a: HTMLAnchorElement = document.createElement('a');
  a.innerHTML = item.name;

  a.onclick = () => {
    getData(`/discover/movie?with_genres=${item.id}`)
      .then((res: any) => {
        if (res.status === 200) {
          const slice = res.data.results.slice(0, 8);
          reload(slice, createSimilarFilms, place);
        }
      });
  };

  return a;
}