function solution(wallpaper) {
    const rows = wallpaper.map((folders) => {
        const folder = folders.split('').map((element, index) => {
            return (element === '#') ? index : '';
        });
        return folder;
    });
    
    function calculateRowIndex(rows, direction){
        const target = rows.map((row) => [...row].join(''));
        if(direction === 'start'){
            while(target.length > 0 && target[0].length === 0){
                target.shift();
            }
        } else {
            while(target.length > 0 && target[target.length-1].length === 0){
                target.pop();
            }
        }
        return target.length;
    }

    const startRow = wallpaper.length - calculateRowIndex(rows, 'start');
    const endRow = calculateRowIndex(rows, 'end');

    const removeBlank = rows.map((folders) => {
        return folders.filter((folder) => folder !== '');
    })
    const flatColumn = removeBlank.flat();
    const startColumn = Math.min(...flatColumn);
    const endColumn = Math.max(...flatColumn) + 1;
    
    return [startRow, startColumn, endRow, endColumn]
}