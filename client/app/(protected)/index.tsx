import { useRouter } from "expo-router";
import { Text, View, Pressable } from "react-native";


export default function Index() {
  const route = useRouter()
  function logout() {
    route.replace("/Signup")
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello from the user First Screen</Text>
      <Pressable style={{ borderWidth: 2, paddingHorizontal: 10, paddingTop: 5 }} onPress={() => {logout()}}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
}
