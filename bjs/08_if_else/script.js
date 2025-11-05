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

function numberToText(number) {
    const units = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    const teens = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    const tens = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    const hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

    if (number === 0) return 'ноль';
    if (number < 0) return 'минус ' + numberToText(-number);

    let result = '';

    if (number >= 100) {
        result += hundreds[Math.floor(number / 100)] + ' ';
        number %= 100;
    }

    if (number >= 20) {
        result += tens[Math.floor(number / 10)] + ' ';
        number %= 10;
    } else if (number >= 10) {
        result += teens[number - 10] + ' ';
        number = 0;
    }

    if (number > 0) {
        result += units[number] + ' ';
    }

    return result.trim();
}

function formatNumber(number) {
    const textForm = numberToText(number);
    return textForm.length < 20 ? textForm : number.toString();
}

function getRandomQuestionPhrase(number) {
    const random = Math.round(Math.random() * 2);
    const formattedNumber = formatNumber(number);
    const phrases = [
        `Да это легко! Ты загадал ${formattedNumber}?`,
        `Наверное, это число ${formattedNumber}?`,
        `Вы загадали число ${formattedNumber}?`
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