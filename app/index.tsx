import { images } from "@/constants";

import { Link } from "expo-router";
import { ImageBackground } from "react-native";

export default function Index() {
  return (
    <ImageBackground
      resizeMode="cover"
      source={images.signUpCar}
      className="flex-1  flex justify-center items-center"
    >
      <Link
        href="/(root)/(tabs)/home"
        className=" text-rose-600 font-mono-italic"
      >
        Go to Tab Screen
      </Link>
    </ImageBackground>
  );
}
