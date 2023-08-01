const log = console.log;

const heading = document.querySelector(".headingContainer");
const advice = document.querySelector(".adviceContainer");
const button = document.querySelector("button");

let titleID = "###";
let titleContent = `"Error 404 Advice Not Found"`;

const url = "https://api.adviceslip.com/advice";

function getData() {
  fetch(url)
    .then((promise) => promise.json())
    .then((data) => {
      titleContent = data.slip.advice;
      titleID = data.slip.id;
      heading.textContent = `A D V I C E #${titleID}`;
      advice.textContent = `${titleContent}`;
    });
}

button.addEventListener("click", (ev) => {
  getData();
});
