// Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback)
//  колбэк-функцию и возвращала ее вызов. Функция deliverPizza или makePizza будет
//   передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.


// function deliverPizza(pizzaName) {
//     console.log(`Delivering ${pizzaName} pizza.`);
//   }
//   function makePizza(pizzaName) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   }
//   function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
//   }
//   makeMessage('Royal Grand', makePizza);
//   makeMessage('Ultracheese', deliverPizza);



// Example 1 - Коллбек функції
// Напишіть наступні функції:
// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
// logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

// function createProduct(obj, callback) {
//     const newObj = {
//         ...obj,
//         id: Math.random()
//     }
//
//     callback(newObj);
// }
//
// function logProduct(product) {
//     console.log(product)
// }
//
// function logTotalPrice(product) {
//     // product - { name: 'Apple', price: 20, quantity: 5 }
//     console.log(product.price * product.quantity);
// }
//
// // createProduct({ name: 'Apple', price: 20, quantity: 5 }, logProduct)
// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);



// Example 2 - Коллбек функції
// Додайте об'єкт account методи withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError),
 //де перший параметр це сума операції, а другий та третій - коллбеки.
// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.
// Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.

// const TRANSACTION_LIMIT = 2000;
//
// const account = {
//     balance: 700,
//     withdraw(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT || amount > account.balance) {
//             onError();
//             return;
//         }
//
//         account.balance -= amount;
//         onSuccess();
//     },
//
//     deposit(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT || amount <= 0) {
//             onError();
//             return;
//         }
//         account.balance += amount;
//         onSuccess();
//     },
//
//     getBalance () {
//         return account.balance;
//     }
// }
//
// function onSuccessWithdraw () {
//     console.log('Success withdraw!');
// }
//
// function onErrorWithdraw () {
//     console.log('Error occurs while withdraw money!');
// }
//
// function onSuccessDeposit () {
//     console.log('Success deposit!');
// }
//
// function onErrorDeposit () {
//     console.log('Error occurs while deposit some money!');
// }
//
// account.deposit(2500, onSuccessDeposit, onErrorDeposit);

// account.withdraw(200, onSuccessWithdraw, onErrorWithdraw);
// account.withdraw(200, onSuccessWithdraw, onErrorWithdraw);
// account.withdraw(200, onSuccessWithdraw, onErrorWithdraw);
// account.withdraw(200, onSuccessWithdraw, onErrorWithdraw);
// console.log(account.getBalance())




// // Рішення від платформи
// const TRANSACTION_LIMIT = 1000;
//
// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };
//
// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }
//
// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);




// Example 4 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const createProduct = (partialProduct, callback) => {
//     const product = { id: Date.now(), ...partialProduct };
//     callback(product);
// }
//
// const logProduct = product => console.log(product);
//
// const logTotalPrice = product => console.log(product.price * product.quantity);
//
//
// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);




// Можна виконати самостійно
// Example 5 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.
//
// const TRANSACTION_LIMIT = 1000;
//
// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };
//
// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }
//
// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);




// Example 6 - Інлайн стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const each = (array, callback) => {
//     const newArr = [];
//     for (const el of array) {
//         newArr.push(callback(el));
//     }
//     return newArr;
// }
//
// console.log(
//     each([64, 49, 36, 25, 16], value => value * 2),
// );
//
// console.log(
//     each([64, 49, 36, 25, 16], value => value - 10),
// );

// Самостійне вирішення
// console.log(
//     each([64, 49, 36, 25, 16], function (value) {
//         return Math.sqrt(value);
//     }),
// );
// console.log(
//     each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//         return Math.ceil(value);
//     }),
// );
// console.log(
//     each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//         return Math.floor(value);
//     }),
// );




// Example 8 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// const printContactsInfo = ({ names, phones }) => {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');

//     // for (let i = 0; i < nameList.length; i += 1) {
//     //     console.log(`${nameList[i]}: ${phoneList[i]}`);
//     // }
//          nameList.forEach(function (element, index) {
//         console.log(`${element}: ${phoneList[index]}`);
//     })
// }
// printContactsInfo({
//     names: 'Jacob,William,Solomon,Artemis',
//     phones: '89001234567,89001112233,890055566377,890055566300',
// });




// Example 7 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
//
// function logItems(items) {
//   console.log(items);
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }
// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);



// Example 9 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
//
// function calсulateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }
//
// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2



