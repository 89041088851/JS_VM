// 1 Переменные
// const firstName = 'Bogdan'
// const age = 27 // number
// const isProgrammer = true // boolean

// const _ = 'private'
// const $ = 'some value'

//const if = 'mkef' // error

// const withNum5 = '5'
// const 5withNum // error

// 2 Мутирование
// console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)
// alert('Имя человека: ' + firstName + ', а возраст человека: ' + age)

// const lastName = prompt('Введите фомилию')
// alert(firstName + ' ' + lastName)

// Операторы
// let currentYear = 2021
// const birthYear = 1994

// const age = currentYear - birthYear
// const a = 10
// const b = 5

// let c = 32
// c = c + a
// c = c - a
// c = c * a
// c = c / a
// c += a
// c -= a
// c *= a
// c /= a

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c)


// 4 Типы данных
// const isProgrammer = true
// const name = 'Bogdan'
// const age = 27
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// Приоритет операторов
// const fullAge = 27
// const birthYear = 1994
// const currentYear = 2021

// >, <, >=, <=, !=, ==, ===
// const isFullAge = currentYear - birthYear >= fullAge
// console.log(isFullAge)

// 6 Условные операторы
// const courseStatus = 'ready' // ready, fail, pending

// if (courseStatus === 'ready') {
//   console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//   console.log('Курс в процессе разработки')
// } else {
//   console.log('Курс оборвался')
// }

// const isReady = true

// if (isReady === true) {
//   console.log('Все готово')
// } else {
//   console.log('Не готово')
// }

// Тернарное выражение
// isReady ? console.log('Все готово!') : console.log('Не готово')

// const num1 = 42 // number
// const num2 ='42' // string

// console.log(num1 == num2) // true
// console.log(num1 === num2) // false

// Булевая логика

// 8 Функции

// function calculateAge (year) {
//   return 2021 - year
// }

// console.log(calculateAge(1994))

// const myAge = calculateAge(1994)
// console.log(myAge)

// function logInfoAbout (name, year) {
//   const age = calculateAge(year)

//   if (age > 0) {
//     console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//   } else {
//     console.log('Вообще-то это уже будущее!')
//   }

// }

// logInfoAbout('Богдан', 1994)
// logInfoAbout('Ева', 2022)

// 9 Массивы
// const cars = new Array('Mazda', 'Mercedes', 'Ford')
// const cars = ['Mazda', 'Mercedes', 'Ford']
// console.log(cars)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])
// console.log(cars.length)

// cars[0] = 'Porsche'
// cars[cars.length] = 'Mazda'
// console.log(cars)

// 10 Циклы
// const cars = ['Mazda', 'Mercedes', 'Ford', 'Porsche']

// for (let i = 0; i < cars.length; i++) {
//   const car = cars[i]
//   console.log(car)
// }

// for (let car of cars) {
//   console.log(car)
// }

// 11 Объекты
const person = {
  firstName: 'Bogdan',
  lastName: 'Kosnyrev',
  year: 1994,
  languages: ['Ru', 'En'],
  hasWife: false,
  greet: function() {
    console.log('greet from person')
  }
}

console.log(person.firstName)
console.log(person['lastName'])
const key = 'year'
console.log(person[key])
person.hasWife = true
console.log(person)
person.isProgrammer = true
console.log(person)

person.greet()


