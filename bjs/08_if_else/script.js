let minValue = 0;
let maxValue = 100;
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = false;

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

document.getElementById('startGame').addEventListener('click', function () {
    console.log('Кнопка "Начать игру" нажата!');

    minValue = parseInt(document.getElementById('minInput').value) || 0;
    maxValue = parseInt(document.getElementById('maxInput').value) || 100;

    minValue = minValue < -999 ? -999 : (minValue > 999 ? 999 : minValue);
    maxValue = maxValue < -999 ? -999 : (maxValue > 999 ? 999 : maxValue);

    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;

    orderNumberField.innerText = orderNumber;
    answerField.innerText = getRandomQuestionPhrase(answerNumber);

    document.getElementById('settingsBlock').classList.add('d-none');
    document.getElementById('gameBlock').classList.remove('collapse');
});

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

    document.getElementById('gameBlock').classList.add('collapse');
    document.getElementById('settingsBlock').classList.remove('d-none');

    document.getElementById('minInput').value = '0';
    document.getElementById('maxInput').value = '100';
})