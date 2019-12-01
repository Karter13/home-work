
function getNumWord(num, word1, word2, word5) {

  let result = '';

  switch (true) {
    case (num % 100) >= 11 && (num % 100) <= 19:
      result = word5;
      break;
    case (num % 10) === 1:
      result = word1;
      break;
    case (num % 10) >= 2 && (num % 10) <= 4:
      result = word2;
      break;
    default:
      result = word5;
      break;
  }

  return result;
}

function makeTest() {
  let applesCount = parseInt(prompt('Сколько яблок?'));
  if (applesCount) {
    alert('У вас ' + applesCount + ' ' + getNumWord(applesCount,
      'яблоко', 'яблока', 'яблок'));
  }
}

makeTest();


function isPolindrom1(str) {

  let arr = str.split('');
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.unshift(arr[i]);
  }

  let result = newArr.join('');

  return result === str;
}

console.log(isPolindrom1('55055'));


function isPolindrom2(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    result += str[str.length - 1 - i];
  }

  return result === str;
}

console.log(isPolindrom2('kkikikk'));


function isPolindrom3(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[str.length - 1 - i]) {
      result = 'yes';
    } else {
      result = 'no';
    }
  }

  return result;
}

console.log(isPolindrom3('12345'));