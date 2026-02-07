import { Link } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link
        href="/(root)/(tabs)/home"
        className=" text-rose-600 font-mono-italic"
      >
        Go to Tab Screen
      </Link>
    </View>
  );
}
