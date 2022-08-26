/*Напиши скрипт, который реагирует на изменение значения input#font - size - control
	(событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
	В результате при перетаскивании ползунка будет меняться размер текста.*/
const fontSizeControl = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text");

fontSizeControl.addEventListener("input", (e) => {
  text.style.fontSize = `${e.target.value}px`;
});
