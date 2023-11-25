function solution(files) {
    const convertedFiles = files.map((file) => {
        return file.match(/[a-zA-Z-. ]+|[0-9]+/g);
    });
    convertedFiles.sort((a,b) => {
        if(a[0].toUpperCase() !== b[0].toUpperCase()) {
            return a[0].toUpperCase().localeCompare(b[0].toUpperCase());
        }
        
        if(Number(a[1]) !== Number(b[1])) {
            return Number(a[1]) - Number(b[1]);
        }
    });   
    
    return convertedFiles.map((file) => file.join(''));
}