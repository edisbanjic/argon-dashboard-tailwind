let page: string = window.location.pathname.split("/").pop().split(".")[0];
let aux: Array<string> = window.location.pathname.split("/");
let to_build: string = (aux.includes('pages') || aux.includes('docs') ?'../':'./');
let root: Array<string> = window.location.pathname.split("/")
if (!aux.includes("pages")) {
  page = "dashboard";
}

loadStylesheet(to_build + "assets/css/perfect-scrollbar.css");
loadJS(to_build + "assets/js/perfect-scrollbar.js", true);

if (document.querySelector("[slider]")) {
  loadJS(to_build + "assets/js/carousel.js", true);
}

if (document.querySelector("nav [navbar-trigger]")) {
  loadJS(to_build + "assets/js/navbar-collapse.js", true);
}

if (document.querySelector("[data-target='tooltip']")) {
  loadJS(to_build + "assets/js/tooltips.js", true);
  loadStylesheet(to_build + "assets/css/tooltips.css");
}

if (document.querySelector("[nav-pills]")) {
  loadJS(to_build + "assets/js/nav-pills.js", true);
}

if (document.querySelector("[dropdown-trigger]")) {
  loadJS(to_build + "assets/js/dropdown.js", true);

}

if (document.querySelector("[fixed-plugin]")) {
  loadJS(to_build + "assets/js/fixed-plugin.js", true);
}

if (document.querySelector("[navbar-main]") || document.querySelector("[navbar-profile]")) {
  if(document.querySelector("[navbar-main]")){
    loadJS(to_build + "assets/js/navbar-sticky.js", true);
  }
  if (document.querySelector("aside")) {
    loadJS(to_build + "assets/js/sidenav-burger.js", true);
  }
}

if (document.querySelector("canvas")) {
  loadJS(to_build + "assets/js/charts.js", true);
}

if (document.querySelector(".github-button")) {
  loadJS("https://buttons.github.io/buttons.js", true);
}

function loadJS(FILE_URL: string, async: boolean): void {
  let dynamicScript = document.createElement("script");

  dynamicScript.setAttribute("src", FILE_URL);
  dynamicScript.setAttribute("type", "text/javascript");
  dynamicScript.setAttribute("async", async.toString());

  document.head.appendChild(dynamicScript);
}

function loadStylesheet(FILE_URL: string): void {
  let dynamicStylesheet = document.createElement("link");

  dynamicStylesheet.setAttribute("href", FILE_URL);
  dynamicStylesheet.setAttribute("type", "text/css");
  dynamicStylesheet.setAttribute("rel", "stylesheet");

  document.head.appendChild(dynamicStylesheet);
}