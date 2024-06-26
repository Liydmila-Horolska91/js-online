//-----1

// todo Напиши скрипт, який для об'єкта user послідовно:
//   - додасть поле mood зі значенням 'happy'
//   - замінить hobby на 'skydiving'
//   - замінить значення premium на false
//   - виводить вміст об'єкта user у форматі ключ:значення,
// використовуючи Object.keys() і for...of

const user = {
  name: 'John',
  age: 20,
  hobby: 'tennis',
  premium: true,
}
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);
console.log(keys);

for (const key of keys) { 
  console.log('${key}: ${user[key]}');
}


//-----2
// todo У нас є об'єкт, у якому зберігаються заробітні плати команди.
// Напишіть код для отримання суми усіх зарплат і збережіть його результат у змінній sum
// Якщо об'єкт salaries порожній, то результат повинен бути 0

const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
}

let sum = 0;
const velues = Object.velues(salaries);

for (const velue of velues) { 
  sun += velue;
}

console.log(sum);



//-----3

// todo Створіть об'єкт calculator із трьома методами
// read(a, b) - приймає два аргументи і зберігає їх як властивості об'єкта
// sum() повертає суму збережених значень
// mult() помножує збережені значення і повертає результат

const calculator = {
  read (a,b)
}



//-----4
// todo Напишіть функцію calcTotalPrice(stones, stonesName), яка приймає масив об'єктів та рядок із назвою каменя.
// Функція рахує і повертає загальну вартість каменів з таким іменем, ціною та кількістю з об'єкта

const stonesArray = [
  { name: 'Ізумруд', price: 1300, quantity: 4 },
  { name: 'Брилліант', price: 2700, quantity: 6 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Щебінь', price: 150, quantity: 100 },
]





//-----5
// todo Напишіть функцію updateObject, яка приймає об'єкт і повертає новий об'єкт без вказаних параметрів
// Результат, що очікується ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}





//-----6
// Напишіть функцію, яка повертає новий масив без вказаних значень.Використовуйте примітиви
// Очікується [1, 2, 3, 1, 2] без [1, 2] => [3]






//-----7
// Напиши скрипт керування особистим кабінетом інтернет банку.
// Є об'єкт account, в якому потрібно реалізувати методи роботи із балансом та історією транзакцій

// Типів транзакцій всього два.Можна або покласти гроші на рахунок, або зняти гроші з рахунка

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
}

// Кожна транзакція - це об'єкт із властивостями id, type, amount

const account = {
  //поточний баланс рахунку
  balance: 0,

  //історія транзакцій
  transactions: [],

  // Метод створює та повертає об'єкт транзакцій
  // Приймає суму та тип транзакції

  createTransaction(type, amount) {
    return {
      type,
      amount,
    }
  },

  // Метод відповідає за додавання суми до балансу.
  // Приймає суму транзакції
  // Викликає createTransaction для створення об'єкта транзакції
  // Після чого додає його до історії транзакцій

  deposit(amount) {},

  // Метод відповідає за зняття суми з балансу.
  // Приймає суму тразакцій.
  // Викликає createTransaction для створення об'єкта транзакції
  // Після чого додає його до історії транзакцій
  // Якщо amount більше за поточний баланс, виводимо повідомлення про те, що на рахунку недостатньо коштів

  withdraw(amount) {},

  // Метод, що повертає поточний баланс
  getBalance() {},

  // Метод шукає та повертає об'єкта транзакції по id
  getTransactionDetails(id) {},

  // Метод повертає кількість коштів певного типу тразакції зі всієї історії транзакції
  getTransactionType(type) {},
}








//-----8
// Напишіть функцію, яка розверає масив у зворотньому напрямку.Метод reverse() не використовувати
// const arrNumber = [ 11, 9, 2, 1 ]






//-----9
// Напишіть функцію, яка очистить масив від небажаних значень, таких як false, undefined, порожні рядки, нуль, null
// Результат, що очікується[0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]






//-----10
// Напишіть фукнцію, яка порівнює два масиви і повертає true, якщо вони ідентичні
// Очікується([1, 2, 3], [1, 2, 3]) => true
// Очікується([4, 5, 5], [1, 2, 3]) => false
// Очікується([4, 5, 5,6,7], [1, 2, 3]) => false





//-----11
// Напишіть функцію, яка перетворює глибокий масив в одномірний. Не використовувати array.flat()
// Очікується[1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]








//-----12
// Напишіть функцію, що прибирає значення, які повторюються
// Очікується["a",1, 2, "b",3, 1, 2,"a"] => ["a", 1, 2 ,"b" , 3]
