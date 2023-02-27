//================================= Задача 14 ====================================
// Задача 14. Каса. Користувачу повідомляють суму, яку йому треба сплатити. Користувач поступово вводить суму грошей до тих пір, поки суми не буде достатньо для оплати товарів (кожного разу користувачу повідомляють, яку ще суму потрібно ввести). 

let cashRegister = 0
const price = 2500
let userCash = 0
let count = 0
let remainder = 0
let abovePrice = 0

alert(`Внесіть гроші з Вас ${price} $`)

do {
  userCash = parseFloat(
    prompt(`До сплати залишилось  ${remainder = price - cashRegister} $`)
  )
  cashRegister += userCash
  count = price - userCash
  abovePrice = cashRegister - price
} while (cashRegister < price)

document.write(
  `<p class="pay">Ви повністю сплатитли за товар.<br> Дякуємо Вам та бажаємо гарного дня!!!!!<br> Переплата: <span>${abovePrice} $</span></p>`
)


