const form = document.getElementById("form");

const input = document.getElementById("firstname");

const error = document.querySelector(".error");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(input.value);

  console.log("Submit");
});

input.addEventListener("input", (event) => {
  const firstName = event.target;

  console.log(firstName.value);

  if (firstName.value === "") {
    error.textContent = "First Name is required";
    firstName.style.border = "1px solid red";
  } else if (firstName.value.length < 3) {
    error.textContent = "First Name should be more than 2 characters";
    firstName.style.border = "1px solid red";
  } else {
    error.textContent = "";
    firstName.style.border = "1px solid green";
  }
});
