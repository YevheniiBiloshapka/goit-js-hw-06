/*Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
	подставляет его текущее значение в span#name - output.Если инпут пустой, в спане 
	должна отображаться строка "Anonymous".*/

let nameInput = document.querySelector("#name-input");
nameInput.addEventListener("input", addNameForTitle);

const nameOutput = document.querySelector("#name-output");

function addNameForTitle(event) {
  nameOutput.textContent = nameInput.value;

  if (nameInput.value === "") {
    nameOutput.textContent = "Anonymous";
  }
}
