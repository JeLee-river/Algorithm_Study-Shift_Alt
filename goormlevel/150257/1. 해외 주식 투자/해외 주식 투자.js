const readline = require('readline');

function stockPlanner(stockList){
	const amount = stockList.map(([count, cost], index) => {
		const assessment = Math.floor((count * cost) * 10) / 10;
		return [assessment, index+1];
	});
	
	amount.sort((prev, next) => {
		if(prev[0] !== next[0]){
			return next[0] - prev[0];
		}
		
		return prev[1] - next[1];
	});
	
	return amount.map(([assessment, index]) => index);
}


(async () => {
	const rl = readline.createInterface({input: process.stdin});
	let N;
	const stockList = [];
	
	for await (const line of rl){
		if(!N){
			N = Number(line);
		} else {
			stockList.push(line.split(' ').map(Number));
		}
		
		if(stockList.length === N){
			rl.close();
		}
	}
	
	const answer = stockPlanner(stockList).join(' ');
	console.log(answer);
})();