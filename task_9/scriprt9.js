

//================================= Задача 9 ====================================


// Задача 9. Користувач загадує число. Комп’ютер задає питання поки не вгадає число користувача (використати confirm).

const userNumberChoise = parseInt(prompt(`Загадайте число от 1 до 10`))
const minComputerNumber = 1
const maxComputerNumber = 10
let anwerUser
let counter = 1
let compNumberChoise
do {
  compNumberChoise =
    minComputerNumber +
    Math.floor(Math.random() * (maxComputerNumber - minComputerNumber + 1))
  anwerUser = confirm(`Ви загадали это число ${compNumberChoise}`)
} while (anwerUser === false)
counter ++
if (userNumberChoise === compNumberChoise)
  document.write(`<p class="win">Компьютер угадал Ваше число</p>`)
else
  document.write(
    `<p>Вы загадали не это число!!!!</p><p>Ваше число - ${userNumberChoise}</p> `
  )





