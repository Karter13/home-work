// moment.locale('ru');

// const timer = document.querySelector('#timer');

// function calculateDifferenceTime() {
//   const dayNow = moment();
//   const dayEnd = moment().endOf('day');
//   const difference = dayEnd.diff(dayNow, 's');

//   timer.innerHTML = `до конца дня осталось ${difference} секунд`;
// }

// calculateDifferenceTime();
// setInterval(calculateDifferenceTime, 1000);

// const DayForBirthday = (function () {
//   const input = document.getElementById('birthday-date');
//   const daysToBirthday = document.getElementById('days-tobirthday');
//   const button = document.getElementById('show-days');

//   function showHours(thisYear) {
//     const nextYear = thisYear + 1;
//     const dateBirth = input.value;
//     const dayNow = moment();
//     let dayBirthday = moment(dateBirth).year(thisYear);

//     if (dayNow > dayBirthday) {
//       dayBirthday = moment(dateBirth).year(nextYear);
//     }

//     const difference = dayBirthday.diff(dayNow, 'd');
//     daysToBirthday.innerHTML = difference;
//   }

//   button.addEventListener('click', () => {
//     showHours(2019);
//   });
// }());


// function cleanString(newString) {
//   let str = newString;

//   const cenzrBlock = {
//     конь: '*****',
//     столб: '*****',
//   };

//   for (const key in cenzrBlock) {
//     str = str.split(key).join(cenzrBlock[key]);
//   }
//   return str;
// }
// console.log(cleanString('Моя мама мыла столб, на улице стоит конь'));


// const Users = [
//   { id: '3', name: 'Alex', dob: '1999-01-24' },
//   { id: '1', name: 'Maikl', dob: '1975-10-07' },
//   { id: '2', name: 'anna', dob: '1977-06-09' },
//   { id: '4', name: 'Masha', dob: '2004-10-11' },
// ];

// const UsersSort = (function () {
//   function sortNumber(param1, param3) {
//     if (param3 === 'asc') {
//       return param1.sort((a, b) => a.id - b.id);
//     }
//     if (param3 === 'desc') {
//       return param1.sort((a, b) => b.id - a.id);
//     }
//     return false;
//   }

//   function sortString(param1, param3) {
//     return param1.sort((a, b) => {
//       const aname = a.name.toLowerCase();
//       const bname = b.name.toLowerCase();
//       if (param3 === 'asc') {
//         if (aname > bname) return 1;
//         if (aname < bname) return -1;
//       } else {
//         if (aname < bname) return 1;
//         if (aname > bname) return -1;
//       }
//     });
//   }

//   function sortDate(param1, param3) {
//     return param1.sort((a, b) => {
//       const adate = new Date(a.dob);
//       const bdate = new Date(b.dob);
//       return (param3 === 'asc') ? adate - bdate : bdate - adate;
//     });
//   }

//   function chengeArray(param1, param2, param3) {
//     if (param2 === 'id') {
//       return sortNumber(param1, param3);
//     }
//     if (param2 === 'name') {
//       return sortString(param1, param3);
//     }
//     if (param2 === 'dob') {
//       return sortDate(param1, param3);
//     }
//     return false;
//   }

//   return {
//     users(param1, param2, param3) {
//       return chengeArray(param1, param2, param3);
//     },
//   };
// }());
// console.log(UsersSort.users(Users, 'name', 'asc'));

const Users = [
  { id: '3', name: 'Alex', dob: '1999-01-24' },
  { id: '1', name: 'Maikl', dob: '1975-10-07' },
  { id: '2', name: 'anna', dob: '1977-09-01' },
  { id: '4', name: 'Masha', dob: '2004-10-11' },
];

const UsersSort = (function () {
  function sortNumber(param1, param3) {
    if (param3 === 'asc') {
      return param1.sort((a, b) => a.id - b.id);
    }
    if (param3 === 'desc') {
      return param1.sort((a, b) => b.id - a.id);
    }
    return false;
  }

  function sortString(param1, param2, param3) {
    return param1.sort((a, b) => {
      const aparam = a[param2].toLowerCase();
      const bparam = b[param2].toLowerCase();
      if (param3 === 'asc') {
        if (aparam > bparam) return 1;
        if (aparam < bparam) return -1;
      } else {
        if (aparam < bparam) return 1;
        if (aparam > bparam) return -1;
      }
    });
  }

  function chengeArray(param1, param2, param3) {
    if (param2 === 'id') {
      return sortNumber(param1, param3);
    }
    if (param2 === 'name' || param2 === 'dob') {
      return sortString(param1, param2, param3);
    }
    return false;
  }

  return {
    users(param1, param2, param3) {
      return chengeArray(param1, param2, param3);
    },
  };
}());
console.log(UsersSort.users(Users, 'dob', 'desc'));
