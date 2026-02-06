/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        // =====================
        // Plus Jakarta Sans
        // =====================
        jakarta: ["Jakarta-Regular"],
        "jakarta-light": ["Jakarta-Light"],
        "jakarta-extralight": ["Jakarta-ExtraLight"],
        "jakarta-medium": ["Jakarta-Medium"],
        "jakarta-semibold": ["Jakarta-SemiBold"],
        "jakarta-bold": ["Jakarta-Bold"],
        "jakarta-extrabold": ["Jakarta-ExtraBold"],

        // =====================
        // Roboto Mono
        // =====================
        mono: ["RobotoMono_400Regular"],
        "mono-italic": ["RobotoMono_500Medium_Italic"],
      },
    },
  },
  plugins: [],
};
