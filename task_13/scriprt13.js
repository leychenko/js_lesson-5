//================================= Задача 13 ====================================
// Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M. Маючи К снарядів користувач намагається потопити корабель

const areaN = parseInt(
  prompt("Введите количество клеток поля по X от 1 до 5", "5")
)
const areaM = parseInt(
  prompt("Введите количество клеток поля по Y от 1 до 5", "5")
)
const userRocketK = parseInt(prompt("Введите количество ракет"))

const shipPositionX = 1 + Math.floor(Math.random() * areaN)
const shipPositionY = 1 + Math.floor(Math.random() * areaM)
let userBombX
let userBombY

for (i = 1; i <= userRocketK; i++) {
  userBombX = parseInt(prompt("Введите коодинату выстрела по Х оси"))
  userBombY = parseInt(prompt("Введите коодинату выстрела по Y оси"))
  if(userBombX === shipPositionX && userBombY === shipPositionY)
  {document.write(`<p class="win">Вы потопили корабль</p>`)
  break}
  else document.write(`<p>Выстрел #${i}:Вы промазали</p>`)
}
document.write(`<p>Корабль был  по координатам: Х - ${shipPositionX}</p>
					<p>и по координатам: Y - ${shipPositionY}</p>`)