function displayPerson(person) {
    document.getElementById('firstNameOutput').innerText = person.firstName;
    document.getElementById('middleNameOutput').innerText = person.middleName;
    document.getElementById('surnameOutput').innerText = person.surname;
    document.getElementById('genderOutput').innerText = person.gender;
    document.getElementById('commaOutput').innerText = ', ';
    document.getElementById('birthYearOutput').innerText = person.birthDate;
    document.getElementById('professionOutput').innerText = person.profession;
}

function clearPersonData() {
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('middleNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('commaOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
    document.getElementById('professionOutput').innerText = '';
}

function generateNewPerson() {
    const person = personGenerator.getPerson();
    displayPerson(person);
}

window.onload = function () {
    generateNewPerson();

    const cardBody = document.querySelector('.card-body');
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'mt-3';
    buttonContainer.innerHTML = `
        <button class="btn btn-primary mr-2" onclick="generateNewPerson()">Сгенерировать</button>
        <button class="btn btn-secondary" onclick="clearPersonData()">Очистить</button>
    `;
    cardBody.appendChild(buttonContainer);
};

