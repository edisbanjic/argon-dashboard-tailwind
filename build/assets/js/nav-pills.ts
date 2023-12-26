// Tabs navigation
let total: NodeListOf<Element> = document.querySelectorAll("[nav-pills]");

total.forEach((item: Element, i: number) => {
    let moving_div: HTMLDivElement = document.createElement("div") as HTMLDivElement;
    let first_li: Element = item.querySelector("li:first-child [nav-link]");
    let tab: Element = first_li.cloneNode() as Element;
    tab.innerHTML = "-";
    tab.classList.remove("bg-inherit", "text-slate-700");
    tab.classList.add("bg-white", "text-white");
    tab.style.animation = ".2s ease";

    moving_div.classList.add("z-10", "absolute", "text-slate-700", "rounded-lg", "bg-inherit", "flex-auto", "text-center", "bg-none", "border-0", "block");
    moving_div.setAttribute("moving-tab", "");
    moving_div.setAttribute("nav-link", "");
    moving_div.appendChild(tab);
    item.appendChild(moving_div);

    let list_length: HTMLCollectionOf<Element> = item.getElementsByTagName("li");

    moving_div.style.boxShadow = "0 1px 5px 1px #ddd";
    moving_div.style.padding = "0px";
    moving_div.style.width = (item.querySelector("li:nth-child(1)") as HTMLElement).offsetWidth + "px";
    moving_div.style.transform = "translate3d(0px, 0px, 0px)";
    moving_div.style.transition = ".5s ease";

    item.onmouseover = function (event: MouseEvent) {
        let target: Node = getEventTarget(event);
        let li: Element = (target as Element).closest("li");
        if (li) {
            let nodes = Array.from(li.closest("ul").children);
            let index = nodes.indexOf(li) + 1;
            item.querySelector("li:nth-child(" + index + ") [nav-link]").onclick = function () {
                item.querySelectorAll("li").forEach(function (list_item: Element) {
                    list_item.firstElementChild.removeAttribute("active");
                });
                li.firstElementChild.setAttribute("active", "");
            };
        }
    };
});

// Tabs navigation resize
let resizeFunction = function (event: UIEvent) {
    total.forEach((item: Element, i: number) => {
        // ...rest of the function
    });
}

window.addEventListener("resize", resizeFunction);

function getEventTarget(e: Event): EventTarget {
    e = e || window.event;
    return (e.target) ? e.target : e.srcElement;
}