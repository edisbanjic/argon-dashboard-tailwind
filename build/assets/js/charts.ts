// chart 1
const chartBars : HTMLElement | null = document.querySelector("#chart-bars");

if(chartBars){
  let ctx = (<HTMLCanvasElement>chartBars).getContext("2d");

  if(ctx){  
    new Chart(ctx, {
        //...
    });
  }
}

// chart 2
const chartLine  : HTMLElement | null = document.querySelector("#chart-line");

if(chartLine){
  let ctx1 = (<HTMLCanvasElement>chartLine).getContext("2d");

  if(ctx1){
    let gradientStroke1 = ctx1.createLinearGradient(0, 230, 0, 50);

    gradientStroke1.addColorStop(1, 'rgba(94, 114, 228, 0.2)');
    gradientStroke1.addColorStop(0.2, 'rgba(94, 114, 228, 0.0)');
    gradientStroke1.addColorStop(0, 'rgba(94, 114, 228, 0)');
    
    new Chart(ctx1, {
        //...
    });
  }
}