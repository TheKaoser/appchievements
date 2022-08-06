import { Dispatch, SetStateAction } from "react";
import Endpoint from "../config/endpoint";
import Field from "../config/fields";

const axios = require("axios");

let key = "97B27B336B15D2AF683F9AC509191D6F";
let steamid = "76561198154985356";


const getSteamUserName = async () => {
    let response = await axios.get(Endpoint.GetPlayerSummaries + "?key=" + key + "&steamids=" + steamid + "&format=json");
    return (response as any)["data"]["response"]["players"][0]["personaname"];
}

const getAchievements = async (appid: string) => {
    let response = await axios.get(Endpoint.GetPlayerAchievements + "?key=" + key + "&steamid=" + steamid);
    return (response as any)["data"]["playerstats"]["achievements"].length;
}

const sumAchievements = async () => {
    let response = await axios.get(Endpoint.GetOwnedGames + "?key=" + key + "&steamid=" + steamid);
    
    ((response as any)["data"]["response"]["games"] as any[]).forEach(game => {
         getAchievements(game["appid"]);
    });
}

export {getSteamUserName, getTotalAchievements};