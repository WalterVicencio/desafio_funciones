
const ele = document.getElementById("ele1")
let color = 'green'

pintar = (color) => ele.style.backgroundColor = color
pintar(color)
ele.addEventListener("click", () => ele.style.backgroundColor = 'yellow');

