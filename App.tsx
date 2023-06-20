import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./src/screens/home";
import { Upload } from "./src/screens/upload";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Upload: undefined;
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Upload" component={Upload} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
