let pageName: string = window.location.pathname.split("/").pop().split(".")[0];

let fixedPlugin: any = document.querySelector("[fixed-plugin]");
let fixedPluginButton: any = document.querySelector("[fixed-plugin-button]");
let fixedPluginButtonNav: any = document.querySelector("[fixed-plugin-button-nav]");
let fixedPluginCard: any = document.querySelector("[fixed-plugin-card]");
let fixedPluginCloseButton: any = document.querySelector("[fixed-plugin-close-button]");

let navbar: any = document.querySelector("[navbar-main]");

let buttonNavbarFixed: any = document.querySelector("[navbarFixed]");

let sidenav: any = document.querySelector("aside");
let sidenav_icons: any = sidenav.querySelectorAll("li a div");

let sidenav_target: string = "../pages/" + pageName + ".html";

let whiteBtn: any = document.querySelector("[transparent-style-btn]");
let darkBtn: any = document.querySelector("[white-style-btn]");

let non_active_style: Array<string> = ["bg-none", "bg-transparent", "text-blue-500", "border-blue-500"];
let active_style: Array<string> = ["bg-gradient-to-tl", "from-blue-500", "to-violet-500", "bg-blue-500", "text-white", "border-transparent"];

let white_sidenav_classes: Array<string> = ["bg-white", "shadow-xl"];

let black_sidenav_classes: Array<string> = ["bg-slate-850", "shadow-none"];

let sidenav_highlight: any = document.querySelector(`a[href="${CSS.escape(sidenav_target)}"]`);

// Rest of your functions and code...
