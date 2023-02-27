

//================================= Задача 6 ====================================
// Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком

let countCell = 0

document.write(`<div class="block">`)
for (i = 0; i < 3; i++) {
  document.write(`<table>`)
  for (j = 1; j <= 3; j++) {
    document.write(`<tr>`)
	for (p = 1; p <= 3; p++){
		countCell++
		document.write(`<td>${countCell}</td>`)
	}
	document.write(`</tr>`)
  }
  document.write(`</table>`)
}
document.write(`</div>`)
