/*Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль 
при клике на button.change - color и выводит значение цвета в span.color.*/

const colorButton = {
  button: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
  body: document.querySelector("body"),
};
let colorValue = "";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

colorButton.button.addEventListener("click", (event) => {
  colorValue = getRandomHexColor();
  colorButton.span.textContent = colorValue;
  colorButton.body.style.backgroundColor = colorValue;
});
