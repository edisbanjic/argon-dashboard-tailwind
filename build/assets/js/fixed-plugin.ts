let pageName: string = window.location.pathname.split("/").pop().split(".")[0];

let fixedPlugin = document.querySelector("[fixed-plugin]") as HTMLElement;
let fixedPluginButton = document.querySelector("[fixed-plugin-button]") as HTMLElement;
let fixedPluginButtonNav = document.querySelector("[fixed-plugin-button-nav]") as HTMLElement;
let fixedPluginCard = document.querySelector("[fixed-plugin-card]") as HTMLElement;
let fixedPluginCloseButton = document.querySelector("[fixed-plugin-close-button]") as HTMLElement;

let navbar = document.querySelector("[navbar-main]") as HTMLElement;

let buttonNavbarFixed = document.querySelector("[navbarFixed]") as HTMLInputElement;

let sidenav = document.querySelector("aside") as HTMLElement;
let sidenav_icons = sidenav.querySelectorAll("li a div") as NodeListOf<HTMLDivElement>;

let sidenav_target: string = "../pages/" + pageName + ".html";

let whiteBtn = document.querySelector("[transparent-style-btn]") as HTMLElement;
let darkBtn = document.querySelector("[white-style-btn]") as HTMLElement;

let non_active_style: string[] = ["bg-none", "bg-transparent", "text-blue-500", "border-blue-500"];
let active_style: string[] = ["bg-gradient-to-tl", "from-blue-500", "to-violet-500", "bg-blue-500", "text-white", "border-transparent"];

let white_sidenav_classes: string[] = ["bg-white", "shadow-xl"];

let black_sidenav_classes: string[] = ["bg-slate-850", "shadow-none"];

let sidenav_highlight = document.querySelector(`a[href=${CSS.escape(sidenav_target)}]`) as HTMLElement;

// ... rest of your code