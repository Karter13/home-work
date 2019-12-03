
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
  const applesCount = parseInt(prompt('Сколько яблок?'), 10);
  if (applesCount) {
    alert(`У вас ${applesCount} ${getNumWord(applesCount,
      'яблоко', 'яблока', 'яблок')}`);
  }
}

makeTest();


function isPolindrom1(str) {
  const arr = str.split('');
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.unshift(arr[i]);
  }

  const result = newArr.join('');

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

// Fixed bug
function getMultiplyTable() {
  const { body } = document;
  const table = document.createElement('table');
  let tr; let td;
  table.style.width = '100%';
  table.setAttribute('border', '1');

  for (let i = 1; i <= 10; i++) {
    if (i === 1 || i === 6) {
      tr = document.createElement('tr');
    }
    td = document.createElement('td');
    for (let j = 1; j <= 10; j++) {
      td.innerHTML += `<div style="padding: 5px">${i} * ${j} = ${i * j}</div>`;
    }
    tr.append(td);
    if (i === 5 || i === 10) {
      table.append(tr);
    }
  }

  body.append(table);
}

getMultiplyTable();
