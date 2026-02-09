import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://192.168.1.100:3000/api",
  },
  staging: {
    apiUrl: "http://192.168.1.100:3000/api",
  },
  prod: {
    apiUrl: "https://your-production-api-url.com/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) {
    return settings.dev;
  }
  const channel = Constants.expoConfig?.extra?.eas?.channel;
  if (channel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings;
