import React from "react";

import { Button, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../App";

export const Home: React.FC<
  NativeStackScreenProps<RootStackParamList, "Home">
> = ({ navigation }) => {
  return (
    <View className="bg-black h-screen flex justify-center items-center">
      <Text className="text-pink-500">
        Open up App.tsx to start working on your app!
      </Text>
      <Button
        title="Go to Upload"
        onPress={() => navigation.navigate("Upload")}
      />
    </View>
  );
};
