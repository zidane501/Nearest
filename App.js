import { StyleSheet, Text, View } from "react-native";
import GeoMapScreen from "./Screens/GeoMapScreen";
import CreateScreen from "./Screens/CreateScreen";
import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from "./Screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context"; // For the Icons so they dont go into areas where they shouldnt (like SafeAreaView prevents the view to not go into the topbar)
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="GeoMapScreen"
              component={GeoMapScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="CreateScreen"
              component={CreateScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
