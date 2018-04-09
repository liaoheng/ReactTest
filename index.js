"use strict";
import React from "react";
import { AppRegistry } from "react-native";
import { StackNavigator, NavigationActions } from "react-navigation";
var MainScreen = require("./js/screen/MainScreen");
var LoginScreen = require("./js/screen/LoginScreen");
var user = require("./js/User");

const LaunchRouter = StackNavigator({
  Home: { screen: MainScreen },
  Login: { screen: LoginScreen }
});

const defaultGetStateForAction = LaunchRouter.router.getStateForAction;

LaunchRouter.router.getStateForAction = (action, state) => {
  if (action.type == NavigationActions.INIT && !user.isLogin) {
    return defaultGetStateForAction(
      NavigationActions.navigate({ routeName: "Login" }),
      state
    );
  }

  return defaultGetStateForAction(action, state);
};

AppRegistry.registerComponent("ReactTest", () => LaunchRouter);
