const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
let userName;

const outputUserName = (event) => {
  userName = event.currentTarget.value;
  if (userName) {
    output.textContent = userName;
  } else {
    output.textContent = "Anonymous";
  }
};
input.addEventListener("input", outputUserName);
