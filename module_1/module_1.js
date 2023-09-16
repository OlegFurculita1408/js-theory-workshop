// Example 1 - Математичні оператори
// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apple = 47;
// const grapes = 135;
// const total = apple + grapes
// console.log(total);
// const diff = grapes - apple
// console.log(diff);

// ======== ++++++ ========

// Example 2 - Комбіновані оператори
// Заміни вираз перевизначення комбінованим оператором `+=`.

// let students = 100;
// students += 50;
// console.log(students);
// students -= 100;
// console.log(students);


// ======== ++++++ ========

// Example 3 - Пріоритет операторів
// Розбери пріоритет операторів в інструкції привласнення значення змінної

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// ======== ++++++ ========
// Example 4 - Клас Math
// `round` - математичні правила округлення (27.9 -> 28; 23.3 -> 23)

// const value = 27.4
// console.log("round: ", Math.round(value));
// console.log("ceil: ", Math.ceil(value));
// console.log("floor: ", Math.floor(value));

// ======== ++++++ ========

// Example 5 - Шаблонні рядки
// Склади фразу за допомогою шаблонних рядків `A has B bots in stock`, де A, B -
// змінні вставлені в рядок.

// const companyName = 'Cyberdyne Systems Inc.';
// const count = 2100;
// const mes = `${companyName} has ${count} bullets`
// console.log(mes);

// ======== ++++++ ========
// Example 6 - Методи рядків та чейнінг
// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього
// необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.
//
// Вага та висота зберігаються у змінних `weight` та `height`, але не як числа, а в
// вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді
// `24.7` або `24,7`, тобто як роздільник дробової частини може бути
// кома.
//
// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// const weight = '88,3';
// const height = '1.75'
// console.log(Number.parseFloat(weight))
// *** HW  weight to decimal number with ***

//
// const bmi = Number.parseFloat(weight) / (Number.parseFloat(height) ** 2)
// console.log(+bmi.toFixed(1));

// ======== ++++++ ========

// Example 7 - Оператори порівняння та приведення типів
// Яким буде результат виразів?

// console.log(5 > 4); // true
// console.log(10 >= '7'); // true
// console.log('2' > '12');
// console.log('2' < '12');
// console.log('4' == 4);
// console.log('6' === 6);
// console.log('false' === false);
// console.log(1 == true);
// console.log(1 === true);
// console.log('0' == false);
// console.log('0' === false);
// console.log('Papaya' < 'papaya');
// console.log('Papaya' === 'papaya');
// console.log(undefined == null);
// console.log(undefined === null);

// ======== ++++++ ========

// Логічні оператори
// console.log(true && -3);
// console.log(false && 3);
// console.log(true && 4 && 'kiwi');

// console.log(true || 3);
// console.log(false || 0 || 4);
// console.log(null || 2 || undefined);
// console.log(null || (2 && 3) || 4); // 3

// ======== ++++++ ========

// Example 9 - Значення за замовчуванням та оператор нульового злиття;
// const a = undefined;
// const b = 10;
// const res = a || 0
// console.log(res);



// ======== ++++++ ========

// 10 - Оператор % та методи рядків
// Напиши скрипт, який переведе значення `totalMinutes` (кількість хвилин) в
// рядок у форматі годин та хвилин `HH:MM`.

// const totalMinutes = 726;
// const hours = Math.floor(totalMinutes / 60)
// const minutes = totalMinutes % 60
// const doubleDigitsHours = String(hours).padStart(2, "0")
// const doubleDigitsMinutes = String(minutes).padStart(2, "0")
//
// const clock = `${doubleDigitsHours}:${doubleDigitsMinutes}`
// console.log(clock);

// ========= Card no vision 4.length =======


// function maskify(cc) {
//     return cc.slice(-4).padStart(cc.length,'#')

//   }
//   console.log(maskify('7asdas9736'));
//   console.log(maskify('37736'));
//   console.log(maskify('5343'));
//   console.log(maskify(''));
//  ======== n2 =================
//   function maskify(cc) {
//     if (cc.length <= 4) return cc
//     else return "#" + maskify(cc.substring(1,cc.length))
//   }


// ============ acc summ Total+ string = 0 =========

// function simpleArraySum(ar) {
//     if (!Array.isArray(ar) || !ar.length) return 'Not a valid array';
//     let acc = 0;
//     for (let i = 0; i < ar.length; i++) {
//       if (ar[i] <= 1000) acc += ar[i];
//     }
//     return acc;
//   }
  
