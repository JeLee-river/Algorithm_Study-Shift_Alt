const parseInput = (inputArray) => {
	const accountArray = inputArray.map((account) => account.split(' '));
	return accountArray;
}

const isSaving = (N, accountArray) => {
	let asset = 0;

	for (let i = 0; i <= accountArray.length-1; i+=1){
		const [accountName, money] = accountArray[i];
		if(accountName === 'in'){
			asset += Number(money);
		} else {
			asset -= Number(money);
		}

		if(asset < 0){
			return 'fail';
		}
	}
	
	return 'success';
}

// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	const inputArray = [];
	let N;
	
	for await (const line of rl) {
		if(!N){
			N = line;
		} else {
			inputArray.push(line);
		}
		
		rl.close();
	}

	const accountArray = parseInput(inputArray);
	console.log(isSaving(N, accountArray));
	
	process.exit();
})();
