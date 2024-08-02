export function createActors(item: any) {
    const actorCard = document.createElement('div');
    actorCard.classList.add('actor-card');

    const actorimg = document.createElement('img');
    actorimg.src = `https://image.tmdb.org/t/p/original${item.profile_path}`;


    const actorName = document.createElement('div');
    actorName.classList.add('actor-name');
    actorName.textContent = item.name;

    const actorRole = document.createElement('div');
    actorRole.classList.add('actor-role');
    actorRole.textContent = item.character;


    actorCard.onclick = () => {
        location.assign(`/pages/actor_page/?id=${item.id}`)
    }

    actorCard.append(actorimg, actorName, actorRole);


    return actorCard
}