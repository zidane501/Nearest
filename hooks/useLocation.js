import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import Geolocation from "react-native-geolocation-service";
import * as Location from "expo-location";

const useLocation = (runEff) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      // console.log("running location useEff");
      let { status } = await Location.requestForegroundPermissionsAsync();
      // console.log(status);
      // console.log("status !== 'granted'", status !== "granted");
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        // console.log("Permission to access location was denied");
        return;
      }
      // console.log("here");
      let location = await Location.getCurrentPositionAsync({});
      // console.log("here too?");

      // console.log(location);
      setLocation(location);
      // console.log("location:", location);
    };
    getLocation();
  }, [runEff]);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  //   // console.log(text);r
  //   Geolocation.getCurrentPosition(
  //     (position) => {
  //       // console.log(position);
  //       setPositionObj(position);
  //     },
  //     (error) => {
  //       // See error code charts below.
  //       // console.log("Nearest error:", error.code, error.message);
  //     },
  //     { enableHighAccuracy: false, timeout: 15000, maximumAge: 1000 }
  //   );
  return location;
};

export default useLocation;
