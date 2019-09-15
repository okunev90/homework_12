/*----------------Task 1-----------------*/

/*
Создать конструктор для производства автомобилей. Конструктор должен принимать марку автомобиля и возраст машины. Конструктор должен иметь метод, который возвращает марку, и
второй метод, который возвращает год производства машины (год текущий минус возраст машины, использовать Date для получения текущего года)
var lexus = new Car(‘lexus’, 2);
lexus.получитьМарку(); // “Lexus”
lexus.получитьГодВыпуска(); // 2017 (2019-2);
Марка машины всегда должна возвращаться с большой буквы!
*/

function Car(mark, year) {
    this.getMark = function () {
        return mark.charAt(0).toUpperCase() + mark.slice(1);
    };
    this.getYear = function () {
        const nowYear = new Date().getFullYear();
        return nowYear - year;
    };
}

var lexus = new Car('lexus', 2);
lexus.getMark(); // “Lexus”
lexus.getYear(); // 2017 (2019-2);

/*----------------Task 2-----------------*/

/*Написать конструктор, который умеет элементарно шифровать строки (например, сделать из строки строку-перевертыш, или заменить все символы их цифровым представлением, или любой другой метод). Конструктор при инициализации получает строку и имеет следующие методы:
a. показать оригинальную строку
b. показать зашифрованную строку
Строки не должны быть доступны через this, только с помощью методов.*/


class MethodString {
    constructor(string) {
        this.string = string
    }

    originalString = function () {
        return this.string
    };

    reverseString = function () {
        return this.string.split('').reverse().join('')
    };

    digitalPresentString = function () {
        let newStr = '';
        for (let i = 0; this.string.length > i; i++) {
            newStr += this.string.charCodeAt(i) + ' ';
        }
        return newStr;
    }
}

let actionString = new MethodString('javascript');
actionString.originalString();
actionString.reverseString();
actionString.digitalPresentString();

/*----------------Task 3-----------------*/

/*Реализовать конструктор в ES6 синтаксисе (также используйте аргументы по умолчанию):

function Component(tagName) {
    this.tagName = tagName || 'div';
    this.node = document.createElement(tagName);
}

Пример вызова:

    const comp = new Component('span');*/

class CreateElement {
    constructor(tagName = 'p') {
        this.tagName = tagName || 'div';
        this.node = document.createElement(tagName);
    }
}

const comp = new CreateElement('span');

/*----------------Task 4-----------------*/

/*Реализовать конструктор и методы в ES6 синтаксисе:

    function Component(tagName) {
        this.tagName = tagName || 'div';
        this.node = document.createElement(tagName);
    }

Component.prototype.setText = function (text) {
    this.node.textContent = text;
};*/

class NewComponent {
    constructor(tagName) {
        this.tagName = tagName || 'div';
        this.node = document.createElement(tagName);
    }

    setText(text) {
        return this.node.textContent = text
    }
}

const createEx = new NewComponent('span');
createEx.setText('text');

/*----------------Task 5-----------------*/

/*
Создать класс калькулятора который будет принимать стартовое значение и у него будут методы сложить,
вычесть, умножить , разделить. Также у него должны быть геттер и сеттер для получения и установки
текущего числа с которым производятся вычисления.
*/

class Calculator {
    constructor(value) {
        if (typeof value === 'number') {
            this.value = value || 2;
        } else {
            alert('Ваше значение не является числом')
        }
    }

    addition(number) {
        if (typeof number === 'number') {
            return this.value + number;
        } else {
            alert('Ваше значение пустое или не является числом')
        }
    }

    get subtraction() {
        return 'Текущее число ' + this.number
    }

    set subtraction(number) {
        if (typeof number === 'number') {
            this.number = this.value - number;
        } else {
            alert('Ваше значение не является числом')
        }
    }

    multiplication(number) {
        if (typeof number === 'number') {
            return this.value * number;
        } else {
            alert('Ваше значение пустое или не является числом')
        }
    }

    separation(number) {
        if (typeof number === 'number') {
            return this.value / number;
        } else {
            alert('Ваше значение пустое или не является числом')
        }
    }
}

const calc = new Calculator(8);
calc.addition(3);
calc.subtraction = 25;
calc.multiplication(8);
calc.separation(25);

/*----------------Task 6-----------------*/

/*Есть класс Planet
function Planet(name) {
    this.name = name;
    this.getName = function () {
        return 'Planet name is ' + this.name;
    }
}
Создать наследника от Planet, который будет называться PlanetWithSatellite и будет
принимать, кроме name, название спутника (satelliteName). Переопределите метод
getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +
дополнительный текст 'The satellite is' + satelliteName.
    Например:
var earth = new PlanetWithSatellite('earth', 'moon');
earth.getName(); // 'Planet name is earth. The satellite is moon’*/

