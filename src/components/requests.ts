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

export default getSteamUserName;