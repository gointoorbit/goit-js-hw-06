const inputSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const changeFontSize = (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;
};

inputSizeControl.addEventListener("input", changeFontSize);
