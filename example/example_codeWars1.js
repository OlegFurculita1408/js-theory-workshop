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



// =========== 