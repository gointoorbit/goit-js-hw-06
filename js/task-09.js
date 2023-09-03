function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const body = document.body;
const textColor = document.querySelector(".color");

const changeColor = (event) => {
  body.style.backgroundColor = getRandomHexColor();
  textColor.textContent = getRandomHexColor();
};

btnChangeColor.addEventListener("click", changeColor);
