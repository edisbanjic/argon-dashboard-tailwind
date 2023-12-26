In TypeScript, the code will look similar. However, since TypeScript is a statically typed superset of JavaScript, we could add types to variable declarations for better type safety. Also, we can use "let" and "const" for variable declarations instead of "var". Here is the TypeScript version of the above JavaScript code:

(function () {
  const isWindows: boolean = navigator.platform.indexOf("Win") > -1 ? true : false;

  if (isWindows) {
    // if we are on windows OS we activate the perfectScrollbar function
    if (document.querySelector("main")) {
      let mainpanel: any = document.querySelector("main");
      let ps = new PerfectScrollbar(mainpanel);
    }

    if (document.querySelectorAll(".overflow-auto")[0]) {
      let sidebar: NodeList = document.querySelectorAll(".overflow-auto");
      let ps: PerfectScrollbar[] = [];
      sidebar.forEach((element: HTMLElement, i: number) => {
        ps[i] = new PerfectScrollbar(element);
      });
    }
    if (document.querySelectorAll(".overflow-y-auto")[0]) {
      let sidebar: NodeList = document.querySelectorAll(".overflow-y-auto");
      let ps: PerfectScrollbar[] = [];
      sidebar.forEach((element: HTMLElement, i: number) => {
        ps[i] = new PerfectScrollbar(element);
      });
    }
    if (document.querySelectorAll(".overflow-x-auto")[0]) {
      let sidebar: NodeList = document.querySelectorAll(".overflow-x-auto");
      let ps: PerfectScrollbar[] = [];
      sidebar.forEach((element: HTMLElement, i: number) => {
        ps[i] = new PerfectScrollbar(element);
      });
    }
  }
})();

Note that, PerfectScrollbar unknown type, ve can't determine the strict type checking for ps. This can be replaced if the PerfectScrollbar class or constructor function type is known.