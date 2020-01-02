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
