// chart 1
if (document.querySelector("#chart-bars")) {
    let ctx: CanvasRenderingContext2D = (<HTMLCanvasElement>document.getElementById("chart-bars")).getContext("2d");
  
    new Chart(ctx, {
        type: "bar",
        ...
        // Rest of the code remains the same
    });
}

// chart 2
if(document.querySelector("#chart-line")){
  let ctx1: CanvasRenderingContext2D = (<HTMLCanvasElement>document.getElementById("chart-line")).getContext("2d");

  let gradientStroke1 = ctx1.createLinearGradient(0, 230, 0, 50);
  ...
  // Rest of the code remains the same
    });
}