// Example 3 - Коллбек функції
// Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію,
//  яка застосовується до кожного елемента масиву. Функція each повинна повернути новий масив,
//   елементами якого будуть результати виклику коллбека.
//
// // Рішення
// function each(array, callback) {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// }
//
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );



// Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так,
//     чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.
// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, 
//     метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку 
//     "There is no pizza with a name <имя пиццы> in the assortment."
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName,
//     метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.

// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {
//       if (this.pizzas.includes(pizzaName)) {
//          return onSuccess(pizzaName); 
//       }
//       return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//     },
//   };

//   function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//   }

//   function onOrderError(error) {
//     return `Error! ${error}`;
//   }
//   console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
//   console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
//   console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
//   console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));



// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, 
//     и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и 
//     возвращается как результат работы функции.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//   orderedItems.forEach(element => totalPrice += element);
//     return totalPrice;
//   };
//   console.log(calculateTotalPrice([12, 85, 37, 4]));
//   console.log(calculateTotalPrice([164, 48, 291]));
//   console.log(calculateTotalPrice([412, 371, 94, 63, 176]));



// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент,
//  значение которого это чётное число, добавляя к нему значение параметра value.

// function changeEven(numbers, value) {

//   const newArray = [];
//     numbers.forEach((element) => {
//       if (element % 2 === 0) {
//         newArray.push(element + value);
//       }else {
//         newArray.push(element);
//       };
//     });
//     return newArray;
//   };
//   console.log(changeEven([1, 2, 3, 4, 5], 10));
//   console.log(changeEven([44, 13, 81, 92, 36, 54], 100));



// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books,
//  а в переменной uniqueGenres массив уникальных жанров - без повторений.

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction", "mysticism"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism", "adventure"],
//     },
//   ];
//   const allGenres = books.flatMap(book => book.genres);
//   const uniqueGenres = allGenres.filter((uniq, index) => index === allGenres.indexOf(uniq));
//   console.log(allGenres);
//   console.log(uniqueGenres);



// Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у 
// которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.

// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female"
//     },
//   ];
//   const getUsersWithEyeColor = (users, color) => {
//     let newUsers = users.filter(user => user.eyeColor === color)
//     console.log(newUsers);
//    };
//    getUsersWithEyeColor(users,'green');



// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей,
//  возраст которых (свойство age) попадает в промежуток от minAge до maxAge.

// const getUsersWithAge = (users, minAge, maxAge) => {
//     return users.filter(user => user.age > minAge && user.age < maxAge)
  
//   };


// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив 
// пользователей у которых есть друг с именем в параметре friendName.
//  Массив друзей пользователя хранится в свойстве friends.

// const getUsersWithFriend = (users, friendName) => {
//     return users.filter(user => user.friends.includes(friendName))
//   };



// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends).
//  У нескольких пользователей могут быть одинаковые друзья,
//  сделай так чтобы возвращаемый массив не содержал повторений.

// const users = [
//         {
//           name: "Moore Hensley",
//           email: "moorehensley@indexia.com",
//           eyeColor: "blue",
//           friends: ["Sharron Pace", "Sharron Pace"],
//           isActive: false,
//           balance: 2811,
//           gender: "male"
//         },
//         {
//           name: "Sharlene Bush",
//           email: "sharlenebush@tubesys.com",
//           eyeColor: "blue",
//           friends: ["Briana Decker", "Sharron Pace"],
//           isActive: true,
//           balance: 3821,
//           gender: "female"
//         },
//     ];

// const getFriends = (users) => {
//     const userFriends = users.flatMap(user => user.friends);
//     return userFriends.filter((uniq, index) => index === userFriends.indexOf(uniq));
//   };
// console.log(getFriends());


// Используя метод find() дополни код так, чтобы:
// В переменной bookWithTitle получился объект книги название которой (свойство title)
//      совпадает со значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор который (свойство author)
//      совпадает со значением переменной AUTHOR.

// const books = [
//     {
//       title: 'The Last Kingdom',
//       author: 'Bernard Cornwell',
//       rating: 8.38,
//     },
//     {
//       title: 'Beside Still Waters',
//       author: 'Robert Sheckley',
//       rating: 8.51,
//     },
//     {
//       title: 'The Dream of a Ridiculous Man',
//       author: 'Fyodor Dostoevsky',
//       rating: 7.75,
//     },
//     { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   ];
//   const BOOK_TITLE = 'The Dream of a Ridiculous Man';
//   const AUTHOR = 'Robert Sheckley';
//   // Change code below this line
  
