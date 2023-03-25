// const strings = ['My', 'name', 'is', 'John'];

// for (const string of strings) {
//     console.log(string)
// }

// break continue
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// Вивести числа з масиву, окрім 2, 4 індексу
// for (let i = 0; i < numbers.length; i++) {
//     if (i === 2 || i === 4) {
//         continue;
//     }
//
//     console.log(numbers[i]);
// }

// Вивести елементи масиву до 5 індексу
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// for (let i = 0; i < numbers.length; i++) {
//     if (i === 5) {
//         break;
//     }
//
//     console.log(numbers[i]);
// }
//
// console.log('End')

// increments and decrements
// let counter = 10;
// console.log(counter++) // 10
// console.log(++counter) // 12
// console.log(counter++) // 12
// console.log(++counter) // 14

// Практика
// Модуль 2. Заняття 3. Масиви

// Example 1 - Базові операції з масивом
// Створіть масив genres з елементами «Jazz» та «Blues».
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.
// const genres = ['Jazz', 'Blues'];
//
// genres.push('Rock-N-Roll');
//
// console.log(genres[genres.length - 1])
//
// console.log(genres.shift())
//
// genres.unshift('Country', 'Reggae');
//
// console.log(genres)





// Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються
//  у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.
//
// const values = '8 11';
//
// const splitResult = values.split(' ') // ['8', '11']
//
// const side1 = +splitResult[0]; // 8
// const side2 = +splitResult[1]; // 11
//
// const result = side1 * side2;
//
// console.log(result);





// Example 3 - Перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента масиву виведи в
//  консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів повинна починатися з 1.
//
// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
//
// let counter = 0;
//
// for (const fruit of fruits) {
//     console.log(++counter, fruit);
// }





// Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
//  У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами.
//  Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.
//
// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
//
// const namesArray = names.split(',');
// const phonesArray = phones.split(',');
//
// for (let i = 0; i < namesArray.length; i++) {
//     console.log(namesArray[i], phonesArray[i]);
// }



// Example 5 - Масиви та рядки
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього.
//  Результуючий рядок не повинен починатися або закінчуватися символ пробілу. Скрипт повинен працювати для будь-якого рядка.
//
// const string = 'Welcome to the future';
// const words = string.split(' ')
//
// for (let i = 0; i < words.length; i++) {
//     if (i === 0 || i === words.length - 1) {
//         continue;
//     }
//
//     console.log(words[i]);
// }



// Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить його в консоль.
//
// const string = 'Welcome to the future';
// const words = string.split('')
// const reversedArray = words.reverse();
// const result = reversedArray.join('')
// console.log(result)




// Example 7 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.
//
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];




// Example 8 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел.
//  Використовуй цикл для розв'язання задачі.
//
// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];

// for (const number of numbers) {
//     if (min > number) {
//         min = number;
//     }
// }

// console.log(min)

//                   ------ 2 2 2 2 2 2 2  2 2 2  2 2 2 2 2 2 -----



// const strings = ['My', 'name', 'is', 'John'];

// for (const string of strings) {
//     console.log(string)
// }

// break continue
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// Вивести числа з масиву, окрім 2, 4 індексу
// for (let i = 0; i < numbers.length; i++) {
//     if (i === 2 || i === 4) {
//         continue;
//     }
//
//     console.log(numbers[i]);
// }

// Вивести елементи масиву до 5 індексу
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// for (let i = 0; i < numbers.length; i++) {
//     if (i === 5) {
//         break;
//     }
//
//     console.log(numbers[i]);
// }
//
// console.log('End')

// increments and decrements
// let counter = 10;
// console.log(counter++) // 10
// console.log(++counter) // 12
// console.log(counter++) // 12
// console.log(++counter) // 14

// Практика
// Модуль 2. Заняття 3. Масиви

// Example 1 - Базові операції з масивом
// Створіть масив genres з елементами «Jazz» та «Blues».
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.
// const genres = ['Jazz', 'Blues'];
//
// genres.push('Rock-N-Roll');
//
// console.log(genres[genres.length - 1])
//
// console.log(genres.shift())
//
// genres.unshift('Country', 'Reggae');
//
// console.log(genres)








// Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються
//  у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.
//
// const values = '8 11';
//
// const splitResult = values.split(' ') // ['8', '11']
//
// const side1 = +splitResult[0]; // 8
// const side2 = +splitResult[1]; // 11
//
// const result = side1 * side2;
//
// console.log(result);





// Example 3 - Перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента масиву виведи 
// в консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів повинна починатися з 1.
//
// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
//
// let counter = 0;
//
// for (const fruit of fruits) {
//     console.log(++counter, fruit);
// }









// Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. 
// У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами. 
// Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.
//
// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
//
// const namesArray = names.split(',');
// const phonesArray = phones.split(',');
//
// for (let i = 0; i < namesArray.length; i++) {
//     console.log(namesArray[i], phonesArray[i]);
// }









// Example 5 - Масиви та рядки
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього.
//  Результуючий рядок не повинен починатися або закінчуватися символ пробілу. Скрипт повинен працювати для будь-якого рядка.
//
// const string = 'Welcome to the future';
// const words = string.split(' ')
//
// for (let i = 0; i < words.length; i++) {
//     if (i === 0 || i === words.length - 1) {
//         continue;
//     }
//
//     console.log(words[i]);
// }




// Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить його в консоль.
//
// const string = 'Welcome to the future';
// const words = string.split('')
// const reversedArray = words.reverse();
// const result = reversedArray.join('')
// console.log(result)




// Example 7 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.
//
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];






// Example 8 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. 
// Використовуй цикл для розв'язання задачі.
//
// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];

