
export function Movie(item: any) {

    const movieCard = document.createElement("div");
    const moviePoster = document.createElement("img");
    moviePoster.classList.add("movie_poster");
    movieCard.classList.add("movie_card");

    moviePoster.src = `https://image.tmdb.org/t/p/original${item.poster_path}`;
    movieCard.append(moviePoster);

    return movieCard
}