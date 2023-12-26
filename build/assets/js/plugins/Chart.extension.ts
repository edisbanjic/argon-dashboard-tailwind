The TypeScript version of the JavaScript code you provided will look pretty much the same. TypeScript is a superset of JavaScript that adds static types to the language. However, in this case, no types have been defined explicitly, it can be left as is with the extension .ts instead of .js for TypeScript. 

Chart.elements.Rectangle.prototype.draw = function () {
  let ctx = this._chart.ctx as CanvasRenderingContext2D;
  let vm: any = this._view;
  let left: number, right: number, top: number, bottom: number, signX: number, signY: number, borderSkipped: string | undefined, radius: number, nextCornerId: number, width: number, height: number, x: number, y: number, nextCorner: any;
  let borderWidth = vm.borderWidth;
  let cornerRadius = 6;

  if (!vm.horizontal) {
    left = vm.x - vm.width / 2;
    right = vm.x + vm.width / 2;
    top = vm.y;
    bottom = vm.base;
    signX = 1;
    signY = bottom > top ? 1 : -1;
    borderSkipped = vm.borderSkipped || "bottom";
  } else {
    left = vm.base;
    right = vm.x;
    top = vm.y - vm.height / 2;
    bottom = vm.y + vm.height / 2;
    signX = right > left ? 1 : -1;
    signY = 1;
    borderSkipped = vm.borderSkipped || "left";
  }

  if (borderWidth) {
    let barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
    borderWidth = borderWidth > barSize ? barSize : borderWidth;
    let halfStroke = borderWidth / 2;
    let borderLeft = left + (borderSkipped !== "left" ? halfStroke * signX : 0);
    let borderRight = right + (borderSkipped !== "right" ? -halfStroke * signX : 0);
    let borderTop = top + (borderSkipped !== "top" ? halfStroke * signY : 0);
    let borderBottom = bottom + (borderSkipped !== "bottom" ? -halfStroke * signY : 0);
    if (borderLeft !== borderRight) {
      top = borderTop;
      bottom = borderBottom;
    }
    if (borderTop !== borderBottom) {
      left = borderLeft;
      right = borderRight;
    }
  }

  ctx.beginPath();
  ctx.fillStyle = vm.backgroundColor;
  ctx.strokeStyle = vm.borderColor;
  ctx.lineWidth = borderWidth;

  let corners: number[][] = [
    [left, bottom],
    [left, top],
    [right, top],
    [right, bottom],
  ];

  let borders: string[] = ["bottom", "left", "top", "right"];
  let startCorner = borders.indexOf(borderSkipped, 0);
  if (startCorner === -1) {
    startCorner = 0;
  }

  function cornerAt(index: number) {
    return corners[(startCorner + index) % 4];
  }

  let corner = cornerAt(0);
  ctx.moveTo(corner[0], corner[1]);

  for (let i = 1; i < 4; i++) {
    corner = cornerAt(i);
    nextCornerId = i + 1;
    if (nextCornerId === 4) {
      nextCornerId = 0;
    }

    nextCorner = cornerAt(nextCornerId);

    width = corners[2][0] - corners[1][0];
    height = corners[0][1] - corners[1][1];
    x = corners[1][0];
    y = corners[1][1];

    let radius = cornerRadius;

    if (radius > height / 2) {
      radius = height / 2;
    }
    if (radius > width / 2) {
      radius = width / 2;
    }

    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
  }

  ctx.fill();
  if (borderWidth) {
    ctx.stroke();
  }
};