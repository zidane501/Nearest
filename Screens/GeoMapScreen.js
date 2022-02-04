import React, { useEffect, useState } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
  PermissionsAndroid,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import ButtonRenderingGoogle from "../components/ButtonRenderingGoogle";
import GeoMap from "../components/GeoMap";

export default function GeoMapScreen() {
  const [mapMarkersPosition, setMapMarkersPosition] = useState([]);
  useEffect(() => {
    // console.log("GeoMapScreen mapMarkersPosition:", mapMarkersPosition);
  }, [mapMarkersPosition]);

  // useEffect(async () => {
  //   await requestLocationPermission();
  // }, []);

  return (
    <View style={styles.global}>
      <View style={tw`h-1/2`}>
        <GeoMap mapMarkersPosition={mapMarkersPosition} />
      </View>
      <View style={tw`h-1/2`}>
        <ButtonRenderingGoogle setMarkers={setMapMarkersPosition} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  global: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
