
function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(positiveSum([-1, -2, -3, -4, -5]));


function evenOrOdd(number) {
  if (number % 2 === 0) {
    return 'Even';
  }
  return 'Odd';
}

console.log(evenOrOdd(666));


function centuryFromYear(year) {
  const transmittedYear = year;

  return Math.ceil(transmittedYear / 100);
}

console.log(centuryFromYear(1765));


function arrayDiff(arr1, arr2) {
  const updatedArray = [];

  for (let i = 0; i < arr1.length; i++) {
    let found = false;

    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        found = true;
        break;
      }
    }

    if (!found) {
      updatedArray.push(arr1[i]);
    }
  }
  return updatedArray;
}

// eslint-disable-next-line max-len
// function arrayDiff(arr1, arr2) {
//   return arr1.filter((item) => !arr2.includes(item));
// }

console.log(arrayDiff([], [4, 5]));
console.log(arrayDiff([3, 4], [3, 3, 10, 5]));
console.log(arrayDiff([1, 8, 2], []));
