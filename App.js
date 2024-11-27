import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import DatosPaciente from "./src/screens/DatosPacienteScreen";
import { extendTheme } from "native-base";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import LoginScreen from "./src/screens/LoginScreen";
import SignUp from "./src/screens/SignUpScreen";



const theme = extendTheme({
  colors: {
    primary: {
      50: "#e3f2fd",
      100: "#bbdefb",
      200: "#90caf9",
      300: "#64b5f6",
      400: "#42a5f5",
      500: "#2196f3",  // color principal
      600: "#1e88e5",
      700: "#1976d2",
      800: "#1565c0",
      900: "#0d47a1",
    },
  },
});
const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();
/*
const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Inicio">
          <Drawer.Screen name="Inicio" component={HomeScreen} />
          <Drawer.Screen name="Notifications" component={NotificationsScreen} />
          <Drawer.Screen name="Perfil Del Usuario" component={ProfileScreen} />
          <Drawer.Screen name="Medición De Signos" component={BigData} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};*/
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          {isAuthenticated ? (
            <Drawer.Navigator initialRouteName="Inicio">
              <Drawer.Screen name="Inicio" component={HomeScreen} />
              <Drawer.Screen name="Medicion de Signos" component={DatosPaciente} />
            </Drawer.Navigator>
          ) : (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Inicio">
                {(props) => (
                  <LoginScreen {...props} setIsAuthenticated={setIsAuthenticated} />
                )}
              </Stack.Screen>
              <Stack.Screen name="SignUp" component={SignUp} />

            </Stack.Navigator>
          )}
        </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
