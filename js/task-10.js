/*
! Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит 
! количество элементов в input и нажимает кнопку Создать, после чего рендерится 
! коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает один параметр - число. 
Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
Все элементы должены иметь случайный цвет фона в формате HEX.Используй готовую 
функцию getRandomHexColor для получения цвета.

Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
тем самым удаляя все созданные элементы.*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = {
  input: document.querySelector("input"),
  create: document.querySelector("[data-create]"),
  destroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};
const { input, create, destroy, boxes } = controls;
let inputValue = 0;
let size = 30;
input.addEventListener("input", weGetNumberOfNewBoxes);
create.addEventListener("click", createNewBox);
destroy.addEventListener("click", clearAllBox);

function createNewBox(event) {
  const addedElements = [];
  for (let i = 0; i < inputValue; i++) {
    const newBox = document.createElement("div");
    newBox.style.height = `${size}px`;
    newBox.style.width = `${size}px`;
    newBox.style.background = getRandomHexColor();
    addedElements.push(newBox);
    size += 10;
  }
  return boxes.append(...addedElements);
}

function weGetNumberOfNewBoxes(event) {
  console.log(event.target.value);
  inputValue = Number(event.target.value);
}

function clearAllBox() {
  boxes.innerHTML = "";
}
