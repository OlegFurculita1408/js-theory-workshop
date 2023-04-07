// -----------this---------------------------------------------

// const customer = {
//     username: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["Burger", "Pizza", "Salad"],
//     // Change code below this line
//     getBalance() {
//       return this.balance;
//     },
//     getDiscount() {
//       return this.discount;
//     },
//     setDiscount(value) {
//       this.discount = value;
//     },
//     getOrders() {
//       return this.orders;
//     },
//     addOrder(cost, order) {
//       this.balance -= cost - cost * this.discount;
//       this.orders.push(order);
//     },
//   };
//   customer.setDiscount(0.15);
//   console.log(customer.getDiscount()); // 0.15
//   customer.addOrder(5000, "Steak");
//   console.log(customer.getBalance()); // 19750
//   console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


//   ЗАДАЧА: ИСТОРИЯ ЗАКАЗОВ

// const historyService = {
//     orders: [
//       { email: "jacob@hotmail.com", dish: "Burrito" },
//       { email: "solomon@topmail.net", dish: "Burger" },
//       { email: "artemis@coldmail.net", dish: "Pizza" },
//       { email: "solomon@topmail.net", dish: "Apple pie" },
//       { email: "jacob@hotmail.com", dish: "Taco" },
//     ],
//     getOrdersLog() {
//       return this.orders
//         .map(order => `email: ${order.email} dish: ${order.dish}`)
//         .join(" - ");
//     },
//     getEmails() {
//       const emails = this.orders.map(order => order.email);
//       const uniqueEmails = new Set(emails);
//       return [...uniqueEmails];
//     },
//     getOrdersByEmail(email) {
//       return this.orders.filter(order => order.email === email);
//     },
//   };
//   console.log(historyService.getOrdersLog());
//   console.log(historyService.getEmails());
//   console.log(historyService.getOrdersByEmail('solomon@topmail.net'));
//   console.log(historyService.getOrdersByEmail('artemis@coldmail.net'));


// Измени код, построив цепочку прототипов так,
//  чтобы объект ancestor был прототипом для parent,
//   а тот в свою очередь был прототипом для child.

// const ancestor = {
//     name: "Paul",
//     age: 83,
//     surname: "Dawson",
//     heritage: "Irish",
//   };
  
//   const parent = Object.create(ancestor);
//   parent.name = "Stacey";
//   parent.surname = "Moore";
//   parent.age = 54;
  
//   const child = Object.create(parent);
//   child.name = "Jason";
//   child.age = 27;

//   console.log(ancestor.isPrototypeOf(parent));
//   console.log(parent.hasOwnProperty('heritage'));
//   console.log(child.hasOwnProperty('heritage'));
//   console.log(child.hasOwnProperty('surname'));


// ---------------------Class-------------------

// Добавь классу Car метод constructor который принимает три параметра:

// brand - марка автомобиля.
// model - модель автомобиля.
// price - цена автомобиля.

// class Car {
//   constructor (brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//     };
//   };
//   console.log(new Car("Audi", "Q3", 36000));
//   console.log(new Car("Audi", "Q8", 60000));
//   console.log(new Car("WV", "touran", 22000));

// Напиши класс Storage, который будет создавать объекты для управления складом товаров.
//  Класс ожидает только один аргумент - начальный массив товаров,
//  который записывается на создаваемый объект в свойство items.

// class Storage {
//     constructor(items) {
//       this.items = items;
//     }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//    this.items = this.items.filter(item => item !== itemToRemove);
//   }
//   }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


////-------------------------------------------------------------------------

// class StringBuilder {
//     constructor(value) {
//       this.value = value;
//     }
//     getValue() {
//       return this.value;
//     }
//     padEnd(str) {
//       this.value += str;
//     }
//     padStart(str) {
//       this.value = str + this.value;
//     }
//     padBoth(str) {
//       this.value = str + this.value + str;
//     }
//   };
  
  
//   // Change code above this line
//   const builder = new StringBuilder(".");
//   console.log(builder.getValue()); // "."
//   builder.padStart("^");
//   console.log(builder.getValue()); // "^."
//   builder.padEnd("^");
//   console.log(builder.getValue()); // "^.^"
//   builder.padBoth("=");
//   console.log(builder.getValue()); // "=^.^="



////-------------------------------------------------------------------------
// class Storage {
//     #items;
//     constructor(items) {
//       this.#items = items;
//     }
//     getItems() {
//       return this.#items;
//     }
  
