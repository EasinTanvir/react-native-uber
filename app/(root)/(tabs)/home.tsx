import React from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A harum,
          odit excepturi nam doloribus accusantium magnam eaque blanditiis velit
          laborum!
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
