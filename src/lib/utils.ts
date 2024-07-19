export function reload(arr:any, component:any, place:any) {

    place.innerHTML = ""


    for (let item of arr) {

        const elem = component(item);

        place.append(elem);
    }

}