let x = 0;
let y = 0;

document.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft")  y -= 10;
  if (e.key === "ArrowRight") y += 10;
  if (e.key === "ArrowUp")    x -= 10;
  if (e.key === "ArrowDown")  x += 10;

  document.querySelector(".cube").style.transform =
    `rotateX(${x}deg) rotateY(${y}deg)`;
});