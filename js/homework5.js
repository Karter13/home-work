function Timer(renderEl, limit) {
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

const timer = new Timer(timer1El, 60);
timer.start();

timerBtn.addEventListener('click', () => {
  timer.pause();
});


//heart rate measurement
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

function Timer(element, textMessage, number, timer) {
  const elem = element;
  let count = number;
  let text = textMessage;
  let intervalId = null;

  this.showMessage = function () {
    intervalId = setInterval(() => {
      if (count <= 0) {
        clearInterval(intervalId);
      }
      console.log(intervalId);
      elem.innerHTML = ` ${text} ${count}`;
      count -= 1;
    }, 1000);

  };

  this.showNextMessage = function () {
    setTimeout(() => {
      this.showMessage();
    }, timer);
  };
}

const timer1 = new Timer(message, dataForTimer.message1, dataForTimer.timer1);
const timer2 = new Timer(message, dataForTimer.message2, dataForTimer.timer2, '6000');

function showResult() {
  message.innerHTML = '';
  message.innerHTML = ` Ваш пульс ${+pulse.value * 4} ударов в минуту`;
}

startBtn.addEventListener('click', () => {
  pulse.value = '';
  timer1.showMessage();
  timer2.showNextMessage();
});

resultBtn.addEventListener('click', showResult);