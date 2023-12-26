// Define interfaces to improve typesafety

interface HTMLElementWithCustomProps extends HTMLElement {
    onmouseover: any;
}

declare global {
    interface Window {
        onresize: any;
    }
    interface HTMLElement{
        offsetWidth: number;
        offsetHeight: number;
    }
}

// Tabs navigation
const total: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>("[nav-pills]");

total.forEach((item: HTMLElement, i: number) => {
    let moving_div: HTMLElement = document.createElement("div");
    let first_li: HTMLElement = item.querySelector<HTMLElement>("li:first-child [nav-link]");
    let tab: Node = first_li.cloneNode();
    (tab as HTMLElement).innerHTML = "-";
    (tab as HTMLElement).classList.remove("bg-inherit", "text-slate-700");
    (tab as HTMLElement).classList.add("bg-white", "text-white");
    (tab as HTMLElement).style.animation = ".2s ease";

    moving_div.classList.add("z-10", "absolute", "text-slate-700", "rounded-lg", "bg-inherit", "flex-auto", "text-center", "bg-none", "border-0", "block");
    moving_div.setAttribute("moving-tab", "");
    moving_div.setAttribute("nav-link", "");
    moving_div.appendChild(tab);
    item.appendChild(moving_div);

    let list_length: number = item.getElementsByTagName("li").length;

    moving_div.style.boxShadow = "0 1px 5px 1px #ddd";
    moving_div.style.padding = "0px";
    moving_div.style.width = item.querySelector<HTMLElement>("li:nth-child(1)").offsetWidth + "px";
    moving_div.style.transform = "translate3d(0px, 0px, 0px)";
    moving_div.style.transition = ".5s ease";

    (item as HTMLElementWithCustomProps).onmouseover = (event: Event) => {
        let target: EventTarget = getEventTarget(event);
        let li: HTMLElement = (target as HTMLElement).closest("li");

        if (li) {
            let nodes: Array<Element> = Array.from(li.closest("ul").children);
            let index: number = nodes.indexOf(li) + 1;
            item.querySelector<HTMLElement>("li:nth-child(" + index + ") [nav-link]").onclick = () => {
                item.querySelectorAll<HTMLElement>("li").forEach((list_item: HTMLElement) => {
                    list_item.firstElementChild.removeAttribute("active");
                });
                li.firstElementChild.setAttribute("active", "");
                moving_div = item.querySelector("[moving-tab]");
                let sum: number = 0;
                if (item.classList.contains("flex-col")) {
                    for (let j: number = 1; j <= nodes.indexOf(li); j++) {
                        sum += item.querySelector<HTMLElement>("li:nth-child(" + j + ")").offsetHeight;
                    }
                    moving_div.style.transform = "translate3d(0px," + sum + "px, 0px)";
                    moving_div.style.height = item.querySelector<HTMLElement>("li:nth-child(" + j + ")").offsetHeight;
                } else {
                    for (let j: number = 1; j <= nodes.indexOf(li); j++) {
                        sum += item.querySelector<HTMLElement>("li:nth-child(" + j + ")").offsetWidth;
                    }
                    moving_div.style.transform = "translate3d(" + sum + "px, 0px, 0px)";
                    moving_div.style.width = item.querySelector<HTMLElement>("li:nth-child(" + index + ")").offsetWidth + "px";
                }
            };
        }
    };
});

// Tabs navigation resize
window.onresize = (event: Event) => {
    total.forEach((item: HTMLElement, i: number) => {
        item.querySelector("[moving-tab]").remove();
        let moving_div: HTMLElement = document.createElement("div");
        let tab: Node = item.querySelector("[nav-link][active]").cloneNode();
        (tab as HTMLElement).innerHTML = "-";
        (tab as HTMLElement).classList.remove("bg-inherit");
        (tab as HTMLElement).classList.add("bg-white", "text-white");
        (tab as HTMLElement).style.animation = ".2s ease";

        moving_div.classList.add("z-10", "absolute", "text-slate-700", "rounded-lg", "bg-inherit", "flex-auto", "text-center", "bg-none", "border-0", "block");
        moving_div.setAttribute("moving-tab", "");
        moving_div.setAttribute("nav-link", "");
        moving_div.appendChild(tab);

        item.appendChild(moving_div);

        moving_div.style.boxShadow = "0 1px 5px 1px #ddd";
        moving_div.style.padding = "0px";
        moving_div.style.transition = ".5s ease";

        let li: HTMLElement = item.querySelector("[nav-link][active]").parentElement;

        if (li) {
            let nodes: Array<Element> = Array.from(li.closest("ul").children);
            let index: number = nodes.indexOf(li) + 1;

            let sum: number = 0;
            if (item.classList.contains("flex-col")) {
                for (let j: number = 1; j <= nodes.indexOf(li); j++) {
                    sum += item.querySelector<HTMLElement>("li:nth-child(" + j + ")").offsetHeight;
                }
                moving_div.style.transform = "translate3d(0px," + sum + "px, 0px)";
                moving_div.style.width = item.querySelector<HTMLElement>("li:nth-child(" + index + ")").offsetWidth + "px";
                moving_div.style.height = item.querySelector<HTMLElement>("li:nth-child(" + j + ")").offsetHeight;
            } else {
                for (let j: number = 1; j <= nodes.indexOf(li); j++) {
                    sum += item.querySelector<HTMLElement>("li:nth-child(" + j + ")").offsetWidth;
                }
                moving_div.style.transform = "translate3d(" + sum + "px, 0px, 0px)";
                moving_div.style.width = item.querySelector<HTMLElement>("li:nth-child(" + index + ")").offsetWidth + "px";
            }
        }
    });

    if (window.innerWidth < 991) {
        total.forEach((item: HTMLElement, i: number) => {
            if (!item.classList.contains("flex-col")) {
                item.classList.add("flex-col", "on-resize");
            }
        });
    } else {
        total.forEach((item: HTMLElement, i: number) => {
            if (item.classList.contains("on-resize")) {
                item.classList.remove("flex-col", "on-resize");
            }
        });
    }
};

const getEventTarget = (e: Event): EventTarget => {
    e = e || window.event;
    return (e ? e.target: e.srcElement);
};