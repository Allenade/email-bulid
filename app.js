const form = document.querySelector("#form");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const button = document.querySelector("button");
const input = document.getElementsByTagName("input");
const errorText = document.querySelectorAll(".error-text");
const time = document.querySelector(".time");
const text = document.querySelector(".text");

// timer
let timeSecond = 10;
time.innerHTML = `00.${timeSecond}`;
const countDown = setInterval(() => {
  timeSecond--;
  time.innerHTML = `00.${timeSecond}`;

  if (timeSecond < 1) {
    endTime();
    clearInterval(countDown);
  }
}, 1000);

function endTime() {
  text.innerHTML = "$20 monthly";
  time.style.display = "none";
}

function formValidation(event) {
  for (let i = 0; i < input.length; i++) {
    // clear form
    errorText[i].style.display = "none";

    // if (firstName.value == "") {
    //   errorText[0].style.display = "block";
    //   event.preventDefault();
    // }
    if (input[i].value == "") {
      // validate inputs

      input[i].style.borderColor = "hsl(0, 100%, 74%)";
      // input[i].classList.add("error");
      errorText[i].style.display = "block";
      errorText[i].style.color = "hsl(0, 100%, 74%)";

      event.preventDefault();
    }
  }
}
form.addEventListener("submit", formValidation, false);
