
export function Movie(item:any) {
    const movie = document.createElement('a');
    const movieCard = document.createElement("div");
    const moviePoster = document.createElement("img");
   


    moviePoster.classList.add("movie_poster");
    
    movieCard.classList.add("movie_cards");
    movie.classList.add('movie_card_link');
    movie.classList.add("swiper-slide")
   

    movie.href = `/pages/film_page/?id=${item.id}`;
    
    moviePoster.src = `https://image.tmdb.org/t/p/original${item.poster_path}`;
    moviePoster.alt = item.title;
  

    movieCard.append(moviePoster);
    movie.append(movieCard);
    return movie;
}