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
        return new Promise((resolve, reject) => {

            intervalId = setInterval(() => {

                if (count === 0) {
                    clearInterval(intervalId);
                    resolve(runTimer);
                }
                if (count <= 0) {
                    clearInterval(intervalId);
                    reject('Error');
                }

                elem.innerHTML = ` ${text} ${count}`;
                count -= 1;

            }, 1000);

        });

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
    timer1.showMessage()
        .then((data) => data())
        .finally(console.log('Timer started'));
});

resultBtn.addEventListener('click', showResult);