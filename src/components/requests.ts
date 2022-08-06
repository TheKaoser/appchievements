import { Dispatch, SetStateAction } from "react";
import Endpoint from "../config/endpoint";
import Field from "../config/fields";

const axios = require("axios");

let key = "97B27B336B15D2AF683F9AC509191D6F";
let steamid = "76561198154985356";

const getSteamUserName = async () => {
    let response = await axios.get(Endpoint.PlayerSummaries + "?key=" + key + "&steamids=" + steamid + "&format=json");
    return (response as any)["data"]["response"]["players"][0]["personaname"];
}

const getSteamTimePlayed = async () => {

    let totalTimePlayed = 0;
    let gameTimePlayed = 0;
    
    let response = await axios.get(Endpoint.GetOwnedGames + "?key=" + key + "&steamid=" + steamid + "&format=json");
    let games = (response as any)["data"]["response"]["games"];

    (games as any[]).forEach(game => {
        gameTimePlayed = game["playtime_forever"];
        totalTimePlayed += gameTimePlayed;
    });

    return totalTimePlayed/60;
}

export { getSteamUserName, getSteamTimePlayed };