function solution(babbling) {
    const isValidWord = (word) => {
        const validWords = ['aya', 'ye', 'woo', 'ma'];
        let target = word;
        
        for (let i = 0; i <= validWords.length - 1; i += 1){
            if(target.includes(validWords[i].repeat(2))){
                return false;
            }
        }
        
        for (let i = 0; i <= validWords.length - 1; i += 1){
            const splited = target.split(validWords[i]);
            target = splited.join(' ');
        }

        return (target.split(' ').join('').length === 0);
    }

    return babbling.reduce((count, bab) => isValidWord(bab) ? count + 1 : count, 0);
}