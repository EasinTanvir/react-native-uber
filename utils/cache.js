import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment/moment";
export const CACHE_KEY_PREFIX = "myapp_cache_";
export const EXPIRY_TIME = 5; // in minutes

export const setCache = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };

    await AsyncStorage.setItem(CACHE_KEY_PREFIX + key, JSON.stringify(item));
  } catch (error) {
    console.error("Error setting cache:", error);
  }
};

export const getCache = async (key) => {
  try {
    const value = await AsyncStorage.getItem(CACHE_KEY_PREFIX + key);

    if (!value) return null;

    if (isExpired(value)) {
      await AsyncStorage.removeItem(CACHE_KEY_PREFIX + key);
      return null;
    }

    const item = JSON.parse(value);
    return item.value;
  } catch (error) {
    console.error("Error getting cache:", error);
    return null;
  }
};

function isExpired(value) {
  const item = JSON.parse(value);
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);
  const isExpired = now.diff(storedTime, "minutes") > EXPIRY_TIME;
  return isExpired;
}
