function solution(genres, plays) {
    const genreStatistics = new Map();
    const genrePlayTimes = new Map();
    const playsTable = new Map();
    
    plays.forEach((times, index) => playsTable.set(index, times));
    
    genres.forEach((genre, index) => {
        const target = genreStatistics.get(genre) ?? [];
        genreStatistics.set(genre, [...target, index]);
        genrePlayTimes.set(genre, (genrePlayTimes.get(genre) ?? 0) + plays[index]);
    });

    const songList = Array.from(genreStatistics.entries());
    songList.sort((prev, next) => genrePlayTimes.get(next[0]) - genrePlayTimes.get(prev[0]));

    const album = songList.map(([genre, songs]) => {
        songs.sort((prev, next) => {
            const prevTimes = playsTable.get(prev);
            const nextTimes = playsTable.get(next);
            if(prevTimes !== nextTimes){
                return playsTable.get(prev) - playsTable.get(next);
            }
            return next - prev;
        });
        return songs.length === 1 ? [songs.pop()] : [songs.pop(), songs.pop()];
    })
    return album.flat();
}