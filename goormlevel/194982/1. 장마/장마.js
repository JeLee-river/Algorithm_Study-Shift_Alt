function convertInput(input) {
	return input.map((inputString) => inputString.split(' ').map(Number));
}

function drain(targetHouse, groundHeight) {
	for (const house of targetHouse){
		groundHeight[house-1] -= 1;
	}
}

function flood(start, end, drainHouse, groundHeight) {
	for (let house = start; house <= end; house+=1){
		drainHouse.add(house);
		groundHeight[house-1] += 1;
	}
}

function getGroundHeight(groundHeight, rainyDays) {
	const drainHouse = new Set();
	
	rainyDays.forEach(([start, end], index) => {
		flood(start, end, drainHouse, groundHeight);
		
		if((index + 1)%3 === 0){
			drain(drainHouse, groundHeight);
			drainHouse.clear();
		}
	});
	
	return groundHeight;
}

const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	const rainyDays = [];
	let groundHeight = null;
	let N = null;
	let M = null;
	
	for await (const line of rl) {
		if(!N && !M){
			const splitFirstLine = line.split(' ');
			N = splitFirstLine[0];
			M = splitFirstLine[1];
			continue;
		}
		
		if(!groundHeight){
			groundHeight = line;
		} else {
			rainyDays.push(line);
		}
		
		if(rainyDays.length === M){
			rl.close();
		}
	}
	
	const convertRainyDays = convertInput(rainyDays);
	const heightArray = groundHeight.split(' ').map(Number);
	const answerHeight = getGroundHeight(heightArray, convertRainyDays);
	
	console.log(answerHeight.join(' '));
	process.exit();
})();
