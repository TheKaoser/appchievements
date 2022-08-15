interface Game { 
    appid: string, 
    playtime_forever: number,
    achievements?: [
        {
            apiname: string,
            achieved: number,
        }
    ],
    achieved: number,
};

export default Game;