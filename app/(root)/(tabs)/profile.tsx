import NetInfo from "@react-native-community/netinfo";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

const Profile = () => {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      console.log("Is internet reachable?", state.isInternetReachable);
    });

    return () => unsubscribe();
  }, []);
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
