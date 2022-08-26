/* 
!Напиши скрипт управления формой логина.

*1.Обработка отправки формы form.login-form должна быть по событию submit.
*2.При отправке формы страница не должна перезагружаться.
*Если в форме есть незаполненные поля, выводи alert с предупреждением о том,
*что все поля должны быть заполнены.
*3.Если пользователь заполнил все поля и отправил форму, собери значения полей 
*в обьект, где имя поля будет именем свойства, а значение поля - значением свойства.
*Для доступа к элементам формы используй свойство elements.
*4.Выведи обьект с введенными данными в консоль и очисти значения полей формы 
*методом reset.*/

const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  const elements = {
    email: email.value,
    password: password.value,
  };

  if (elements.email === "" || elements.password === "") {
    return alert("All fields should be filled!");
  }

  console.log(elements);
  event.currentTarget.reset();
}
