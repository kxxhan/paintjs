const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

// pixel modifier 실제 픽셀 설정
canvas.width = 700;
canvas.height = 700;
//context의 default 설정
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

// painting을 시작했을 때
function startPainting() {
  painting = true;
}

// painting을 멈췄을 때
function stopPainting() {
  painting = false;
}
// clinetX는 browser에서의 마우스 좌표, offsetX는 canvas위에서 마우스의 좌표
function onMouseMove(event) {
  // console.log(event)
  const x = event.offsetX
  const y = event.offsetY
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y); 
  } else {
    ctx.lineTo(x, y)
    ctx.stroke()
  }
  // console.log(x, y)
}

// 마우스를 클릭했을때
function onMouseDown(event) {
  // console.log(event)
  painting = true;
}

// 마우스 클릭이 끝났을때
function onMouseUp(event) {
  // console.log(event)
  console.log(ctx)
  stopPainting()
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove)
  canvas.addEventListener("mousedown", startPainting)
  canvas.addEventListener("mouseup", onMouseUp)
  canvas.addEventListener("mouseleave", stopPainting)
}