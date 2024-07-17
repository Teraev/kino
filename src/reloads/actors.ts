export function createActor(arr: any, place: any) {

    place.innerHTML = ""

    for (let items of arr) {
        const item = document.createElement('div');
        item.classList.add('item');

        const img = document.createElement('img');
        img.src = `https://image.tmdb.org/t/p/original${items.profile_path}`
        img.alt = "";

        const nameDiv = document.createElement('h3');
        nameDiv.textContent = items.original_name;


        const nameLatinDiv = document.createElement('p');
        nameLatinDiv.textContent = items.name;
        item.append(img, nameDiv, nameLatinDiv);

        place.append(item)
    }
}

export function createActorOther(arr: any, place: any) {

    place.innerHTML = ""

    for (let items of arr) {
        const item = document.createElement('div');
        item.classList.add('item');


        const nameDiv = document.createElement('h3');
        nameDiv.textContent = items.original_name;


        const nameLatinDiv = document.createElement('p');
        nameLatinDiv.textContent = items.name;
        item.append(nameDiv, nameLatinDiv);


        place.append(item)
    }
}