import { Tabs } from "expo-router";

export default function RootLayout() {
  return <Tabs screenOptions={{ headerShown:false }}>
    <Tabs.Screen name="index" options={{ title:"Zero" }} />
    <Tabs.Screen name="First" />
    <Tabs.Screen name="Second" />
    <Tabs.Screen name="Third" />
  </Tabs>;
}
