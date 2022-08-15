import Endpoint from "../config/endpoint";
import Game from "./game";

const axios = require("axios");

let key = "97B27B336B15D2AF683F9AC509191D6F";
let steamid = "76561198154985356";

let games: Game[] = [];

const getOwnedGames = async () => {
    if (games.length == 0) {
        let response = await axios.get(Endpoint.GetOwnedGames + "?key=" + key + "&steamid=" + steamid + "&format=json");
        ((response as any)["data"]["response"]["games"] as Game[]).forEach(game => {
            let newGame : Game = { 
                appid : game.appid, 
                playtime_forever: game.playtime_forever,
                achieved: 0,
            }
            games.push(newGame);
        });
    }
}

const getSteamUserName = async () => {
    let response = await axios.get(Endpoint.GetPlayerSummaries + "?key=" + key + "&steamids=" + steamid + "&format=json");
    return (response as any)["data"]["response"]["players"][0]["personaname"];
}

const getSteamTimePlayed = async () => {
    let totalTimePlayed = 0;
    
    await getOwnedGames();

    games.forEach(game => {
        totalTimePlayed += game.playtime_forever!;
    });

    return totalTimePlayed / 60;
}

const getPlayerAchievements = async (appid: string) => {
    let game = games.find(game => game.appid == appid);
    try {
        let response = await axios.get(Endpoint.GetPlayerAchievements + "?appid=" + appid + "&key=" + key + "&steamid=" + steamid);
        game = { ...game!, achievements: (response as any)["data"]["playerstats"]["achievements"] };
        game.achieved = game.achievements!.filter(achievement => achievement.achieved == 1).length;
        games.splice(games.findIndex(game => game.appid == appid), 1, game);
    } catch (error) {
    }
}

const sumAchieved = async () => {
    let totalAchieved = 0;

    await getOwnedGames();

    await Promise.all(games.map(async (game) => {
        await getPlayerAchievements(game.appid);
      }));

    games.forEach(game => {
        totalAchieved += game.achieved;
    })

    return totalAchieved;
}

export { getSteamUserName, getSteamTimePlayed, getOwnedGames, sumAchieved };