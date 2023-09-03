let counterValue = 0;
const currentValue = document.querySelector("#value");
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

const decrement = (event) => {
  counterValue = counterValue -= 1;
  currentValue.textContent = counterValue;
};

const increment = (event) => {
  counterValue = counterValue += 1;
  currentValue.textContent = counterValue;
};

btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);
