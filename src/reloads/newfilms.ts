

export function createNewfilms(arr: any, place: any) {
    place.innerHTML = ""

    for(let movie of arr) {
        const card = document.createElement('div');
        card.classList.add('movie-card');
    
        const img = document.createElement('img');
        img.src = `https://image.tmdb.org/t/p/original${movie.poster_path}`
        img.alt = movie.title;
        
    
        const title = document.createElement('span');
        title.classList.add('movie-title');
        title.textContent = movie.title;
        
    
     
        card.append(img , title );
       place.append(card)
        
    }
  }