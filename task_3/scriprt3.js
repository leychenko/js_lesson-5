

//================================= Задача 3 ====================================


// Задача 3. Вивести таблицю з одним рядком і  7 стовпцями.


for(i = 0; i < 1; i++){
	document.write(`<table><tr>`)

		for(j = 1; j <= 7; j++){
			let number = j
			document.write(`<td>${number}</td>`)
		}

	document.write(`</tr></table>`)
}

