import { Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function Signup() {
    const route = useRouter()
    function signUp(){
        route.replace("/(protected)/First")
    }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This Is sign up page</Text>
      <Pressable style={{ borderWidth:2 , paddingHorizontal:10 , paddingTop:5}} onPress={() => {signUp()}}>
        <Text>Button</Text>
      </Pressable>
    </View>
  );
}