//   console.log(simpleArraySum([1, 2, 3]));
//   console.log(simpleArraySum([]));
//   console.log(simpleArraySum([10, 1, 2, 100, 1001]));
//   console.log(simpleArraySum('string'));
//   console.log(simpleArraySum([10, 1, 2, 100, 1000]));
// ====================================

// function sum(number){
//     const initial = 0;
//     const total = number.reduce((acc, cv) => acc + cv, initial)
    
//     if (Number.isNaN(number)) {
//         return null;
//     } 
//     else if (total.length !=0) {
//         return total;
//     }
//   }
//     console.log(sum([-1,2,3]))
//     console.log(sum(['asder']));
//     console.log(sum([1, 5.2, 4,]))
    // ===============================
    // function sum(numbers) {
    //     return numbers.reduce((a, b) => a + b, 0);
    //   }
    // console.log(sum([-1,2,3]))
    // console.log(sum(['asder']));
    // console.log(sum([1, 5.2, 4,]))

// =========================== Min number ====================


// function findSmallestInt(args) {
//       return Math.min(...args)
//     }

//   console.log(findSmallestInt([78,56,232,12,8]))
//   console.log(findSmallestInt([78,56,-232,12,8]))

//  ========================== Write a function to split a string and convert it into an array of words.  =================


// function stringToArray(string){
//     return string.trim().split(" ");
// }
// console.log(stringToArray("Robin Singh"))
// console.log(stringToArray("I love arrays they are my favorite"))

// ==================== This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.


// function simpleMultiplication(number) {
//     if (number %2==0) {
//         return number * 8;
//     } else {
//         return number * 9;
//     }
// }
// console.log(simpleMultiplication(2))


// ===  Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


// function evenOrOdd(number) {
//     return number % 2 ? "Odd" : "Even"
//   }
//   console.log(evenOrOdd(7))


// ======== Create a function which answers the question "Are you playing banjo?".
// ======== If your name starts with the letter "R" or lower case "r", you are playing banjo!==
// ======== The function takes a name as its only argument, and returns one of the following strings:==

// const play = " plays banjo";
// const notPlay = " does not play banjo";
// function areYouPlayingBanjo(name) {
//     if(name.slice(0, 1) === 'R' || 'r') {
//         return `${name}${play}`;
//     } else {
//         return `${name}${notPlay}`;
//     }
//   }
//   console.log(areYouPlayingBanjo('Adam'))
//   ======== ||
// function areYouPlayingBanjo(name) {
//     return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
//     }
//   console.log(areYouPlayingBanjo('rAdam'))


// ========  Consider an array/list of sheep where some sheep may be missing from their place.
// ======== We need a function that counts the number of sheep present in the array (true means present).

// function countSheeps(arrayOfSheep) {
//     return arrayOfSheep.filter(item => item === true).length
//     }
// console.log(countSheeps([true,  true,  true,  false,
//                         true,  true,  true,  true ,
//                         true,  false, true,  false,
//                         true,  false, false, true ,
//                         true,  true,  true,  true ,
//                         false, false, true,  true ]))


// ========= Write a function which calculates the average of the numbers in a given list.

// function findAverage(array) {
//     const initial = 0;
//     const total = array.reduce((acc, cv) => acc + cv, initial)
//     if (total != 0) {
//         return total / array.length;
//     } else {
//         return 0;
//     }
//   }
// console.log(findAverage([9,3,4,5]))


// ========= Given a string of digits, you should replace any 
// ========= digit below 5 with '0' and any digit 5 and above with '1'.
// ========= Return the resulting string.


// function fakeBin(x){
//     let arr = [];
//     x = ""+x+"";
//     x.split("").join(",");
    
//     for(let i = 0; i < x.length; i++){
//         if(x[i] < 5) {
//             arr.push(0);

//         } else{
//             arr.push(1);
//         }
//         }
//         return arr.join("");
// }
// console.log(fakeBin('45385593107843568'));
// ==========================================
// function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }


// ======== Write a function that will take the number of petals
// ======== of each flower and return true if they are in love and false if they aren't.


// function lovefunc(flower1, flower2){
//     if (flower1 + flower2 % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
//   }
//   console.log(lovefunc(3,4));
// // ====================================
//   function lovefunc(flower1, flower2){
//     return flower1 % 2 !== flower2 % 2;
//   }
//   console.log(lovefunc(9,7));


// ======= 