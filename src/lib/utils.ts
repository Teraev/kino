import Swiper from "swiper";
import { Navigation } from "swiper/modules"

export function reload(arr:any, component:any, place:any) {

    place.innerHTML = ""


    for (let item of arr) {

        const elem = component(item);

        place.append(elem);
    }

}

export function setSwiper(arr = [], className = "", component:any, place:any) {
    const swiperDiv = document.createElement("div");
    const swiperWrapper = document.createElement("div");
    const next = document.createElement("button");
    const prev = document.createElement("button");
  
    next.classList.add("swiper-button-next");
    prev.classList.add("swiper-button-prev");
    swiperDiv.classList.add(className);
    swiperWrapper.classList.add("swiper-wrapper");
  
    swiperDiv.append(swiperWrapper, next, prev);
    place.append(swiperDiv);
  
    reload(arr, component, swiperWrapper);
  
    new Swiper(`.${className}`, {
      modules: [Navigation],
      slidesPerView: 4,
      spaceBetween: 23,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }


  export function debounce(func:any, timeout = 800) {
    let timer:any;
    return (...args:any) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }