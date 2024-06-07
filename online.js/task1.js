//  Використовуючи if...else напиши код, який буде запитувати у користувача "Яка офіційна назва JavaScript?".
//    Якщо користувач вводить "ECMAScript", то показати за допомогою alert("Вірно!")
//    У інших випадках показати "Не знаєте? ECMAScript!"
//const message = prompt("Яка офіційна назва JavaScript?")
//console.log(message)
//if (message.toLowerCase() === "ECMAScript".toLowerCase()) {
 //   alert("Вірно!")
//} else {
  //  alert("Не знаєте? ECMAScript!")}




//  Напишіть програму, яка отримає від користувача число(кількість хвилин)
// і виведе у консоль рядок у форматі годин та хвилин
// 70 === 01: 10
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

//const globalMinutes = 90
//const hours = String (Math.floor(globalMinutes / 60)).padStart(2,0);
//const minets = String(globalMinutes % 60).padStart(2, 0);
//console.log(`${hours}:${minets}`);


//  Напишіть цикл, який виводить у консоль числа від max до min у порядку зменшення.
// У консоль виведіть усі парні числа від max  до min

//const max = 50
//const min = 23
//for (let i = max; i >= min; i -= 1) { 
//    if (i % 2 === 0) {
 //       console.log(i)
 //   } 
//}

// За допомогою цикла for додайте всі парні числа від min до max

//const max = 50
//const min = 0
//let sum = 0

//for (let i = min; i <= max; i += 1) { 
//    if (i % 2 === 0) {
//        sum += i;
//    } 
//}
//console.log(sum)



// При завантаженні сторінки користувачу пропонується у prompt ввести число.
//     Те, що вводить користувач, додається до значення змінної total.
// Операція вводу числа триває до тих пір, поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив вводити числа і натиснув на кнопку Cancel,
//     показувати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку, що користувач ввів саме число, а не довільні символи, не потрібно.

//let message = prompt("Введіть число");
//let count = 0;

//while (message !== null) { 
 //   count += Number(message);
 //   message = prompt("Введіть число");
//}
//    console.log(`Count: ${count}`);


    //Напиши код, який буде запитувати логін за допомогою prompt та логувати результат у консоль браузера.
// Якщо користувач вводить "Адмін", то prompt запитує пароль.Якщо нічого не введено або натиснута клавіша Esc,
//     вивести рядок "Відмінено"
//     У іншому випадку вивести рядок "Я вас не знаю!"

// Пароль перевіряти так:
// якщо введено пароль "Я головний", то вивести "Вітаю!",
//     у іншому випадку виводити рядок "Невірний пароль!".

//const login = prompt("введіть логін");
//if (login === "Адмін") {
 // const password = prompt(" введіть пароль");
 // if (password === "Я головний") {
 //   alert("Вітаю!")
//  } else {
 //   alert("Невірний пароль!")
 // }

//} else if (!login) { 
//alert("Відмінено")
//}else{ 
//  alert("Я вас не знаю!")
//}
// === " " || login === null - це на заміну із знаком оклику


//  Напиши цикл, який пропонує ввести число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити ввести ще раз і так далі.
// Цикл повинен запитувати число, поки користувач не введе число більше 100,
//   або не натисне кнопку "Відміна"


//let message = prompt("Введіть число >100");
//while (message !== null && message < 100) { 
 //    message = prompt("Введіть число >100");
//}
 //   console.log(message);
 
 
 
 //Дано рядок, який складається із символів.Наприклад, 'abcde'.
//     Перевірте, що першим символом цього рядка є літера 'a'.
//  Якщо це так - вивести "так", у іншому випадку вивести "ні"

//const string = 'abcde'
//const stringSecond = 'bcde'

//function checkString(str) { 
  //if (str[0] === "a") {
    //return "так"
  //} else { 
    //return "ні"
 // }
//}

//console.log(checkString(string));
//console.log(checkString(stringSecond));