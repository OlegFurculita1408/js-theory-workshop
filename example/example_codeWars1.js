// =========== After a hard quarter in the office you decide to get some rest on a vacation.
//  So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. The manager of the
//  car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50
//  off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

// После тяжелого квартала в офисе вы решаете немного отдохнуть в отпуске.
//  Итак, вы забронируете рейс для себя и своей девушки и постараетесь оставить позади весь этот беспорядок.
// Вам понадобится арендованный автомобиль, чтобы передвигаться во время отпуска.
//  Менеджер по прокату автомобилей делает вам несколько выгодных предложений.
// Каждый день аренды автомобиля стоит 40 долларов.
//  Если вы арендуете автомобиль на 7 и более дней, вы получите скидку 50 долларов США.
//   Альтернативно, если вы арендуете автомобиль на 3 или более дней, вы получите скидку 20 долларов США.
// Напишите код, который выдает общую сумму за разные дни(d).

// function rentalCarCost(d) {
//     if (d === 1 || d === 2) {
//         return d * 40;
//     }
//     else if (d >= 3 && d <= 6) {
//         return d * 40 - 20;
//     }
//     else if (d >= 7) {
//         return d * 40 - 50;
//     }
//   }
//   console.log(rentalCarCost(1));
//   console.log(rentalCarCost(3));
//   console.log(rentalCarCost(4));
//   console.log(rentalCarCost(7));



// =========== Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

// Напишите функцию bmi, вычисляющую индекс массы тела (bmi = вес/рост2).

// function bmi(weight, height) {
//     let bmi = weight / (height**2);
  
//   if(bmi < 18.5){
//     return "Underweight";
//     }
//     else if (bmi < 25){
//         return "Normal";
//     }
//     else if (bmi < 30){
//         return "Overweight";
//     }
//     else{
//         return "Obese";
//     }
//   }
//   console.log(bmi(70, 1.80));
//   console.log(bmi(110, 1.76));
//   console.log(bmi(54, 1.80));

//   example ® 2 ® ==== >>>
// function bmi(weight, height) {
//     var bmi  = weight/(height*height);
//      return bmi < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
//     }
// console.log(bmi(54, 1.80));



// =========== Move the first letter of each word to the end of it, 
// then add "ay" to the end of the word. Leave punctuation marks untouched.
// Переместите первую букву каждого слова в конец, затем добавьте «ау» в конец слова.
//  Знаки препинания оставляйте нетронутыми.

// function pigIt(str) {
//     const arr = str.split(' ')
//     return arr
//         .map((word) => {
//         return word.match(/[A-z]/i)
//             ? `${word.substr(1)}${word.substr(0, 1)}ay`
//             : word
//         })
//         .join(' ')
//     }
// console.log(pigIt('Pig latin is cool'));


// ============This time we want to write calculations using
// functions and get the results. Let's have a look at some examples:
// На этот раз мы хотим написать вычисления с использованием функций и 
// получить результаты. Давайте посмотрим на несколько примеров:

// function zero(func)   { return func ? func(0) : 0; };
// function one(func)    { return func ? func(1) : 1; };
// function two(func)    { return func ? func(2) : 2; };
// function three(func)  { return func ? func(3) : 3; };
// function four(func)   { return func ? func(4) : 4; };
// function five(func)   { return func ? func(5) : 5; };
// function six(func)    { return func ? func(6) : 6; };
// function seven(func)  { return func ? func(7) : 7; };
// function eight(func)  { return func ? func(8) : 8; };
// function nine(func)   { return func ? func(9) : 9; };

// function plus( b ) { return function( a ) { return a + b; }; };
// function minus( b ) { return function( a ) { return a - b; }; };
// function times( b ) { return function( a ) { return a * b; }; };
// function dividedBy( b ) { return function( a ) { return Math.trunc(a / b); }; };

// console.log(seven(times(five()))); // must return 35
// console.log(four(plus(nine()))); // must return 13
// console.log(eight(minus(three()))); // must return 5
// console.log(six(dividedBy(two()))); // must return 3



// =========== Write a function, which takes a non-negative integer (seconds)
//  as input and returns the time in a human-readable format (HH:MM:SS)


function humanReadable (seconds) {
    return '';
  }