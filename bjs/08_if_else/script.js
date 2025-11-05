let minValue = parseInt(prompt('Минимальное знание числа для игры', '0')) || 0;
let maxValue = parseInt(prompt('Максимальное знание числа для игры', '100')) || 100;

minValue = minValue < -999 ? -999 : (minValue > 999 ? 999 : minValue);
maxValue = maxValue < -999 ? -999 : (maxValue > 999 ? 999 : maxValue);

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

function getRandomQuestionPhrase(number) {
    const random = Math.round(Math.random() * 2);
    const phrases = [
        `Да это легко! Ты загадал ${number}?`,
        `Наверное, это число ${number}?`,
        `Вы загадали число ${number}?`
    ];
    return phrases[random];
}

function getRandomSuccessPhrase() {
    const random = Math.round(Math.random() * 2);
    const phrases = [
        `Я всегда угадываю!\n\u{1F60E}`,
        `Это было несложно!\n\u{1F913}`,
        `Ура! Я угадал!\n\u{1F389}`
    ];
    return phrases[random];
}

function getRandomGiveUpPhrase() {
    const random = Math.round(Math.random() * 2);
    const phrases = [
        `Вы загадали неправильное число!\n\u{1F914}`,
        `Я сдаюсь..\n\u{1F92F}`,
        `Не могу угадать! Возможно, вы нарушили правила?\n\u{1F928}`
    ];
    return phrases[random];
}

orderNumberField.innerText = orderNumber;
answerField.innerText = getRandomQuestionPhrase(answerNumber);

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            answerField.innerText = getRandomGiveUpPhrase();
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = getRandomQuestionPhrase(answerNumber);
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        answerField.innerText = getRandomSuccessPhrase();
        gameRun = false;
    }
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            answerField.innerText = getRandomGiveUpPhrase();
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = getRandomQuestionPhrase(answerNumber);
        }
    }
})

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное значение числа для игры', '0')) || 0;
    maxValue = parseInt(prompt('Максимальное значение числа для игры', '100')) || 100;

    minValue = minValue < -999 ? -999 : (minValue > 999 ? 999 : minValue);
    maxValue = maxValue < -999 ? -999 : (maxValue > 999 ? 999 : maxValue);

    orderNumber = 1;
    answerNumber = Math.floor((minValue + maxValue) / 2);
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = getRandomQuestionPhrase(answerNumber);
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
})