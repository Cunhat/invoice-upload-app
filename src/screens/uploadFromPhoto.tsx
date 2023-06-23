import React, { useEffect, useRef, useState } from "react";
import {
  Pressable,
  PressableProps,
  SafeAreaView,
  Text,
  View,
  Image,
  Button,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { MainLayout } from "../components/layouts/mainLayout";

export const UploadFromPhoto = () => {
  let cameraRef = useRef(null);
  const [photo, setPhoto] = React.useState<string>("");

  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  useEffect(() => {
    console.log("permission", typeof permission);
    (async () => {
      await requestPermission();
    })();
  }, []);

  const takePic = async () => {
    console.log("takePic");
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef?.current?.takePictureAsync(options);

    setPhoto(newPhoto);
  };

  if (photo) {
    // let sharePic = () => {
    //   shareAsync(photo.uri).then(() => {
    //     setPhoto(undefined);
    //   });
    // };

    // let savePhoto = () => {
    //   MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
    //     setPhoto(undefined);
    //   });
    // };

    return (
      <SafeAreaView className="flex-1 bg-black">
        <Image
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
          className="items-stretch flex-1"
        />
        {/* <Button title="Share" onPress={sharePic} />
        {hasMediaLibraryPermission ? (
          <Button title="Save" onPress={savePhoto} />
        ) : undefined} */}
        <Button title="Discard" onPress={() => setPhoto("")} />
      </SafeAreaView>
    );
  }

  if (permission === null) {
    <MainLayout>
      <Text className="text-white">Requesting permissions...</Text>
    </MainLayout>;
  }

  if (!permission?.granted) {
    return (
      <MainLayout>
        <Text className="text-white">Permission denied...</Text>
        <Text className="text-white text-center">
          In order to use the device camera you have to grant permission!
        </Text>
      </MainLayout>
    );
  }

  return (
    <Camera className="flex-1" ref={cameraRef}>
      <View className="bg-black/60 h-[200px] z-10 justify-center items-center mt-auto">
        <CameraButton onPress={() => takePic()} />
      </View>
    </Camera>
  );
};

export interface ButtonProps extends PressableProps {}

const CameraButton: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <View className="border-white w-[20%] h-[40%] rounded-full p-[2px] border-4">
      <Pressable className="bg-white w-full h-full rounded-full" {...props} />
    </View>
  );
};
