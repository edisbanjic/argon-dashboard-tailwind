let expand_trigger: HTMLElement = document.querySelector("[navbar-trigger]");
let bar1: HTMLElement = document.querySelector("[bar1]");
let bar2: HTMLElement = document.querySelector("[bar2]");
let bar3: HTMLElement = document.querySelector("[bar3]");
let navbar_sign_in_up: HTMLElement = document.querySelector("[navbar-menu]");
const collapse_height: number = navbar_sign_in_up.scrollHeight;
let elements: NodeListOf<Element>;

expand_trigger.addEventListener("click", function () {
  elements = navbar_sign_in_up.querySelectorAll("a");
  if (navbar_sign_in_up.classList.contains("lg-max:max-h-0")) {
    navbar_sign_in_up.classList.remove("lg-max:max-h-0");
    navbar_sign_in_up.classList.add("lg-max:max-h-54");
    setTimeout(function () {
      elements.forEach((element: Element) => {
        element.classList.remove("lg-max:opacity-0");
      });
    }, 50);
  } else {
    setTimeout(function () {
      elements.forEach((element: Element) => {
        element.classList.add("lg-max:opacity-0");
      });
    }, 100);
    navbar_sign_in_up.classList.remove("lg-max:max-h-54");
    navbar_sign_in_up.classList.add("lg-max:max-h-0");
  }
  bar1.classList.toggle("rotate-45");
  bar1.classList.toggle("origin-10-10");
  bar1.classList.toggle("mt-1");

  bar2.classList.toggle("opacity-0");

  bar3.classList.toggle("-rotate-45");
  bar3.classList.toggle("origin-10-90");
  bar3.classList.toggle("mt-0.75");
  bar3.classList.toggle("mt-1.75");
});