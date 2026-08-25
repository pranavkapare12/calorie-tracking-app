import { Pressable, Text, View, ScrollView, Image } from "react-native";
import { useRouter } from "expo-router";
import { useWindowDimensions } from "react-native";

export default function Signup() {
  const route = useRouter()
  function signUp() {
    route.replace("/(protected)/First")
  }
  const { height, width } = useWindowDimensions()
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
      }}>
      <View style={{ width: "100%", height: height * 0.2, justifyContent: "center", alignItems: "center", marginVertical: 20, borderRadius: 10 }}>
        <View style={{ backgroundColor: "#57F52740", height: height * 0.08, width: width * 0.15, justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
          <Image
            source={require('../assets/Project_images/leaf.png')}
            style={{ height: height * 0.05, width: width * 0.1, }}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text>
            ᴄᴀʟᴛʀᴀᴄᴋᴇʀ
          </Text>
        </View>
        <View>
          <Text style={{ fontSize:10 , opacity:0.5 }}>
            ᴀ ʜᴇᴀʟᴛʜɪᴇʀ ʏᴏᴜ, ᴏɴᴇ ᴅᴀʏ ᴀᴛ ᴀ ᴛɪᴍᴇ
          </Text>
        </View>
      </View>

      <View style={{ width: "100%", height: height * 0.1, justifyContent: "center", marginVertical: 5, borderRadius: 10, paddingLeft:5 }}>
        <Text style={{ fontWeight: "bold" }}>ᴡᴇʟᴄᴏᴍᴇ ʙᴀᴄᴋ</Text>
        <Text>ᴛʀᴀᴄᴋ ʏᴏᴜʀ ᴄᴀʟᴏʀɪᴇꜱ ᴀɴᴅ, ᴛʀᴀɴꜱꜰᴏʀᴍ ʏᴏᴜʀ ʟɪꜰᴇ</Text>
      </View>

      <View style={{ width: "100%", backgroundColor: "#57585910", height: height * 0.25, justifyContent: "center", marginVertical: 5, borderRadius: 10, paddingLeft:5 }}>
        <Text style={{ fontWeight: "bold" }}>ᴡᴇʟᴄᴏᴍᴇ ʙᴀᴄᴋ</Text>
        <Text>ᴛʀᴀᴄᴋ ʏᴏᴜʀ ᴄᴀʟᴏʀɪᴇꜱ ᴀɴᴅ, ᴛʀᴀɴꜱꜰᴏʀᴍ ʏᴏᴜʀ ʟɪꜰᴇ</Text>
      </View>


      {/* <Text>This Is sign up page</Text>
      <Pressable style={{ borderWidth:2 , paddingHorizontal:10 , paddingTop:5}} onPress={() => {signUp()}}>
        <Text>Button</Text>
      </Pressable> */}
    </ScrollView>
  );
}
