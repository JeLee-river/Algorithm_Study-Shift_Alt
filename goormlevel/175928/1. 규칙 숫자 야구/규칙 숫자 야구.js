function getStrikeTable(numbers, answer){
	const strikeTable = new Map();
	
	numbers.forEach((number, index) => {
		if(number === answer[index]){
			strikeTable.set(number, index);
		}
	});
	
	return strikeTable;
}

function handleFail(number, userNumberSet){
	const convertedNumber = Number(number);
	let newNumber = (convertedNumber + 1)%10;
	while(userNumberSet.has(String(newNumber))){
		newNumber = (newNumber + 1)%10;
	}
	
	return String(newNumber);
}

function handleBall(numbers, strikeTable){
	const targetNumbers = numbers.filter((number) => !strikeTable.has(number));
	const lastNumber = targetNumbers.pop();
	targetNumbers.unshift(lastNumber);
	
	strikeTable.forEach((index, number) => {
		targetNumbers.splice(index, 0, number);
	});
	
	return targetNumbers;
}

function play(userNumbers, answer, playTimes){
	const answerSet = new Set(answer);
	const userNumberSet = new Set(userNumbers);
	const strikeTable = getStrikeTable(userNumbers, answer);

	if(strikeTable.size === answer.length){
		return playTimes;
	}
	
	let newUserNumbers = [...userNumbers];
	let isBall = false;
	
	userNumbers.forEach((number, index) => {
		// ball
		if(answer[index] !== number && answerSet.has(number)){
			isBall = true;
		}
		
		// fail
		if(!answerSet.has(number)){
			const newNumber = handleFail(number, userNumberSet);
			userNumberSet.delete(number);
			userNumberSet.add(newNumber);
			newUserNumbers[index] = newNumber;
		}
	});
	
	if(isBall){
		newUserNumbers = handleBall(newUserNumbers, strikeTable);
	}
	
	return play(newUserNumbers, answer, playTimes+1);
}

const readline = require('readline');

(async () => {
	let rl = readline.createInterface({input: process.stdin});
	let answerNumber;
	let initialInput;
	
	for await (const line of rl){
		if(!answerNumber){
			answerNumber = line;
		} else {
			initialInput = line;
		}

		if(answerNumber && initialInput){
			rl.close();
		}
	}
	
	const answerArray = answerNumber.split('');
	const userNumberArray = initialInput.split('');
	const playTimes = play(userNumberArray, answerArray, 1);
	console.log(playTimes);
	
	process.exit();
})();