// for (const number of numbers) {
//     if (min > number) {
//         min = number;
//     }
// }

// console.log(min)


// SLUG ------------------
// function slugify(title) {
//   // Change code below this line
//   const slug = title.toLowerCase().split(" ").join("-");

//   return slug;
//   // Change code above this line
// }
// console.log(slugify("Arrays for begginers")); //arrays-for-begginers
// slugify("English for developer");
// slugify("Ten secrets of JavaScript");
// slugify("How to become a JUNIOR developer in TWO WEEKS");



// function calculateTotal(number) {
//   // Change code below this line
//    let sum = 0
//  for (let i = 1; i <= number; i+=1) { // Change this line
//    sum +=i;
//  }
 
//  return sum
//    // Change code above this line
//  }
//  calculateTotal(3);// 1+2+3=6



// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (let i = 0; i < order.length; i++) {
//   total += order[i]
// }
//   // Change code above this line
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]) // 138=12+85+37+4



// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов
//  разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// function findLongestWord(string) {
//   // Change code below this line
// let array1 = string.match(/\w[a-z]{0,}/gi);
// let result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++) {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     }
//   }
//   return result;
//   // Change code above this line
// }
// findLongestWord("Google do a roll");




// Дополни код функции createArrayOfNumbers(min, max) так,
// чтобы она возвращала массив всех целых чисел от значения min до max.


// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i++) {
//     if (min === 0) continue;
//     numbers.push(i)
//   }
//   // Change code above this line
//   return numbers;
// };
// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);



// Напиши функцию filterArray(numbers, value), которая принимает массив чисел
//  (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, 
// которые больше чем значение параметра value (число).

// function filterArray(numbers, value) {
//   // Change code below this line
// let newArray = [];
//  for (let i = 0; i < numbers.length; i++) {
//    if(numbers[i] > value){
//      newArray.push(numbers[i]);
//    }
//  // Change code above this line
// }
// return newArray
// }
//   console.log(filterArray([1, 2, 3, 4, 5], 3));




// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit),
//  и проверяет есть ли такой фрукт в массиве fruits.
// Дополни код функции так, что если:  фрукт есть в массиве, то функция возвращает true;
//                                     фрукта нет в массиве, то функция возвращает false.

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }
// console.log(checkFruit("Pear"))




// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к.
//  они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2,
//  и возвращает новый массив,
//  состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {

// const newArray = [];
//   for (let value of array1) {
//     if (array2.includes(value)) {
//       newArray.push(value);
//     }
//   }
// return newArray;
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));




// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и,
//  возможно, но необязательно, цикл for...of.


// function countProps(object) {
//   return Object.keys(object).length
// }
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 ,name: 'Victor'}));



// Запиши в переменную keys массив ключей собственных свойств объекта apartment, 
// а в переменную values массив всех значений его свойств.
// Используй методы Object.keys() и Object.values().

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
//   const keys = Object.keys(apartment);
//   console.log(keys)
//   const values = Object.values(apartment);
//   console.log(values)



// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника,
//  а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её.
//  Используй переменную totalSalary для хранения общей суммы зарплаты.

// function countTotalSalary (salaries) {
//   let totalSalary = 0;

// let values = Object.values(salaries)

// for (const value of values) {
//   totalSalary += value;
// }

//   console.log(totalSalary);
// }
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });




// Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex,
//  а в массив rgbColors значения свойств rgb из всех объектов массива colors.

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//   hexColors.push(color.hex) 
// }
// console.log(hexColors)
// for (const rgb of colors) {
//   rgbColors.push(rgb.rgb) 
// }
// console.log(rgbColors)
/////////////////////////////////////////////////////////
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }




// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта.
//  Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price).
//  Если продукт с таким названием не найден, функция должна возвращать null.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// let noName = null;
// function getProductPrice(productName) {
// for (const product of products) {
//   if (product.name === productName){
//     console.log(product.price)

//   } 
// }
// return null;
// }
// getProductPrice("Radar");
// getProductPrice("Grip");
// getProductPrice("Scanner");
// getProductPrice("Droid");
// getProductPrice('victor');




// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства.
//  Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products.
//  Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   let values = [];
// for (const product of products) {
//   if (Object.keys(product).includes(propName)) {
//     values.push(product[propName])
//   }
// }
// return values;
// }
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));



// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара.
//  Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   for (const product of products) {
//       if (product.name === productName){
//         console.log(product.price * product.quantity)
    
//       } 
//     }
//     return 0;
// }
// calculateTotalPrice("Blaster");
// calculateTotalPrice("Radar");
// calculateTotalPrice("Droid");



// Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня (meanTemperature).
//  Замени объявления переменных yesterday,
//  today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {yesterday, today, tomorrow} = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);



// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.
// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data.
// В новом объекте должно быть свойство completed,
//   значение которого хранится в одноимённой локальной переменной.
// В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать. Тогда,
//   в новом объекте задачи,
//   в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
// return {completed, category, priority, ...data};
// }
// console.log(makeTask({})); //{ category: "General", priority: "Normal", completed: false }
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));



// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, 
// считала и возвращала их сумму.

// function add(...rest) {
//   let total = 0;
//   for (let name of rest) {
//     total += name
//   }
//   return total
// }
// console.log(add(74, 11, 62, 46, 12, 36))



// Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так,
//  чтобы она считала сумму только тех аргументов, которые больше чем заданное число.
//  Это число должно быть первым параметром функции.

function addOverNum(number, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > number) {
    total += arg;
    }
  }
  return total;
}
addOverNum(50, 15, 27);
addOverNum(10, 12, 4, 11, 48, 10, 8);
addOverNum(15, 32, 6, 13, 19, 8);
addOverNum(20, 74, 11, 62, 46, 12, 36);
