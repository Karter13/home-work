
let userSurname = prompt('Ваша фамилия?', '');
let userName = prompt('Ваше имя?', '');
let userPatronymic = prompt('Ваше отчество?', '');
let userAge = +prompt('Сколько Вам полных лет?', '');
const userSex = confirm('Ваш пол мужской?');
const userSexRezalt = (userSex) ? 'мужской' : 'женский';
const pensionAnswer = userAge >= 63 ? 'Да' : 'Нет';

function checkUserNames(value, message) {
  let result = value;
  while (result.length < 2
    || result.length > 25
    || result === null) {
    result = prompt(message, '');
  }
  return result;
}

userSurname = checkUserNames(userSurname, 'Ваша фамилия?');
userName = checkUserNames(userName, 'Ваше имя?');
userPatronymic = checkUserNames(userPatronymic, 'Ваше отчество?');

while (isNaN(userAge)
  || userAge === ''
  || userAge === null
  || userAge < 0
  || userAge > 100) {
  userAge = +prompt('Сколько Вам полных лет?', '');
}

alert(`ваше ФИО: ${userSurname} ${userName} ${userPatronymic} 
ваш возраст в годах: ${userAge}
ваш возраст в днях: ${365 * userAge}
через 5 лет вам будет: ${userAge + 5}
ваш пол: ${userSexRezalt}
вы на пенсии: ${pensionAnswer}`);
