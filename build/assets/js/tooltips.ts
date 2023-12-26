let buttons: NodeListOf<Element> = document.querySelectorAll("[data-target='tooltip_trigger']");

buttons.forEach((button: Element) => {
  let tooltip: Element = button.nextElementSibling as Element;
  let placement: string = button.getAttribute("data-placement") || "";

  const popperInstance = Popper.createPopper(button, tooltip, {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 8],
        },
      },
    ],
    placement: placement,
  });

  function show(): void {
    // Make the tooltip visible
    tooltip.classList.remove("hidden");
    tooltip.classList.add("block");

    // Enable the event listeners
    popperInstance.setOptions((options: any) => ({
      ...options,
      modifiers: [...options.modifiers, { name: "eventListeners", enabled: true }],
    }));

    // Update its position
    popperInstance.update();
  }

  function hide(): void {
    // Hide the tooltip

    tooltip.classList.remove("block");
    tooltip.classList.add("hidden");

    // Disable the event listeners
    popperInstance.setOptions((options: any) => ({
      ...options,
      modifiers: [...options.modifiers, { name: "eventListeners", enabled: false }],
    }));
  }

  const showEvents: string[] = ["mouseenter", "focus"];
  const hideEvents: string[] = ["mouseleave", "blur"];

  showEvents.forEach((event: string) => {
    button.addEventListener(event, show);
  });

  hideEvents.forEach((event: string) => {
    button.addEventListener(event, hide);
  });
});