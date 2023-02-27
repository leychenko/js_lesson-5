

//=================================Задача 16====================================
// Задача 16. Користувач поступово вводить прибуток магазину за кожен день протягом N тижнів. Знайти загальну величину прибутку та вивести величину прибутку протягом кожного окремого тижня.
const weeksUserInput = parseInt(prompt("Enter quntity weeks"))
let countMoney = 0

const countDays = weeksUserInput * 7
let dayCash 


document.write(`<table>`)
for (i = 1; i <= countDays; i++) {
		dayCash = parseFloat(
      prompt(`Введите выручку за ${i} дней из ${countDays} дней`)
    )
	 if(!isFinite(countDays) || !isFinite(dayCash) )
	 break
    countMoney += dayCash
   
	 document.write(`<tr>
							<td>Внесено грошей за день</td>
							<td>${dayCash.toFixed(2)}</td>
							</tr>`)
}
document.write(`<tr>
						<td>Внесено всього виручки за ${countDays} днів</td>
						<td>${countMoney.toFixed(2)}</td>
						</tr></table>`)




