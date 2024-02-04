function solution(routes) {
    routes.sort((prev, next) => prev[0]-next[0]);
    const range = routes[0];
    let camera = 1;
    for(let i = 1; i <= routes.length-1; i+=1){
        if(range[1] < routes[i][0]){
            range[1] = routes[i][1];
            camera +=1;
        } else {
            range[1] = Math.min(range[1], routes[i][1]);
        }
        range[0] = routes[i][0];
    }
    return camera;
}