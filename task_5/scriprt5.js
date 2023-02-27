

//================================= Задача 5 ====================================
// Задача 5. 

let countCell = 0

document.write(`<table>`)
for (i = 0; i < 3; i++) {
  document.write(`<tr>`)
  for (j = 1; j <= 3; j++) {
	countCell ++
    document.write(`<td>${countCell}</td>`)
  }
  document.write(`</tr>`)
}
document.write(`</table>`)
