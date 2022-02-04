import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

const HomeScreen = () => {
  return (
    <SafeAreaView style={(tw`bg-white h-full`, styles)}>
      <View style={(tw`p-5`, { alignItems: "center" })}>
        <Image
          source={require("../Pics/neerest_logo.png")}
          style={{
            height: 150,
            width: 150,
            resizeMode: "contain",
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where from?"
          minLength={2}
          enablePoweredByContainer={false}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
});
