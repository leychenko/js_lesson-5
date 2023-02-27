

//================================= Задача 11 ====================================
// Задача 11. Знайти суму 5 непарних чисел, що знаходяться між заданими користувачем числами.

const firstUserNamber = parseInt(prompt("Enter first number"))
const secondUserNamber = parseInt(prompt("Enter second number"))

let oddNumbers = 0
let count = 0
if (firstUserNamber < secondUserNamber) {
  for (i = firstUserNamber; i < secondUserNamber && count < 5; i++) {
    if (i % 2 != 0) {
      oddNumbers += i
      count++
    }
  }
}
document.write(` Сумма 5 непарних чисел = ${oddNumbers}`)