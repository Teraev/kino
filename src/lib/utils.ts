import Swiper from "swiper";
import { Navigation } from "swiper/modules"

export function reload(arr:any, component:any, place:any) {

    place.innerHTML = ""


    for (let item of arr) {

        const elem = component(item);

        place.append(elem);
    }

}

export function setSwiper(arr = [], className = "", component, place) {
    const swiperDiv = document.createElement("div");
   
    swiperDiv.classList.add(className);
   
     place.append(swiperDiv)
   
     reload(arr, component, swiperDiv)
   
    new Swiper(className, {
     modules: [Navigation],
     slidesPerView: 4,
     spaceBetween: 23,
     navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
     },
    });
   }