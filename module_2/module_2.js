// ======== ++++++ ========
// Example 2 - Відображення часу (if...else)

// Напиши скрипт для відображення годин та хвилин у консолі
// браузера у вигляді рядка формату `"14 г. 26 хв."`. Якщо значення
// змінної `minutes` дорівнює `0`, то
// виводь рядок `"14 г."`, без хвилин.

// const hours = 18
// const minutes = 0;
// let res;

// Варіaнт з if .. else
// if (minutes) {
//     res = `${hours} г. ${minutes} хв.`;
// } else {
//     res =`${hours} г.`;
// }

// Варіант з тернарним
// let res = `${hours} г.${minutes ? ' ' + minutes + ' хв.' : ''}`

// console.log(res);

// ======== ++++++ ========
// Example 3 - Розгалуження

// Напиши скрипт, який виводить у консоль рядок `"Це позитивне число"`,
// якщо у prompt користувач ввів число більше нуля.  Якщо було введено
// нуль, виводь в консоль рядок `"Це нуль"`. Якщо передали
// від'ємне число, у консолі
// повинен бути рядок `"Це негативне число"`.

// const inputValue = prompt('Введіть число')
// if (Number(inputValue) > 0) {
//     console.log("Це позитивне число")
// } else if (+inputValue === 0) {
//     console.log("Це нуль")
// } else if (+inputValue <== 0) {
//     console.log("Це негативне число")
// }


// ======== ++++++ ========
// Example 10 - Дедлайн здачі проекту (switch)

//     - Якщо до дедлайну 0 днів - виведи рядок `"Сьогодні"`
//     - Якщо до дедлайну 1 день - виведи рядок `"Завтра"`
//     - Якщо до дедлайну 2 дні - виведи рядок `"Післязавтра"`
//     - Якщо до дедлайну 3+ днів - виведи рядок `"Дата у майбутньому"`

// const days = 0;
// switch (days) {
//     case 0:
//         console.log("Сьогодні");
//         break;
//     case 1:
//         console.log("Завтра");
//         break;
//     case 2:
//         console.log("Післязавтра");
//         break;
//     default:
//         console.log("Дата у майбутньому");
// }

// ======== ++++++ ========
// Example 11 - Цикл for

// Напиши цикл for, який виводить у консоль браузера числа за
// зростанням від `min` до `max`, але тільки якщо число кратне `5`.

// const max = 15;
// for (let min = 1; min <= max; min += 1) {
//     if (min === 0) continue;
//     if (min % 5 === 0) {
//         console.log(min);
//     }
// }

// b++ те саме b = b + 1 чи b += 1



// Example 1 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.
//

// function calcBMI ({ weight, height }) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }
//
// // Було
// // console.log(calcBMI('88,3', '1.75'));
// // console.log(calcBMI('68,3', '1.65'));
// // console.log(calcBMI('118,3', '1.95'));
//
// // Очікується
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   }),
// );

// На домашку (треба вирішити)
// Example 2 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.
//
// function printContactsInfo(names, phones) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }
//
// // Було
// // printContactsInfo(
// //   'Jacob,William,Solomon,Artemis',
// //   '89001234567,89001112233,890055566377,890055566300',
// // );
//
// // Очікується
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// Example 3 - Глибока деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.
//
// function getBotReport(data) {
//     const {
//         companyName,
//         bots: {
//                 repair: repairBots,
//                 defence: defenceBots
//             }
//     } = data;
//
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }
//
// // Було
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));
//
// // Очікується
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 bots in stock"

// Example 4 - Деструктуризація
// Перепиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName та stock та виводила репорт про кількість товарів на складі будь-якої компанії.
//
// // Рішення
// function getStockReport({ companyName, stock }) {
//   let total = 0;
//   for (const value of Object.values(stock)) {
//     total += value;
//   }
//   return `${companyName} has ${total} items in stock`;
// }
//
// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 items in stock"
//
// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   }),
// ); // "Belacci has 35 item in stock"

// Example 5 - Операція spread
// Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.
//
// // Рішення
// function createContact(partialContact) {
//   return {
//     list: 'default',
//     ...partialContact,
//     id: generateId(),
//     createdAt: Date.now(),
//   };
// }
//
// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   }),
// );
// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   }),
// );
//
// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }
// Example 6 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.
//
// // Рішення
// function transformUsername({ firstName, lastName, ...otherProps }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...otherProps,
//   };
// }
//
// console.log(
//   transformId({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   }),
// );
//
// console.log(
//   transformId({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   }),
// );