function Planet(name) {
    this.name = name;
    this.getName = function () {
        return 'Planet name is ' + this.name;
    };
}

function PlanetWithSatellite(name, satelliteName) {
    Planet.apply(this, arguments);
    let parentGetName = this.getName;
    this.sattelite = function () {
        return 'Planet name is ' + satelliteName;
    };
    this.getName = function () {
        return `${parentGetName.call(this)} \n${this.sattelite()}`
    };

}

var earth = new PlanetWithSatellite('earth', 'moon');
earth.getName();

/*----------------Task 7-----------------*/

/*2. Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество этажей” и метод “установить количество этажей”).
Создайте наследников этого класса:
    классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование

У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}

У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
От каждого класса создать экземпляр (дом, торговый центр)*/

function Building(name, floors) {
    this.name = name;
    this.floors = floors;


    this.getFloors = function () {
        return this.floors
    };

    this.setFloors = function (value) {
        this.floors = value;
        return this.floors
    };
}

function House(name, floors, flats) {
    Building.apply(this, arguments);
    let floorsQuantity = this.getFloors;
    this.getFloors = function () {
        return {
            floors: floorsQuantity.call(this),
            totalFlats: function () {
                return this.floors * flats
            }
        }
    }
}

function shoppingCenter(name, floors, shops) {
    Building.apply(this, arguments);
    let floorsQuantity = this.getFloors;
    this.getFloors = function () {
        return {
            floors: floorsQuantity.call(this),
            totalShops: function () {
                return this.floors * shops
            }
        }
    }
}


let houseBuilding = new House('Central', 25, 4);
let shoppingCenterBuilding = new shoppingCenter('TRC', 8, 10);


/*----------------Task 8-----------------*/

/*3. Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию”
(метод должен вывести имя и цену). Метод должен быть объявлен с помощью прототипов (Func.prototype...).
Создать два экземпляра класса “Мебель”: экземпляр “ОфиснаяМебель” и
“Мебель для дома”. Придумайте им по одному свойству, которые будут характерны только для этих
экземпляров (например, для офисной мебели - наличие компьютерного стола или шредера). Метод “получить информацию”
должен учитывать и добавленное вами новое свойство.
    Задача на переопределение метода у экземпляров класса.*/


class Furniture {
    constructor(name, price) {
        this.name = name;
        this.price = price
    }
}

Furniture.prototype.getInfo = function () {
    return `Наименование: ${this.name}, цена: ${this.price}`;
};

const newOfficeFurniture = new Furniture('Стол', 250);
newOfficeFurniture.getInfo = function () {
    this.chair = true;
    const defaultChar = Furniture.prototype.getInfo.call(this);
    return `${defaultChar}, стул: ${this.chair}`;
};

const newHouseFurniture = new Furniture('Диван', 290);
newHouseFurniture.getInfo = function () {
    this.pedestal = 'В комплекте';
    const defaultChar = Furniture.prototype.getInfo.call(this);
    return `${defaultChar}, тумба: ${this.pedestal}`;
};


/*----------------Task 9-----------------*/

/*
4. Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” и методом “получить информацию”
(метод должен вывести имя и дату регистрации). Метод должен быть объявлен с помощью прототипов (Func.prototype...)
Создать два наследника класса “Пользователь”: класс “Админ” и класс “Гость”.
У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть
true/false, должно быть скрытым). Свойства определяются в момент вызова
конструктора. У класса “Гость” должно быть свойство “срокДействия” (validDate, например), содержащее дату
(например, одну неделю от момента регистрации).
У классов-наследников метод “получить информацию” должен так же содержать информацию о дополнительных свойствах
(“суперАдмин” и “срокДействия”)
*/
class User {
    constructor(name, dateRegistration) {
        this.name = name;
        this.dateRegistration = dateRegistration
    }
}

User.prototype.getInfo = function () {
    return `Имя: ${this.name}, дата регистрации: ${this.dateRegistration}`;
};


class Admin extends User {
    constructor(name, dateRegistration) {
        super(name, dateRegistration);
        this._superuser = true;
    }

    getInfo() {
        return `${super.getInfo()}, superuser: ${this._superuser}`;
    };
}

class Guest extends User {
    constructor(name, dateRegistration) {
        super(name, dateRegistration);
        this._validDate = '7 days';
    }

    getInfo() {
        return `${super.getInfo()}, срок действия: ${this._validDate}`;
    };
}

const adminUser = new Admin('Иван', '10.09.19');
adminUser.getInfo();

const guestUser = new Guest('Иван', '10.09.19');
guestUser.getInfo();
