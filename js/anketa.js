
let userSurname = prompt('Ваше фамилия?', '');
let userName = prompt('Ваше имя?', '');
let userPatronymic = prompt('Ваше отчество?', '');
let userAge = +prompt('Сколько Вам полных лет?', '');
const userSex = confirm('Ваш пол мужской?');
const userSexRezalt = (userSex) ? 'мужской' : 'женский';
let pensionAnswer;

while (userSurname.length < 2
  || userSurname.length > 25
  || userSurname === ''
  || userSurname === null) {
  userSurname = prompt('Ваше фамилия?', '');
}

while (userName.length < 2
  || userName.length > 25
  || userName === ''
  || userSurname === null) {
  userName = prompt('Ваше имя?', '');
}

while (userPatronymic.length < 2
  || userPatronymic.length > 25
  || userPatronymic === ''
  || userSurname === null) {
  userPatronymic = prompt('Ваше отчество?', '');
}

while (isNaN(userAge)
  || userAge === ''
  || userAge === null
  || userAge < 0
  || userAge > 100) {
  userAge = +prompt('Сколько Вам полных лет?', '');
}

if (userAge >= 63) {
  pensionAnswer = 'Да';
} else {
  pensionAnswer = 'Нет';
}

alert(`ваше ФИО: ${userSurname} ${userName} ${userPatronymic} 
ваш возраст в годах: ${userAge}
ваш возраст в днях: ${365 * userAge}
через 5 лет вам будет: ${userAge + 5}
ваш пол: ${userSexRezalt}
вы на пенсии: ${pensionAnswer}`);
