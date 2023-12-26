
// sidenav transition-burger
let sidenav: HTMLElement = document.querySelector<HTMLElement>("aside");
let sidenav_trigger: HTMLElement = document.querySelector<HTMLElement>("[sidenav-trigger]");
let sidenav_close_button: HTMLElement = document.querySelector<HTMLElement>("[sidenav-close]");
let burger: HTMLElement = sidenav_trigger.firstElementChild as HTMLElement;
let top_bread: HTMLElement = burger.firstElementChild as HTMLElement;
let bottom_bread: HTMLElement = burger.lastElementChild as HTMLElement;
let page: string = "someValue"; // Assign the appropriate value to the `page` variable

sidenav_trigger.addEventListener("click", () => {
 if (page == "virtual-reality") {
   sidenav.classList.toggle("xl:left-[18%]");
 }
 // sidenav_close_button.classList.toggle("hidden");
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
sidenav_close_button.addEventListener("click", () => {
 sidenav_trigger.click();
});

window.addEventListener("click", (e: MouseEvent) => {
 const target = e.target as Node;
 if (!sidenav.contains(target) && !sidenav_trigger.contains(target)) {
   if (sidenav.getAttribute("aria-expanded") == "true") {
     sidenav_trigger.click();
   }
 }
});