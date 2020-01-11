function Timer1(renderEl, limit) {
  const el = renderEl;
  let value = limit;
  let isPause = false;
  let intervalId = null;

  // eslint-disable-next-line func-names
  this.start = function () {
    intervalId = setInterval(() => {
      if (value === 0) {
        clearInterval(intervalId);
      }
      el.innerHTML = value;
      value -= 1;
    }, 1000);
  };

  // eslint-disable-next-line func-names
  this.pause = function () {
    if (!isPause) {
      clearInterval(intervalId);
      isPause = true;
      return true;
    }
    this.start();
    isPause = false;
    return true;
  };
}

const timer1El = document.getElementById('timer');
const timerBtn = document.getElementById('pause');

const timerMinute = new Timer1(timer1El, 60);
timerMinute.start();

timerBtn.addEventListener('click', () => {
  timerMinute.pause();
});


// heart rate measurement
const message = document.getElementById('message');
const pulse = document.getElementById('number');
const startBtn = document.getElementById('start');
const resultBtn = document.getElementById('result');

const dataForTimer = {
  message1: 'Измерение начнется через',
  message2: 'Измерение...',
  timer1: 5,
  timer2: 15,
};

// eslint-disable-next-line no-shadow
function Timer2(element, textMessage, number, runTimer) {
  const elem = element;
  let count = number;
  const text = textMessage;
  let intervalId = null;

  this.showMessage = () => {
    intervalId = setInterval(() => {
      if (count <= 0) {
        clearInterval(intervalId);
        if (runTimer) {
          runTimer();
        }
      }
      elem.innerHTML = ` ${text} ${count}`;
      count -= 1;
    }, 1000);
  };
}

function showResult() {
  message.innerHTML = '';
  message.innerHTML = ` Ваш пульс ${+pulse.value * 4} ударов в минуту`;
}

function nextTimer() {
  const timer = new Timer2(message, dataForTimer.message2, dataForTimer.timer2);
  timer.showMessage();
}

startBtn.addEventListener('click', () => {
  const timer1 = new Timer2(message, dataForTimer.message1, dataForTimer.timer1, nextTimer);
  pulse.value = '';
  timer1.showMessage();
});

resultBtn.addEventListener('click', showResult);


// odd and even number generator
function isRandom() {
  const random = Math.floor(Math.random() * 100);
  try {
    if (random % 2 === 0) {
      throw new Error(`even number ${random}`);
    }
    console.log(`odd number ${random}`);
  } catch (e) {
    console.log(e);
  }
}
const intervalId = setInterval(() => {
  isRandom();
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 20000);
