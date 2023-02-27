

//================================= Задача 15 ====================================
// Задача 15. Користувача поступово вводить показники температури протягом року. Знайти середню температуру

let averageTeperatureForYear = 0
const monthInYear = 12

for (i = 1; i <= monthInYear; i++) {
	let averageTeperatureForMonth = parseInt(prompt(`Введіть темпаратуру за ${i} місяць`, "0"))
	if (!isFinite(averageTeperatureForMonth))
	break
    averageTeperatureForYear =
      averageTeperatureForYear + averageTeperatureForMonth
    if (i == 12)
				document.write(
          `<p>Середня температура за ${monthInYear} місяців становить:${averageTeperatureForYear.toFixed(
            1
          ) / monthInYear.toFixed(2)} </p>`
        ) 
}

