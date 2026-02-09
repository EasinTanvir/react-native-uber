import OfflineNotice from "@/components/OfflineNotice";
import NetInfo from "@react-native-community/netinfo";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaView className=" ">
      <OfflineNotice />
    </SafeAreaView>
  );
};

export default Profile;
