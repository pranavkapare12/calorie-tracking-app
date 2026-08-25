import { Stack } from "expo-router";
import { SafeAreaProvider , useSafeAreaInsets} from "react-native-safe-area-context";

export default function RootLayout() {
  const inset = useSafeAreaInsets()
  return <SafeAreaProvider style={{flex:1 , paddingTop : inset.top + 10 , paddingHorizontal:10}}>
    <Stack screenOptions={{ headerShown:false }} >
    <Stack.Screen name="Signup" />
    <Stack.Screen name="(protected)" />
    </Stack>
  </SafeAreaProvider>
}
