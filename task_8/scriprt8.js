

//================================= Задача 8 ====================================
// Задача 8. Користувач загадує число. За 3 спроби комп’ютер намагається вгадати число користувача (використати confirm).

const userNumberChoise = parseInt(prompt("Загадайте число"))
const minNumber = 0
const maxNumber = 100


for (i = 0; i < 3; i++){
	let compChoiseRandomNumber =
    minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1))
	if(!isFinite(userNumberChoise))
	break
	let random = confirm(`Вгадав Ваше число ${compChoiseRandomNumber}?`)
	if (random){ alert("Computer win")
	   break}
		alert("Computer Looser!!!!!")
}





