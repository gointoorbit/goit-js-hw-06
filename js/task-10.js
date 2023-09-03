function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxesList = document.querySelector("#boxes");

function createBoxes(amount) {
  destroyBoxes();

  const boxes = [];
  let boxWidth = 20;

  for (let i = 1; i <= amount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    boxWidth = boxWidth + 10;
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${boxWidth}px`;
    box.style.height = box.style.width;
    boxes.push(box);
  }
  boxesList.append(...boxes);
}

btnCreate.addEventListener("click", () => {
  createBoxes(input.value);
});

function destroyBoxes() {
  boxesList.innerHTML = "";
}

btnDestroy.addEventListener("click", () => {
  destroyBoxes();
});
