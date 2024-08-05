export function createFilm(item: any) {
  const div = document.createElement('div')
  const img = document.createElement('img')

  div.classList.add('filem')
  img.src = `https://image.tmdb.org/t/p/original${item.poster_path}`;

  div.onclick = () => {
    location.assign('/pages/film_page/?id=' + item.id);
  }

  const rating = document.createElement('div');
  rating.classList.add('rating');
  rating.textContent = item.vote_average.toFixed(1).toString();

  const title = document.createElement('div');
  title.classList.add('title');
  title.textContent = item.title;

  div.append(img , title , rating)

  return div
}