//   const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
//   const bookByAuthor = books.find(book => book.author === AUTHOR);

//   console.log(bookWithTitle);
//   console.log(bookByAuthor);


// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока,
//  и получить общую сумму этих времён. Рассчитать время для каждого из игроков,
//  можно разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).

// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
//   ];
//   const totalAveragePlaytimePerGame = players.reduce((total, {playtime, gamesPlayed}) => total += playtime / gamesPlayed, 0);
//   console.log(totalAveragePlaytimePerGame);



// Total users balance -----------------------------------

// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
// ]
// const calculateTotalBalance = users => {
//     return users.reduce((value, el) => value + el.balance, 0)
//  };
//  console.log(calculateTotalBalance(users));



//  Total Friends  ---------------------------------------------
// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
// ]
// const getTotalFriendCount = users => {
//     return users.flatMap(user => user.friends).reduce(acum => acum +1, 0)
//  };
//  console.log(getTotalFriendCount(users));


//  SORT ---------------------------------------------localeCompare to string!!!
// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { 
//         title: "Redder Than Blood",
//         author: "Tanith Lee",
//         rating: 7.94 
//     },
//     { 
//         title: "Enemy of God",
//         author: "Bernard Cornwell",
//         rating: 8.67 },
//   ];
// const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor) => 
//     firstAuthor.author.localeCompare(secondAuthor.author));
// console.log(sortedByAuthorName);
// const sortedByReversedAuthorName = [...books].sort((firstAuthor, secondAuthor) =>
//     secondAuthor.author.localeCompare(firstAuthor.author));
// console.log(sortedByReversedAuthorName);
// const sortedByAscendingRating = [...books].sort((firstRating, secondRating) => firstRating.rating - secondRating.rating);
// console.log(sortedByAscendingRating);
// const sortedByDescentingRating = [...books].sort((firstRating, secondRating) => secondRating.rating - firstRating.rating);
// console.log(sortedByDescentingRating);




// Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке,
//  рейтинг книг которых больше значения переменной MIN_BOOK_RATING.

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {
//       title: "The Dreams in the Witch House",
//       author: "Howard Lovecraft",
//       rating: 8.67,
//     },
//   ];

// const MIN_BOOK_RATING = 8;

// const names = [...books]
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .sort((a, b) => a.localeCompare(b));

//  console.log(names);



// Дополни функцию getNamesSortedByFriendCount(users) так,
//  чтобы она возвращала массив имён пользователей отсортированный по возрастанию количества
//   их друзей (свойство friends).

// const users = [
//         {
//           name: "Moore Hensley",
//           email: "moorehensley@indexia.com",
//           eyeColor: "blue",
//           friends: ["Sharron Pace"],
//           isActive: false,
//           balance: 2811,
//           gender: "male"
//         },
//         {
//           name: "Sharlene Bush",
//           email: "sharlenebush@tubesys.com",
//           eyeColor: "blue",
//           friends: ["Briana Decker", "Sharron Pace"],
//           isActive: true,
//           balance: 3821,
//           gender: "female"
//         },
//     ]
// const getNamesSortedByFriendCount = users => {
//     return [...users].sort((a, b) => a.friends.length - b.friends.length)
//     .map((user) => user.name)
    
//   };
//   console.log(getNamesSortedByFriendCount(users));



// Дополни функцию getSortedFriends(users) так,
//  чтобы она возвращала массив уникальных имён друзей (свойство friends)
//   отсортированный по алфавиту .

// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//     },
// ];
// const getSortedFriends = users => {
//     return [...users].flatMap(user => user.friends)
//    .filter((friend, index, array) => array.indexOf(friend) === index)
//    .sort((a, b) => a.localeCompare(b))
//  };
//  console.log(getSortedFriends(users));



// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс
//  пользователей (свойство balance), пол которых (свойство gender)
//   совпадает со значением параметра gender.

// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//       isActive: true,
//       balance: 3951,
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//       isActive: false,
//       balance: 1498,
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female"
//     }
//   ]

// const getTotalBalanceByGender = (users, gender) => {
//     return [...users].filter((user) => user.gender === gender)
//       .reduce((totalBalance, user) => {
//         return totalBalance + user.balance
//       }, 0)
// };
// console.log(getTotalBalanceByGender(users, 'female'));
// console.log(getTotalBalanceByGender(users, 'male'));


