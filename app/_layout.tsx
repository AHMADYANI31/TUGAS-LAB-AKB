import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useCallback } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    // 🧷 5 Font Statis
    "LibertinusMono-Regular": require("../assets/fonts/LibertinusMono-Regular.ttf"),
    "BitcountPropSingle-Regular": require("../assets/fonts/BitcountPropSingle-Regular.ttf"),
    "SpaceMono-Regular": require("../assets/fonts/SpaceMono-Regular.ttf"),
    "Lato-Regular": require("../assets/fonts/Lato-Regular.ttf"),
    "Oswald-Regular": require("../assets/fonts/Oswald-Regular.ttf"),

    // 🧷 5 Variable Fonts
    "Ubuntu-Bold": require("../assets/fonts/Ubuntu-Bold.ttf"),
    "TikTokSans_28pt_Expanded-Bold": require("../assets/fonts/TikTokSans_28pt_Expanded-Bold.ttf"),
    "Quicksand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
    "WinkyRough-Bold": require("../assets/fonts/WinkyRough-Bold.ttf"),
    "NotoSans-Bold": require("../assets/fonts/NotoSans-Bold.ttf"),
  });

  // Callback untuk sembunyikan splash screen
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  if (!fontsLoaded) return null;

  return <Stack />;
}
