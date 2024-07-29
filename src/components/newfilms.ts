
export function createNewfilms(item: any) {

  const card = document.createElement('div');
  card.classList.add('swiper-slide');

  const img = document.createElement('img');
  img.src = `https://image.tmdb.org/t/p/original${item.poster_path}`
  img.alt = item.title;


 

  card.append(img);
  return card
}