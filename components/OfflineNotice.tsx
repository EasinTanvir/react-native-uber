import { useNetInfo } from "@react-native-community/netinfo";
import React from "react";
import { Text, View } from "react-native";

const OfflineNotice = () => {
  const netInfo = useNetInfo();

  if (
    netInfo.isInternetReachable === true ||
    netInfo.isInternetReachable === null
  )
    return null;
  return (
    <View className=" w-full bg-rose-950">
      <Text className="text-white text-center p-2">
        You are in offline mode nows
      </Text>
    </View>
  );
};

export default OfflineNotice;
