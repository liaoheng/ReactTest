"use strict";
import React, { Component } from "react";
import { StyleSheet, Text, TextInput, Button, View, Image } from "react-native";
var ToolbarAndroid = require("ToolbarAndroid");
var ToastAndroid = require("ToastAndroid");

class LoginScreen extends Component {
  static navigationOptions = {
    header:null
  };
  render() {
    const { navigate } = this.props.navigation;
    function onClickLogin() {
      navigate("Home");
      ToastAndroid.show("Success!", ToastAndroid.SHORT);
    }
    return (
      <View style={styles.fullView}>
        <ToolbarAndroid
          title="Login"
          style={styles.toolbar}
          titleColor="#FFFFFF"
        />
        <View style={styles.logo}>
          <Image source={require("../image/logo.png")} />
        </View>
        <View style={styles.fromView}>
          <TextInput placeholder="mail" style={styles.inputMail} />
          <TextInput placeholder="password" style={styles.inputPW} />
          <Button
            onPress={onClickLogin}
            title="Login"
            style={styles.buttonLogin}
            color="#3F51B5"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fullView: {
    flex: 1
  },
  toolbar: {
    backgroundColor: "#3F51B5",
    height: 56
  },
  fromView: {
    margin: 20
  },
  logo: {
    alignItems: "center",
    marginTop: 40
  },
  inputMail: {
    height: 48,
    justifyContent: "center",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3
  },
  inputPW: {
    height: 48,
    justifyContent: "center",
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  buttonLogin: {
    marginTop: 10,
    height: 40
  }
});

module.exports = LoginScreen;
