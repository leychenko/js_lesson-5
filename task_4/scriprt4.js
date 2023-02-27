//================================= Задача 4 ====================================
// Задача 4.Вивести таблицю з 3 рядків і 7 стовпців
document.write(`<table>`)
for (i = 0; i < 3; i++) {
  document.write(`<tr>`)
    for (j = 1; j <= 7; j++) {
      document.write(`<td>${j}</td>`)
    }
  document.write(`</tr>`)
}
document.write(`</table>`)
