import React, { useEffect, useState } from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import Constants from 'expo-constants'

import Colors from "../config/colors";
import Endpoint from "../config/endpoint";
import Field from "../config/fields";
import { getOwnedGames, getTotalAchievements, getSteamTimePlayed, getSteamUserName, sumAchieved } from "./requests";

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

  useEffect(
    () => {
      let auxPageData = pageData;
      Promise.all([
        getSteamUserName().then(requestedUserName => {
          auxPageData.userName = requestedUserName;
        }),
        getOwnedGames()
      ]).then(() => {
        Promise.all([
          getSteamTimePlayed().then(requestedTimePlayed => {
            auxPageData.timePlayed = requestedTimePlayed;
          }),
          sumAchieved().then(requestedAchieved => {
            auxPageData.achievements = requestedAchieved;
          })
        ]).then(() => {
          auxPageData.percentage = Math.round(auxPageData.achievements / getTotalAchievements() * 100);
          setPageData({...auxPageData});
      })})
    }, []
  );

  return (
    <View style={styles.container}>
      <Text style={styles.steam}>{pageData.userName}</Text>
      <Text style={styles.steam}>{pageData.timePlayed}</Text>
      <Text style={styles.steam}>{pageData.achievements}</Text>
      <Text style={styles.steam}>{pageData.percentage}</Text>
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
    marginTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between"
  },
  steam: {
  },
});
