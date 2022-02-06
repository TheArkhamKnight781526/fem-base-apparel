const signup = document.querySelector("#signup");
const email = document.querySelector("#email");
const submit = document.querySelector("#submit");

const emailRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

submit.addEventListener("click", () => {
  if (emailRegex.test(email.value)) {
    signup.classList.value = "";
    return;
  }
  signup.classList.value = "error";
});
