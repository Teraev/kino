export function createActor(item: any) {

        const items = document.createElement('div');
        items.classList.add('item');

        const img = document.createElement('img');
        img.src = `https://image.tmdb.org/t/p/original${item.profile_path}`
        img.alt = "";

        const nameDiv = document.createElement('h3');
        nameDiv.textContent = item.original_name;

        const nameLatinDiv = document.createElement('p');
        nameLatinDiv.textContent = item.name;
        items.append(img, nameDiv, nameLatinDiv);

        return items

}

export function createActorOther(item: any) {

        const items = document.createElement('div');
        items.classList.add('item');

        const nameDiv = document.createElement('h3');
        nameDiv.textContent = item.original_name;

        const nameLatinDiv = document.createElement('p');
        nameLatinDiv.textContent = item.name;
        items.append(nameDiv, nameLatinDiv);

        return items
}