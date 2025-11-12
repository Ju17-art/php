const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семенов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Мария",
            "id_3": "Анна",
            "id_4": "Елена",
            "id_5": "Ольга",
            "id_6": "Наталья",
            "id_7": "Ирина",
            "id_8": "Светлана",
            "id_9": "Татьяна",
            "id_10": "Екатерина"
        }
    }`,

    middleNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Максимович", 
            "id_3": "Иванович",
            "id_4": "Артемович",
            "id_5": "Дмитриевич",
            "id_6": "Никитич",
            "id_7": "Михайлович",
            "id_8": "Даниилович",
            "id_9": "Егорович",
            "id_10": "Андреевич"
        }
    }`,

    middleNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александровна",
            "id_2": "Максимовна",
            "id_3": "Ивановна", 
            "id_4": "Артемовна",
            "id_5": "Дмитриевна",
            "id_6": "Никитична",
            "id_7": "Михайловна",
            "id_8": "Данииловна",
            "id_9": "Егоровна",
            "id_10": "Андреевна"
        }
    }`,

    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Слесарь",
            "id_2": "Пожарный", 
            "id_3": "Шахтер",
            "id_4": "Строитель",
            "id_5": "Водитель",
            "id_6": "Врач",
            "id_7": "Учитель",
            "id_8": "Инженер",
            "id_9": "Программист", 
            "id_10": "Архитектор"
        }
    }`,

    professionFemaleJson: `{
        "count": 10, 
        "list": {     
            "id_1": "Воспитатель",
            "id_2": "Швея",
            "id_3": "Парикмахер",
            "id_4": "Медсестра",
            "id_5": "Стилист",
            "id_6": "Врач",
            "id_7": "Учитель",
            "id_8": "Бухгалтер",
            "id_9": "Дизайнер",
            "id_10": "Экономист"
        }
    }`,

    monthsDataJson: `{
    "count": 12,
    "list": {     
        "id_1": {"name": "января", "days": 31},
        "id_2": {"name": "февраля", "days": 28},
        "id_3": {"name": "марта", "days": 31},
        "id_4": {"name": "апреля", "days": 30},
        "id_5": {"name": "мая", "days": 31},
        "id_6": {"name": "июня", "days": 30},
        "id_7": {"name": "июля", "days": 31},
        "id_8": {"name": "августа", "days": 31},
        "id_9": {"name": "сентября", "days": 30},
        "id_10": {"name": "октября", "days": 31},
        "id_11": {"name": "ноября", "days": 30},
        "id_12": {"name": "декабря", "days": 31}
    }
}`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function () {
        return this.randomIntNumber(1, 0) === 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomFirstName: function (gender) {
        if (gender === this.GENDER_FEMALE) {
            return this.randomValue(this.firstNameFemaleJson);
        } else {
            return this.randomValue(this.firstNameMaleJson);
        }
    },

    randomMiddleName: function (gender) {
        if (gender === this.GENDER_FEMALE) {
            return this.randomValue(this.middleNameFemaleJson);
        }
        return this.randomValue(this.middleNameMaleJson);
    },

    randomSurname: function (gender) {
        const maleSurname = this.randomValue(this.surnameJson);
        if (gender === this.GENDER_FEMALE) {
            return maleSurname + 'а';
        } else {
            return maleSurname;
        }
    },

    randomBirthYear: function () {
        return this.randomIntNumber(2000, 1970);
    },

    randomBirthDate: function () {
        const year = this.randomBirthYear();
        const monthData = this.randomValue(this.monthsDataJson);
        const day = this.randomIntNumber(1, monthData.days);
        return `${day} ${monthData.name} ${year} года рождения`;
    },

    randomProfession: function (gender) {
        if (gender === this.GENDER_FEMALE) {
            return this.randomValue(this.professionFemaleJson);
        } else {
            return this.randomValue(this.professionMaleJson);
        }
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.middleName = this.randomMiddleName(this.person.gender);
        this.person.surname = this.randomSurname(this.person.gender);
        this.person.birthYear = this.randomBirthYear();
        this.person.birthDate = this.randomBirthDate();
        this.person.profession = this.randomProfession(this.person.gender);
        return this.person;
    }
};