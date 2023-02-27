

//=================================Задача 7====================================
// Задача 7.Вивести на екран N абзаців (N вводиться користувачем) за зразком:


let userQuantityParagraf = parseInt(prompt("Enter your quantity paragrafs"))

for(i = 1 ;i <= userQuantityParagraf; i++){
	 document.write(`<h1>Заголовок ${i}</h1>`)
	for (j = 1; j <= i; j++) {
    document.write(`<p>Розділ${i} Параграф${j}</p>`)
  }

}



