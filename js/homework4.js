moment.locale('ru');

const timer = document.querySelector('#timer');

function calculateDifferenceTime() {
  const dayNow = moment();
  const dayEnd = moment().endOf('day');
  const difference = dayEnd.diff(dayNow, 's');

  timer.innerHTML = `до конца дня осталось ${difference} секунд`;
}

calculateDifferenceTime();
setInterval(calculateDifferenceTime, 1000);

const DayForBirthday = (function () {
  const input = document.getElementById('birthday-date');
  const daysToBirthday = document.getElementById('days-tobirthday');
  const button = document.getElementById('show-days');

  function showHours(thisYear) {
    const nextYear = thisYear + 1;
    const dateBirth = input.value;
    const dayNow = moment();
    let dayBirthday = moment(dateBirth).year(thisYear);

    if (dayNow > dayBirthday) {
      dayBirthday = moment(dateBirth).year(nextYear);
    }

    const difference = dayBirthday.diff(dayNow, 'd');
    daysToBirthday.innerHTML = difference;
  }

  button.addEventListener('click', () => {
    showHours(2019);
  });
}());


function cleanString(newString) {
  let str = newString;

  const cenzrBlock = {
    конь: '*****',
    столб: '*****',
  };

  for (const key in cenzrBlock) {
    str = str.split(key).join(cenzrBlock[key]);
  }
  return str;
}
console.log(cleanString('Моя мама мыла столб, на улице стоит конь'));


const Users = [
  { id: '3', name: 'Alex', dob: '1999-01-24' },
  { id: '1', name: 'Maikl', dob: '1975-10-07' },
  { id: '2', name: 'anna', dob: '1977-06-09' },
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

  function sortAsc(a, b) {
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
  }
  function sorDesc(a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
  }

  function sortString(param1, param3) {
    if (param3 === 'asc') {
      return param1.sort(sortAsc);
    }
    if (param3 === 'desc') {
      return param1.sort(sorDesc);
    }
    return false;
  }

  function sortDate(param1, param3) {
    if (param3 === 'asc') {
      return param1.sort((a, b) => new Date(a.dob) - new Date(b.dob));
    }
    if (param3 === 'desc') {
      return param1.sort((a, b) => new Date(b.dob) - new Date(a.dob));
    }
    return false;
  }

  function chengeArray(param1, param2, param3) {
    if (param2 === 'id') {
      return sortNumber(param1, param3);
    }
    if (param2 === 'name') {
      return sortString(param1, param3);
    }
    if (param2 === 'dob') {
      return sortDate(param1, param3);
    }
    return false;
  }

  return {
    users(param1, param2, param3) {
      return chengeArray(param1, param2, param3);
    },
  };
}());
console.log(UsersSort.users(Users, 'name', 'asc'));
