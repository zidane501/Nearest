import { View, Text, PermissionsAndroid } from "react-native";
import React from "react";
import useLocation from "./useLocation";

export default async function requestLocationPermission() {
  try {
    // console.log(
      "PermissionsAndroid.PERMISSIONS.LOCATION:",
      PermissionsAndroid.PERMISSIONS.LOCATION
    );
    // const granted = await PermissionsAndroid.request(
    //   PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    //   {
    //     title: "Nearest",
    //     message: "Neareste App wants to access your location ",
    //     buttonNegative: "Cancel",
    //     buttonPositive: "OK",
    //   }
    // );
    // // console.log("granted", granted);
    // // console.log(
    //   "PermissionsAndroid.RESULTS.GRANTED",
    //   PermissionsAndroid.RESULTS.GRANTED
    // );

    // if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //   // console.log("You can use the location");
    //   alert("You can use the location");
    // } else {
    //   // console.log("location permission denied");
    //   alert("Location permission denied");
    // }
  } catch (err) {
    console.warn(err);
  }
}
