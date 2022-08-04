import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function App() {
  console.log("HEEEEEEEEEEEY")

  return (
    <View style={styles.container}>
      <Text>SE VIENEEEEEEEEEEEE</Text>
      <StatusBar style="auto" />
      <WelcomeScreen></WelcomeScreen>
    </View>
  );
}

const WelcomeScreen = () => (
  <View>
    {/* <Header title="Welcome to React Native"/> */}
    <Button title='Hola'>Step One</Button>
    <Text>
      Edit App.js to change this screen and turn it
      into your app.
    </Text>
    <Text >See Your Changes</Text>
    <Text>
      Press Cmd + R inside the simulator to reload
      your app’s code.
    </Text>
    <Text>Debug</Text>
    <Text>
      Press Cmd + M or Shake your device to open the
      React Native Debug Menu.
    </Text>
    <Text>Learn</Text>
    <Text>
      Read the docs to discover what to do next:
    </Text>
   </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
