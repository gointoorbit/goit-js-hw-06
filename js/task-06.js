const input = document.querySelector("#validation-input");

const borderColor = (event) => {
  if (
    event.currentTarget.value.length ===
    Number.parseInt(input.getAttribute("data-length"))
  ) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
};

input.addEventListener("blur", borderColor);
