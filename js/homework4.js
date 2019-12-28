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
