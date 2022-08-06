import React, { useState } from "react";
import { Text, Image, View, StyleSheet } from "react-native";

import Colors from "../config/colors";
import Endpoint from "../config/endpoint";
import Field from "../config/fields";
import SteamRequests from "./requests";

const MainScreen = () => {
  const [pageData, setPageData] = useState({
    userName: "",
    userLevel: 0,
    timePlayed: 0,
    achievements: 0,
    percentage: 0,
    topGames: [
      {
        name: "",
        hours: 0,
        unlockedAchievements: 0,
        totalAchievements: 0,
      },
      {
        name: "",
        hours: 0,
        unlockedAchievements: 0,
        totalAchievements: 0,
      },
      {
        name: "",
        hours: 0,
        unlockedAchievements: 0,
        totalAchievements: 0,
      },
    ]
  });

  SteamRequests({endpoint: Endpoint.PlayerSummaries, fieldName: Field.steamName}).then(x => {
    setPageData({...pageData, userName: x});
  });

  return (
    <View style={styles.container}>
      <Text style={styles.steam}>{pageData.userName}</Text>
      {/* <Image
        source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
        // source={{uri: "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg"}}
        // source={{uri: 'http://media.steampowered.com/steamcommunity/public/images/apps/' + { steamGameImage }}}
        style={{ width: 200, height: 100 }}
      /> */}
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  steam: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
});