//     addItem(newItem) {
//       this.#items.push(newItem);
//     }
//     removeItem(itemToRemove) {
//       this.#items = this.#items.filter(item => item !== itemToRemove);
//     }
//   }
//   const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
//   storage.addItem("Droid");
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
//   storage.removeItem("Prolonger");
//   console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]



// Выполни рефакторинг класса Car. Сделай свойства model и price приватными,
//  также как #brand. Стандартизируй публичный интерфейс класса заменив уже объявленные методы на геттеры и сеттеры brand,
//  model и price для взаимодействия с приватными свойствами.
  

// class Car {
//     #brand;
//     #model;
//     #price;
//     constructor({ brand, model, price }) {
//       this.#brand = brand;
//       this.#model = model;
//       this.#price = price;
//     }
  
//     get brand() {
//       return this.#brand;
//     }
  
//     set brand(newBrand) {
//       this.#brand = newBrand;
//     }
  
//     get model() {
//       return this.#model;
//     }
  
//     set model(newModel) {
//       this.#model = newModel;
//     }
  
//     get price() {
//       return this.#price;
//     }
  
//     set price(newPrice) {
//       this.#price = newPrice;
//     }
//   }
//   const car = new Car({
//     brand: 'Audi',
//     model: "Q3",
//     price: 36000,
//   })
//   console.log(new Car("Audi", "Q3", 36000));
//   console.log(new Car("Audi", "Q8", 60000));
//   console.log(new Car("WV", "touran", 22000));


// ------------------------------------------------------------------------
// Выполни рефакторинг класса Car. Добавь публичное статическое свойство 
// MAX_PRICE со значением 50000 - максимально допустимая цена автомобиля.

// Добавь сеттеру price проверку передаваемого значения параметра newPrice.
//  Если оно больше чем MAX_PRICE, сеттер ничего не делает, а если меньше или равно,
//   то перезаписывает цену автомобиля.

//   class Car {
//     static MAX_PRICE = 50000;
//     #price;
//     constructor({ price }) {
//       this.#price = price;
//     }
//     get price() {
//       return this.#price;
//     }
//     set price(newPrice) {
//       if (newPrice > Car.MAX_PRICE) {
//         return;
//       } this.#price = newPrice;
//     }
//   }
//   const audi = new Car({ price: 35000 });
//   console.log(audi.price); // 35000
//   audi.price = 49000;
//   console.log(audi.price); // 49000
//   audi.price = 51000;
//   console.log(audi.price); // 49000


// ------=========================---------------------====================

// Добавь классу Car публичный статический метод checkPrice(price),
//  принимающий цену автомобиля. Метод должен сравнить значения параметра
//   price и приватного статического свойства MAX_PRICE.

// Если цена автомобиля превышает максимальную, метод должен вернуть строку
//  "Error! Price exceeds the maximum".
// В противном случае метод должен вернуть строку
//  "Success! Price is within acceptable limits".

// class Car {
//     static #MAX_PRICE = 50000;
//    static checkPrice(price) {
//     if (price > Car.#MAX_PRICE) {
//       return "Error! Price exceeds the maximum";
//     }
//     return "Success! Price is within acceptable limits";
//   }
//     constructor({ price }) {
//       this.price = price;
//     }
//   }
//   const audi = new Car({ price: 36000 });
//   const bmw = new Car({ price: 64000 });
//   console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
//   console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// ------=========================---------------------====================

// Добавь классу Admin следующие свойства и методы.
// Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей.
//  Значение по умолчанию это пустой массив.
// Публичный метод blacklist(email) для добавления почты в чёрный список.
//  Метод должен добавлять значение параметра email в массив хранящийся в свойстве blacklistedEmails.
// Публичный метод isBlacklisted(email) для проверки почты в чёрном списке.
//  Метод должен проверять наличие значения параметра email в массиве хранящемся в свойстве blacklistedEmails
//   и возвращать true или false.

// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   class Admin extends User {
  
//     blacklistedEmails = [];
//     static AccessLevel = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };
  
//     constructor({ email, accessLevel }) {
//       super(email);
//       this.accessLevel = accessLevel;
//     }
//     blacklist(email) {
//       this.blacklistedEmails.push(email)
//     }
//     isBlacklisted(email) {
//       return this.blacklistedEmails.includes(email)
//     }
//   }
  
//   const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
//   });
//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.accessLevel); // "superuser"
//   mango.blacklist("poly@mail.com");
//   console.log(mango.blacklistedEmails); // ["poly@mail.com"]
//   console.log(mango.isBlacklisted("mango@mail.com")); // false
//   console.log(mango.isBlacklisted("poly@mail.com")); // true
