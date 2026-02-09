import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";

const Ride = () => {
  const [user, setUser] = useState<any | null>(null);

  // save object
  const saveUser = async () => {
    const data = {
      id: "101",
      name: "Easin",
    };

    try {
      await AsyncStorage.setItem("user", JSON.stringify(data));
      console.log("User saved");
    } catch (e) {
      console.error("Save error", e);
    }
  };

  // read object
  const loadUser = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      if (value) {
        setUser(JSON.parse(value));
      }
    } catch (e) {
      console.error("Read error", e);
    }
  };

  // auto load on screen open
  useEffect(() => {
    loadUser();
  }, []);

  return (
    <View className="flex-1 items-center justify-center gap-4">
      <Text className="text-lg font-bold">Ride Screen</Text>

      <Pressable
        onPress={saveUser}
        className="bg-blue-600 px-4 py-2 rounded-lg"
      >
        <Text className="text-white">Save User</Text>
      </Pressable>

      <Pressable
        onPress={loadUser}
        className="bg-green-600 px-4 py-2 rounded-lg"
      >
        <Text className="text-white">Load User</Text>
      </Pressable>

      {user && (
        <View className="mt-4">
          <Text>ID: {user.id}</Text>
          <Text>Name: {user.name}</Text>
        </View>
      )}
    </View>
  );
};

export default Ride;
