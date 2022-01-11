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
 clearBtn: document.querySelector('[data-action="clear"]'),
};

const randomIntegerFromInterval = (min, max) => {
 return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', onStartClick);
refs.stopBtn.addEventListener('click', onStopClick);
refs.clearBtn.addEventListener('click', onClearCklick);

let intervalId = null;

function onStartClick() {
 buttonsToggle(true, false);
 intervalId = setInterval(changeBgColor, 1000);
}

function onStopClick() {
 clearInterval(intervalId);
 buttonsToggle(false, true);
}

function onClearCklick() {
 refs.body.style.backgroundColor = '';
 clearInterval(intervalId);
 buttonsToggle(false, true);
}

function changeBgColor() {
 const randomColor = randomIntegerFromInterval(0, colors.length - 1);
 refs.body.style.backgroundColor = colors[randomColor];
}

function buttonsToggle(enable, disable) {
 refs.startBtn.disabled = enable;
 refs.stopBtn.disabled = disable;
}
