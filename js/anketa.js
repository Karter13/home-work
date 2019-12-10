let userSurname = prompt('Ваша фамилия?', '');
let userName = prompt('Ваше имя?', '');
let userPatronymic = prompt('Ваше отчество?', '');
let userAge = +prompt('Сколько Вам полных лет?', '');
const userSex = confirm('Ваш пол мужской?');


function checkUserNames(value, message) {
  let result = value;
  while (result.length < 2
    || result.length > 25
    || result === null) {
    // eslint-disable-next-line no-alert
    result = prompt(message, '');
  }
  return result;
}
userSurname = checkUserNames(userSurname, 'Ваша фамилия?');
userName = checkUserNames(userName, 'Ваше имя?');
userPatronymic = checkUserNames(userPatronymic, 'Ваше отчество?');


function getFullUserAge(value, message) {
  let fullUserAge = value;
  while (isNaN(fullUserAge)
    || fullUserAge === ''
    || fullUserAge === null
    || fullUserAge < 0
    || fullUserAge > 100) {
    fullUserAge = +prompt(message);
  }
  return fullUserAge;
}
userAge = getFullUserAge(userAge, 'Сколько Вам полных лет?');


function getUserssex(value) {
  return (value) ? 'мужской' : 'женский';
}


function getAnswerAboutPension(age, sex) {
  // eslint-disable-next-line no-mixed-operators
  if (sex === 'мужской' && age >= 63 || sex === 'женский' && age >= 58) {
    return 'Да!';
  }
  return 'Нет!';
}

alert(`ваше ФИО: ${userSurname} ${userName} ${userPatronymic} 
ваш возраст в годах: ${userAge}
ваш возраст в днях: ${365 * userAge}
через 5 лет вам будет: ${userAge + 5}
ваш пол: ${getUserssex(userSex)}
вы на пенсии: ${getAnswerAboutPension(userAge, userSex)}`);
