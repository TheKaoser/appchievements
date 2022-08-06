import { Dispatch, SetStateAction } from "react";
import Endpoint from "../config/endpoint";
import Field from "../config/fields";

const axios = require("axios");

interface Params {
    endpoint: string,
    fieldName: Field
}

const SteamRequests = async (props: Params) => {
    let key = "97B27B336B15D2AF683F9AC509191D6F";
    let steamid = "76561198154985356";

    switch (props.endpoint) {
        case Endpoint.PlayerSummaries:
            (props.endpoint as string) +=
                "?key=" + key + "&steamids=" + steamid + "&format=json";
            break;
        case Endpoint.PlayerSummaries:
            (props.endpoint as string) +=
                "?key=" + key + "&steamid=" + steamid + "&format=json";
            break;
    }

    let response = await axios.get(props.endpoint + "?key=" + key + "&steamid=" + steamid + "&format=json");
    if (response != "") {
        switch (props.fieldName) {
            case Field.steamName:
                return (response as any)["data"]["response"]["players"][0]["personaname"];
            case Field.img_logo_url:
                return ((response as any)["data"]["response"]["players"][0]["personaname"]);
        }
    }
}

export default SteamRequests;