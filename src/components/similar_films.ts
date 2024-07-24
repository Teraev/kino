export function createSimilarFilms(item: any) {
    const movie = document.createElement('div');
    movie.classList.add('movie');


    const img = document.createElement('img');
    img.src =  `https://image.tmdb.org/t/p/original${item.poster_path}`; 
  


    const rating = document.createElement('div');
    rating.classList.add('rating');
    rating.textContent =  item.vote_average;

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = item.title;

   


    movie.append(img , rating , title );
    

    return movie
}