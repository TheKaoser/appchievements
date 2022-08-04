import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
const axios = require('axios');

// function getData()
// {

  // axios.get('https://api.github.com/zen')
  //     .then(function (res: any) {
  //       // handle success
  //       setResponse(JSON.stringify(res))
  //       currentResponse = response;
  //     })
  //     .catch(function (err: any) {
  //       // handle error
  //       console.log(err);
  //     })
  //     .then(function () {
  //     });
// }

// getData()


export default function App() {
  console.log("HEEEEEEEEEEEY")
  const [response, setResponse] = useState('asdfsq')
  
  const WelcomeScreen = () => (
    <View>
      <Button title='Hola'>Step One</Button>
      <Text style={styles.steam}>
        { response }
      </Text>
     </View>
  );



  let key = "97B27B336B15D2AF683F9AC509191D6F";
  let steamid = "76561198154985356";

  // axios.get('https://cors-anywhere.herokuapp.com/http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/', {
  //   headers: {
  //     "Access-Control-Allow-Headers": "*"
  //   }
  // }).then(function (res: any) {
  //       if (response != "asdfsq")
  //       {
  //         setResponse(JSON.stringify(res))
  //       }
  //     });

  axios.get('http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=' + key + '&steamid=' + steamid + '&format=json').then(function (res: any) {
    console.log(res)
        if (res != "asdfsq")
        {
          setResponse(JSON.stringify(res))
        }
      });
  // axios.get('http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=' + key + '&steamid=' + steamid + '&format=json').then(function (res: any) {
  //       if (response != "asdfsq")
  //       {
  //         setResponse(JSON.stringify(res))
  //       }
  //     });

  return (
    <View style={styles.container}>
      <Text>SE VIENEEEEEEEEEEEE</Text>
      <StatusBar style="auto" />
      <WelcomeScreen ></WelcomeScreen>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  steam: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});