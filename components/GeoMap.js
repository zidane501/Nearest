import React from "react";
import { StyleSheet, Text, View, StatusBar, Platform } from "react-native";
import tw from "tailwind-react-native-classnames";
import MapView, { Marker } from "react-native-maps";

export default function GeoMapScreen() {
  const markers = [
    {
      latlng: {
        latitude: 55.676098,
        longitude: 12.568337,
      },
      title: "Mit sted",
      description: "Mit Kbh",
    },
  ];
  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: 55.676098, //SF 37.78825,
        longitude: 12.568337, //SF -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          coordinate={marker.latlng}
          title={marker.title}
          description={marker.description}
        />
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
});
