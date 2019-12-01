
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