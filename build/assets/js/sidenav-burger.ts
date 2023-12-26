let sidenav = document.querySelector("aside") as HTMLElement;
let sidenav_trigger = document.querySelector("[sidenav-trigger]") as HTMLElement;
let sidenav_close_button = document.querySelector("[sidenav-close]") as HTMLElement;
let burger = sidenav_trigger.firstElementChild as HTMLElement;
let top_bread = burger.firstElementChild as HTMLElement;
let bottom_bread = burger.lastElementChild as HTMLElement;
let page: string = "yourPage"; //please provide the correct value for this element

if(sidenav && sidenav_trigger && sidenav_close_button && burger && top_bread && bottom_bread){
    
    sidenav_trigger.addEventListener("click", function () {
        if (page == "virtual-reality") {
            sidenav.classList.toggle("xl:left-[18%]");
        }
        if (sidenav.getAttribute("aria-expanded") == "false") {
            sidenav.setAttribute("aria-expanded", "true");
        } else {
            sidenav.setAttribute("aria-expanded", "false");
        }
        sidenav.classList.toggle("translate-x-0");
        sidenav.classList.toggle("ml-6");
        sidenav.classList.toggle("shadow-xl");
        if (page == "rtl") {
            top_bread.classList.toggle("-translate-x-[5px]");
            bottom_bread.classList.toggle("-translate-x-[5px]");
        } else {
            top_bread.classList.toggle("translate-x-[5px]");
            bottom_bread.classList.toggle("translate-x-[5px]");
        }
    });
    sidenav_close_button.addEventListener("click", function () {
        sidenav_trigger.click();
    });
    
    window.addEventListener("click", function (e: MouseEvent) {
        if (!sidenav.contains(e.target as Node) && !sidenav_trigger.contains(e.target as Node)) {
            if (sidenav.getAttribute("aria-expanded") == "true") {
                sidenav_trigger.click();
            }
        }
    });
}