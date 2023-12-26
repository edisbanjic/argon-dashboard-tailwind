(() => {
  const isWindows: boolean = navigator.platform.indexOf('Win') > -1;

  if (isWindows) {
    if (document.querySelector('main')) {
      const mainpanel: Element = document.querySelector('main')!;
      const ps = new PerfectScrollbar(mainpanel);
    }

    let sidebar: NodeListOf<Element>, ps: PerfectScrollbar[], i: number;

    if (document.querySelectorAll('.overflow-auto').length > 0) {
      sidebar = document.querySelectorAll('.overflow-auto');
      ps = [];
      i = 0;
      sidebar.forEach((element) => {
        ps[i++] = new PerfectScrollbar(element);
      });
    }
  
    if (document.querySelectorAll('.overflow-y-auto').length > 0) {
      sidebar = document.querySelectorAll('.overflow-y-auto');
      ps = [];
      i = 0;
      sidebar.forEach((element) => {
        ps[i++] = new PerfectScrollbar(element);
      });
    }

    if (document.querySelectorAll('.overflow-x-auto').length > 0) {
      sidebar = document.querySelectorAll('.overflow-x-auto');
      ps = [];
      i = 0;
      sidebar.forEach((element) => {
        ps[i++] = new PerfectScrollbar(element);
      });
    }
  }
})();