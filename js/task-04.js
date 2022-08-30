/*Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать 
и уменьшать его значение на единицу.


Создай переменную counterValue в которой будет храниться текущее значение счетчика 
и инициализируй её значением 0.
Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение 
счтетчика.
Обновляй интерфейс новым значением переменной counterValue.*/

let counterValue = 0;

const wrap_button = {
  sub: document.querySelector("[data-action='increment']"),
  add: document.querySelector("[data-action='decrement']"),
  valueContainer: document.querySelector("#value"),
};

wrap_button.sub.addEventListener("click", () => {
  wrap_button["valueContainer"].textContent = ++counterValue;
});

wrap_button.add.addEventListener("click", () => {
  wrap_button["valueContainer"].textContent = --counterValue;
});
