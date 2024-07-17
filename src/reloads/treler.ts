



function createTrailerCard() {
    const card = document.createElement('div');
    card.classList.add('trailer-card');

    const video = document.createElement('video');
    video.src = "trailer.video";
    video.controls = true; 
    
    const info = document.createElement('div');
    info.classList.add('trailer-info');

    const title = document.createElement('h3');
    title.classList.add('trailer-title');
    title.textContent = "trailer.title";
    
    const actions = document.createElement('div');
    actions.classList.add('trailer-actions');

    const likes = document.createElement('div');
    likes.classList.add('likes');
    likes.innerHTML = ""
    
    const views = document.createElement('span');
    views.classList.add('views');
    views.textContent = ` просмотров`;
    actions.append(likes , views);

    info.append(title , actions);
    card.append(video , info);
    return card;

}