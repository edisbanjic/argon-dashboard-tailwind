let buttons: NodeListOf<HTMLElement> = document.querySelectorAll("[data-target='tooltip_trigger']");

buttons.forEach((button: HTMLElement) => {
  let tooltip: (Element | null) = button.nextElementSibling;
  let placement: string | null = button.getAttribute("data-placement");

  const popperInstance = Popper.createPopper(button, tooltip as HTMLElement, {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 8],
        },
      },
    ],
    placement: placement as any,
  });

  function show() {
    // Make the tooltip visible
    (tooltip as HTMLElement).classList.remove("hidden");
    (tooltip as HTMLElement).classList.add("block");

    // Enable the event listeners
    popperInstance.setOptions((options: any) => ({
      ...options,
      modifiers: [...options.modifiers, { name: "eventListeners", enabled: true }],
    }));

    // Update its position
    popperInstance.update();
  }

  function hide() {
    // Hide the tooltip
    (tooltip as HTMLElement).classList.remove("block");
    (tooltip as HTMLElement).classList.add("hidden");

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