import { FlatList, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import useLocation from "../hooks/useLocation";
import * as Location from "expo-location";
import { GOOGLE_MAPS_APIKEY } from "@env";
import tw from "tailwind-react-native-classnames";

const GoogleData = ({ change, searchText, setMarkers }) => {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  // const location = useLocation(change);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      // console.log("status", status);
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      // let location = await Location.getCurrentPositionAsync({});

      // setLocation(location);
      // // console.log(location);

      const dataJsonPromise = await fetch(
        `https://randomuser.me/api/?results=${searchText}`
      );
      // const dataJsonPromise = await fetch(
      //   `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.coords.latitude}%2C${location.coords.longitude}&radius=200&keyword=${searchText}&key=${GOOGLE_MAPS_APIKEY}`
      // );
      const dataJson = await dataJsonPromise.json();
      // console.log(dataJson.results);
      setData(dataJson.results);
      setMarkers(data);
    })();

    //
    // console.log("rendering");
  }, [change]);

  const renderItem = ({ item }) => {
    if (data[0].name.last) {
      return (
        <Text>
          {item.name.first} {item.name.last}
        </Text>
      );
    } else {
      <Text>{item.name}</Text>;
    }
  };
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        // keyExtractor={(item) => item.place_id}
        keyExtractor={(item) => item.name.first + item.name.last}
      />
    </View>
  );
};

export default GoogleData;

const styles = StyleSheet.create({});
