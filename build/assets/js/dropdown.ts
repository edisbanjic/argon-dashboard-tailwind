// Navbar notifications dropdown
let dropdown_triggers: NodeListOf<Element> = document.querySelectorAll("[dropdown-trigger]");

dropdown_triggers.forEach((dropdown_trigger: Element) => {
  let dropdown_menu: HTMLElement | null = dropdown_trigger.parentElement?.querySelector("[dropdown-menu]");

  dropdown_trigger.addEventListener("click", function () {
    if (dropdown_menu) {
      dropdown_menu.classList.toggle("opacity-0");
      dropdown_menu.classList.toggle("pointer-events-none");
      dropdown_menu.classList.toggle("before:-top-5");

      if (dropdown_trigger.getAttribute("aria-expanded") == "false") {
        dropdown_trigger.setAttribute("aria-expanded", "true");
        dropdown_menu.classList.remove("transform-dropdown");
        dropdown_menu.classList.add("transform-dropdown-show");
      } else {
        dropdown_trigger.setAttribute("aria-expanded", "false");
        dropdown_menu.classList.remove("transform-dropdown-show");
        dropdown_menu.classList.add("transform-dropdown");
      }
    }
  });

  window.addEventListener("click", function (e: Event) {
    let target : Node | null = e.target as Node;

    if (target && dropdown_menu && !dropdown_menu.contains(target) && !dropdown_trigger.contains(target)) {
      if (dropdown_trigger.getAttribute("aria-expanded") == "true") {
        dropdown_trigger.click();
      }
    }
  });
});