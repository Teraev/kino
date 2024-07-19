

export function createNewfilms(item:any) {
  

    
        const card = document.createElement('div');
        card.classList.add('movie-card');
    
        const img = document.createElement('img');
        img.src = `https://image.tmdb.org/t/p/original${item.poster_path}`
        img.alt = item.title;
        
    
        const title = document.createElement('span');
        title.classList.add('movie-title');
        title.textContent = item.title;
        
    
     
        card.append(img , title );
      return card
        
    
  }