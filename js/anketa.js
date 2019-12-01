
let userSurname = prompt('Ваше фамилия?', ''),
  userName = prompt('Ваше имя?', ''),
  userPatronymic = prompt('Ваше отчество?', ''),
  userAge = +prompt('Сколько Вам полных лет?', ''),
  userSex = confirm('Ваш пол мужской?'),
  userSexRezalt = (userSex) ? 'мужской' : 'женский',
  pensionAnswer;

while (userSurname.length < 2 ||
  userSurname.length > 25 ||
  userSurname === '' ||
  userSurname === null) {
  userSurname = prompt('Ваше фамилия?', '');
}

while (userName.length < 2 ||
  userName.length > 25 ||
  userName === '' ||
  userSurname === null) {
  userName = prompt('Ваше имя?', '');
}

while (userPatronymic.length < 2 ||
  userPatronymic.length > 25 ||
  userPatronymic === '' ||
  userSurname === null) {
  userPatronymic = prompt('Ваше отчество?', '');
}

while (isNaN(userAge) ||
  userAge == '' ||
  userAge === null ||
  userAge < 0 ||
  userAge > 100) {
  userAge = +prompt('Сколько Вам полных лет?', '');
}

if (userAge >= 63) {
  pensionAnswer = 'Да';
} else {
  pensionAnswer = 'Нет';
}

alert(`ваше ФИО: ${userSurname} ${userName} ${userPatronymic} 
ваш возраст в годах: ${userAge}
ваш возраст в днях: ${ 365 * userAge}
через 5 лет вам будет: ${userAge + 5}
ваш пол: ${userSexRezalt}
вы на пенсии: ${pensionAnswer}`);