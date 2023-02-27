//================================= Задача 10 ====================================
// Задача 10.Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами. 

const userMinNumber = parseInt(prompt("Number - 1"))
const userMaxNumber = parseInt(prompt("Number - 2"))

let sumNumbers = 0
let oddcounter = " "
if (userMinNumber < userMaxNumber) {
  for (i = userMinNumber; i < userMaxNumber; i++) {
    sumNumbers += i
    if (i % 2 != 0) oddcounter += i + " "
  }
}

document.write(`<p>Сумма непарных чисел ${sumNumbers}</p>`)
document.write(`<p>Все непарные числа ${oddcounter}</p>`)