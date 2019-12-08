
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
    if (arr1.length === 0 || arr2.length === 0) {
      updatedArray.push(arr1[i]);
    }

    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        break;
      } else {
        updatedArray.push(arr1[i]);
        break;
      }
    }
  }
  return updatedArray;
}

console.log(arrayDiff([], [4, 5]));
console.log(arrayDiff([3, 4, 5], [3, 3, 4, 22]));
console.log(arrayDiff([1, 8, 2], []));
