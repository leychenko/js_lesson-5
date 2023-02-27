

//================================= Задача 1 ====================================
// Задача 1. Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем.

const minNumber = 1
const maxNumber = 100
let userQuantityNumber = parseInt(prompt("Enter number items"))

for (let i = 0; i <= userQuantityNumber; i++) {
  const compRandomNumber =
    minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1))
  document.write(`
  <ol>
	<li class="olList">${compRandomNumber}</li>
	</ol>`)
}