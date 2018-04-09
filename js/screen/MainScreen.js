"use strict";
import React, { Component } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
var ToolbarAndroid = require("ToolbarAndroid");
var Alert = require("Alert");

class MainScreen extends Component {
  static navigationOptions = {
    header: null,
    title: "Main"
  };
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View>
        <ToolbarAndroid
          navIcon={require("../image/ic_arrow_back_white_24dp.png")}
          onIconClicked={() => goBack()}
          title="ReactTest"
          style={styles.toolbar}
          titleColor="#FFFFFF"
        />
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to ReactTest!</Text>
          <Text style={styles.instructions}>
            To get started, edit index.js
          </Text>
          <Text style={styles.instructions}>
            Shake or press menu button for dev menu
          </Text>
          <Button
            onPress={this.onClickLearnMore}
            title="Show Alert"
            color="#3F51B5"
          />
        </View>
      </View>
    );
  }
  onClickLearnMore() {
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  toolbar: {
    backgroundColor: "#3F51B5",
    height: 56
  }
});
module.exports = MainScreen;
