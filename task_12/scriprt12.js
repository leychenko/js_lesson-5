//================================= Задача 12 ====================================
// Задача 12.Ігровий автомат. Випадково вибираємо зображення у 3 позиціях. Вибір у кожній позиції вибирається як одне з чотирьох зображень. Вивести ці зображення і повідомити виграш користувача (три перших зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення – 1000грн). Використати цикли і switch (для вибору зображення за номером)
let randomImage
let peanCounter = 0
let cherryCounter = 0
let watermelonCounter = 0
let lemonCounter = 0
let prize = 0

for (i = 1; i <= 3; i++) {
  randomImage = 1 + Math.floor(Math.random() * 4)
  switch (randomImage) {
    case 1:
      peanCounter++
      break
    case 2:
      lemonCounter++
      break
    case 3:
      cherryCounter++
      break
    case 4:
      watermelonCounter++
      break
  }
  document.write(`<img src="../img/${randomImage}.png" alt="">`)

  if (peanCounter === 3) prize = 100
  else if (lemonCounter === 3) prize = 200
  else if (cherryCounter === 3) prize = 500
  else if (watermelonCounter === 3) prize = 1000
  else prize = 0

}
  document.write(`<p>Ваш виграш - ${prize}</p>`)