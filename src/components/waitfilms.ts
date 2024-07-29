export function createWaitfilms(item: any) {

        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        const img = document.createElement('img');
        img.src = `https://image.tmdb.org/t/p/original${item.poster_path}`;
        img.alt = "";

        const title = document.createElement('h3');
        title.classList.add('movie-title');
        title.textContent = item.title;

        const release = document.createElement('p');
        release.classList.add('movie-release');
        release.textContent = `${item.release_date} в России`;

        movieCard.onclick = () => {
                location.assign('/pages/film_page/?id=' + item.id);
              }

        movieCard.append(img, title, release);

        return movieCard

}