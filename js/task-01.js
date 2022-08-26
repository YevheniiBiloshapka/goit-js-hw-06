// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

const totalCategories = document.getElementById("categories").children;
console.log("Количество категорий: ", totalCategories.length);

for (const category of totalCategories) {
  console.log(
    "Категория: ",
    category.firstElementChild.textContent,
    "\n",
    "Елементов: ",
    category.lastElementChild.childElementCount
  );
}
