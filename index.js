const colors = [
 '#FFFFFF',
 '#2196F3',
 '#4CAF50',
 '#FF9800',
 '#009688',
 '#795548',
];

const refs = {
 body: document.querySelector('body'),
 startBtn: document.querySelector('[data-action="start"]'),
 stopBtn: document.querySelector('[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
 return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', onStartClick);
refs.stopBtn.addEventListener('click', onStopClick);

let intervalId = null;

function onStartClick(e) {
 e.target.disabled = true;
 intervalId = setInterval(changeBGColor, 1000);
}

function onStopClick() {
 clearInterval(intervalId);
 refs.startBtn.disabled = false;
}

function changeBGColor() {
 const randomColor = randomIntegerFromInterval(0, colors.length - 1);
 refs.body.style.backgroundColor = colors[randomColor];
}
