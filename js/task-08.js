const loginForm = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert("All fields must be filled in");
  } else {
    const userData = {
      email: email.value,
      password: password.value,
    };
    console.log(userData);
  }

  loginForm.reset();
};

loginForm.addEventListener("submit", handleSubmit);
