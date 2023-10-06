// ==== Given two integers a and b, which can be positive or negative,
//  find the sum of all the integers between and including them and return it.
//  If the two numbers are equal return a or b.

// function getSum(a, b) {
//   if (!Number.isInteger(a / b)) {
//     return a + b;
//   }
//   else if (a === b) {
//     return a;
//   } 
//   else if (a || b < 0 && a < b) {
//     return a;
//   }
//   else if (a || b < 0) {
//     return a + b;
//   }
//   else {
//     return b;
//   }
// }
// console.log(getSum(1, 2));
// console.log(getSum(0, -1));
// console.log(getSum(5, 5));
// console.log(getSum(-17, -6));


// ==== There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the
//  number of people that get on the bus (the first item) and the number of people that get off the bus
//   (the second item) at a bus stop.
// Your task is to return the number of people who are still on the bus after the last bus
//  stop (after the last array). Even though it is the last bus stop, the bus might not be 
//  empty and some people might still be inside the bus, they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in 
//  the bus is always >= 0. So the returned integer can't be negative.
// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

// const number = function(busStops){
//   let totalEntries = 0
//   let totalDowns = 0

//   busStops.map((arr)=> { 
//     totalEntries += arr[0] 
//     totalDowns += arr[1]
//   })

//   return totalEntries  - totalDowns
// }
// console.log(number([[10,0],[3,5],[5,8]]));

// 2 example ====== 

// var number = function(busStops){
//   let peopleInBus = 0;

//   busStops.forEach(([enter, left]) => {
//     peopleInBus += enter - left;
//   })
  
//   return peopleInBus;
// }
// console.log(number([[11,0],[3,6],[9,8]]));



// ================ Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

// function disemvowel(str) {
//   let newStr = (str.replace(/A|E|I|O|U|a|e|i|o|u/g, ''))
//  return newStr;
  
// }
// console.log(disemvowel("This website is for losers LOL!"));



// ================= Complete the method that takes a boolean value and return a "Yes" 
// string for true, or a "No" string for false.

// function boolToWord( bool ){
//   if (bool === true) {
//     return 'Yes'
//   } else {
//     return 'No'
//   }
// }
// console.log(boolToWord(false));

// 2 example ==
// function boolToWord( bool ){
//   return bool ? 'Yes':'No';
// }
// console.log(boolToWord(true));



// ================== Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//   let m = str.match(/[aeiou]/gi);
//     return m === null ? 0 : m.length;
// }
// console.log(getCount("zqpmnbx"));
// example 2 === === === === ===
// function getCount(str) {
//   return str.replace(/[^aeiou]/gi, '').length;
// }
// console.log(getCount("qawesryt"));



// ================== Check to see if a string has the same amount of 'x's and 'o's.
//  The method must return a boolean and be case insensitive. The string can contain any char.

// function xo(str) {
//   let strn = str.toLowerCase();
//   let countX = []; 
//   let countO = [];

//   for(let i = 0; i < strn.length; i++) {
//     if (strn[i] == 'x') {
//       countX.push(strn[i])
//     }
//     else if (strn[i] == 'o') {
//       countO.push(strn[i])
//     }
//   }

//   if(countX.length == countO.length){
//     return true
//   } else {
//     return false
//   }
// }
// console.log(xo('xo'));



// ================ Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// function basicOp(operation, value1, value2) {
//   if (operation === '-') {
//     return value1 - value2;
//   } else if (operation === '+') {
//     return value1 + value2;
//   } else if (operation == '*') {
//     return value1 * value2;
//   } else if (operation === '/'){
//     return value1 / value2;
//   }
// }
// console.log(basicOp('-', 15, 18));
// console.log(basicOp('*', 5, 10));

// variant 2 
// basicOp = (operation, value1, value2) => eval( `${value1} ${operation} ${value2}`)
// console.log(basicOp('*', 5, 5));



// ================ Write a function that accepts an integer n and a string s as parameters,
//  and returns a string of s repeated exactly n times.

// function repeatStr (n, s) {
//   return s.repeat(n);
// }
// console.log(repeatStr(2, "ha "));




// ================ Your classmates asked you to copy some paperwork for them. You know that there are 'n'
//  classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Ваши одноклассники попросили вас скопировать для них кое-какие документы. Вы знаете,
// что одноклассников n, а в документах m страниц.
// Ваша задача — посчитать, сколько пустых страниц вам нужно. Если n < 0 или m < 0, вернуть 0.

// function paperwork(n, m) {
//   if (n < 0 || m < 0) {
//     return 0;
//   } else {
//     return n * m;
//   }
// }
// // == example 2 « return n > 0 && m > 0 ? n * m : 0;
// console.log(paperwork(5,5));
// console.log(paperwork(5,-5));



// ================ Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:

// Сможете ли вы найти иголку в стоге сена?
// Напишите функцию findNeedle(), которая принимает массив, полный мусора, но содержащий одну «иглу».
// После того, как ваша функция найдет иглу, она должна вернуть сообщение (в виде строки), в котором говорится:
// «найдена игла в позиции» плюс индекс, на котором найдена игла, поэтому:

// const haystack_1 = ['3', '123124234', undefined,
//                     'needle', 'world', 'hay', 2,
//                     '3', true, false];
// const haystack_2 = ['283497238987234', 'a dog', 'a cat',
//                     'some random junk', 'a piece of hay',
//                     'needle', 'something somebody lost a while ago'];
// const haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,
//                     2,34,234,23,4,234,324,324,'needle',1,2,3,4,
//                     5,5,6,5,4,32,3,45,54];

// function findNeedle(haystack) {
//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] === 'needle') {
//       return `found the needle at position ${i}`;
//     }
//   }
// }
// // == ® example 2 ® return "found the needle at position " + haystack.indexOf("needle");
// console.log(findNeedle(haystack_1));
// console.log(findNeedle(haystack_2));
// console.log(findNeedle(haystack_3));



// // ================ Your task is to make two functions ( max and min, or maximum and minimum,
//  etc., depending on the language ) that receive a list of integers as input, and return the
//  largest and lowest number in that list, respectively.

// Ваша задача — создать две функции (max и min или максимум и минимум и т. д.,
//  в зависимости от языка), которые получают на вход   список целых чисел и возвращают наибольшее
//  и наименьшее число из этого списка соответственно.

// const min = function(list){
//   return Math.min(...list);
// }

// const max = function(list){
//   return Math.max(...list)
// }
// console.log(min([-52, 56, 30, 29, -54, 0, -110]));
// console.log(max([4,6,2,1,9,63,-134,566]));




// ================ You will be given an array a and a value x. All you need to do is check
//  whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

// Вам будет предоставлен массив a и значение x. Все, что вам нужно сделать,
//  это проверить, содержит ли предоставленный массив значение.
// Массив может содержать числа или строки. Х может быть любым.
// Возвращайте true, если массив содержит значение, и false, если нет.

// function check(a, x) {
//   return a.includes(x);
// }
// console.log(check([66, 101], 66));
// console.log(check([101, 45, 75, 105, 99, 107], 107));
// console.log(check(['t', 'a', 's', 't'], 'e'));