import { Text, View, ScrollView, Image, TextInput, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useWindowDimensions } from "react-native";
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Platform } from "react-native";
import { useState } from "react"
import { Checkbox } from "react-native-paper"


export default function Signup() {
  const route = useRouter()
  const { height, width } = useWindowDimensions()
  const [toggle, setToggel] = useState(false)
  const [toggle1, setToggel1] = useState(false)
  const [check, setCheck] = useState(false)
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    isVerified: false,
    password: "",
    conform_Password: "",
    otp: ""
  });

  function signUp() {
    console.log(userData)
    setUserData({
      name: "",
      email: "",
      isVerified: false,
      password: "",
      conform_Password: "",
      otp: ""
    })
  }


  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",

      }}>

      <View style={{ width: "100%", height: height * 0.1, justifyContent: "center", marginVertical: 5, borderRadius: 10, paddingLeft: 5 }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>𝖢𝗋𝖾𝖺𝗍𝖾 𝖠𝖼𝖼𝗈𝗎𝗇𝗍</Text>
        <Text>𝗌𝗍𝖺𝗋𝗍 𝗒𝗈𝗎𝗋 𝗃𝗈𝗎𝗋𝗇𝖾𝗒 𝗍𝗈𝗐𝖺𝗋𝖽 𝖺 𝗁𝖾𝖺𝗅𝗍𝗁𝗂𝖾𝗋 𝗒𝗈𝗎</Text>
      </View>

      <View style={{ width: "100%", backgroundColor: "", marginVertical: 5, borderRadius: 10, padding: 10 }}>

        <Text style={{ fontWeight: "bold", fontSize: 12 }}>𝖥𝗎𝗅𝗅 𝖭𝖺𝗆𝖾</Text>
        <View style={{ width: "100%", backgroundColor: "#57585920", flexDirection: "row", alignItems: "center", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10, marginVertical: 5, display: "flex" }}>
          <FontAwesome name="user" color="#000" size={20} style={{ opacity: 0.5, marginHorizontal: 10, flexBasis: "7%" }} />
          <TextInput
            placeholder="𝖥𝗎𝗅𝗅 𝖭𝖺𝗆𝖾"
            keyboardType="name-phone-pad"
            style={{ flexBasis: "80%" }}
            value={userData.name || ""}
            onChangeText={(textData) => setUserData({ ...userData, name: textData })}
          />
        </View>

        <Text style={{ fontWeight: "bold", fontSize: 12 }}>𝖤𝗆𝖺𝗂𝗅</Text>
        <View style={{ width: "100%", backgroundColor: "#57585920", flexDirection: "row", alignItems: "center", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10, marginVertical: 5, display: "flex" }}>
          <Fontisto name="email" color="#000" size={20} style={{ opacity: 0.5, marginHorizontal: 10, flexBasis: "7%" }} />
          <TextInput
            placeholder="𝗒𝗈𝗎@𝖾𝗑𝖺𝗆𝗉𝗅𝖾.𝖼𝗈𝗆"
            keyboardType="email-address"
            style={{ flexBasis: "80%" }}
            value={userData.email || ""}
            onChangeText={(text) => setUserData({ ...userData, email: text })}
          />
        </View>

        <Text style={{ fontWeight: "bold", fontSize: 12 }}>𝖮𝖳𝖯</Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={{ width: "85%", backgroundColor: "#57585920", flexDirection: "row", alignItems: "center", paddingHorizontal: 20, paddingVertical: 5, borderRadius: 10, marginVertical: 5, display: "flex" }}>
            <FontAwesome name="hashtag" color="#000" size={20} style={{ opacity: 0.5, marginHorizontal: "1%", flexBasis: "10%" }} />
            <TextInput
              placeholder="𝖮𝖳𝖯"
              style={{ flexBasis: "80%" }}
              inputMode="decimal"
              maxLength={6}
              value={userData.otp || ""}
              onChangeText={(num) => setUserData({ ...userData, otp: num })}
            />
          </View>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: "#4dff00",
                marginVertical: 9,
                marginHorizontal: 4,
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 5,
                borderRadius: 10
              },
              pressed && {
                transform: [{ scale: 0.9 }]
              }
            ]}
          >
            <Text style={{ fontSize: 8, color: "white" }}>Send OTP</Text>
          </Pressable>
        </View>


        <Text style={{ fontWeight: "bold", fontSize: 12 }}>𝖯𝖺𝗌𝗌𝗐𝗈𝗋𝖽</Text>
        <View style={{ width: "100%", backgroundColor: "#57585920", flexDirection: "row", alignItems: "center", paddingHorizontal: 20, paddingVertical: 5, borderRadius: 10, marginVertical: 5, display: "flex" }}>
          <Feather name="lock" color="#000" size={20} style={{ opacity: 0.5, marginHorizontal: "1%", flexBasis: "10%" }} />
          <TextInput
            placeholder="𝖯𝖺𝗌𝗌𝗐𝗈𝗋𝖽"
            secureTextEntry={toggle ? false : true}
            style={{ flexBasis: "80%" }}
            value={userData.password || ""}
            onChangeText={(text) => setUserData({ ...userData, password: text })}
          />

          <Entypo
            name={toggle ? "eye-with-line" : "eye"}
            color="#000"
            size={24}
            style={{ flexBasis: "10%", opacity: 0.5 }}
            onPress={() => setToggel(!toggle)}
          />
        </View>


        <Text style={{ fontWeight: "bold", fontSize: 12 }}>𝖢𝗈𝗇𝖿𝗂𝗋𝗆 𝖯𝖺𝗌𝗌𝗐𝗈𝗋𝖽</Text>
        <View style={{ width: "100%", backgroundColor: "#57585920", flexDirection: "row", alignItems: "center", paddingHorizontal: 20, paddingVertical: 5, borderRadius: 10, marginVertical: 5, display: "flex" }}>
          <Feather name="lock" color="#000" size={20} style={{ opacity: 0.5, marginHorizontal: "1%", flexBasis: "10%" }} />
          <TextInput placeholder="𝖢𝗈𝗇𝖿𝗂𝗋𝗆 𝖯𝖺𝗌𝗌𝗐𝗈𝗋𝖽"
            value={userData.conform_Password || ""}
            onChangeText={(text) => setUserData({ ...userData, conform_Password: text })}
            secureTextEntry={toggle1 ? false : true} style={{ flexBasis: "80%" }} />
          <Entypo
            name={toggle1 ? "eye-with-line" : "eye"}
            color="#000"
            size={24}
            style={{ flexBasis: "10%", opacity: 0.5 }}
            onPress={() => setToggel1(!toggle1)}
          />
        </View>
      </View>



      <View style={{ width: "100%", justifyContent: "center", alignItems: "center", marginVertical: 5, borderRadius: 10, paddingLeft: 5, display: "flex", flexDirection: "row", gap: 5 }}>
        <Checkbox
          status={check ? "checked" : "unchecked"}
          onPress={() => setCheck(!check)}
          color="#11ff00"
        />
        <Text style={{ color: "black", marginHorizontal: 0, opacity: 0.5, fontSize: 10 }}>𝖨 𝖺𝗀𝗋𝖾𝖾 𝗍𝗈</Text>
        <Text style={{ color: "#2efc00", marginHorizontal: 0, opacity: 0.5, fontSize: 10 }}>𝖳𝖾𝗋𝗆𝗌 & 𝖢𝗈𝗇𝖽𝗂𝗍𝗂𝗈𝗇𝗌</Text>
        <Text style={{ color: "black", marginHorizontal: 0, opacity: 0.5, fontSize: 10 }}>𝖺𝗇𝖽</Text>
        <Text style={{ color: "#2fff00", marginHorizontal: 0, opacity: 0.5, fontSize: 10 }}>𝖯𝗋𝗂𝗏𝖺𝖼𝗒 𝖯𝗈𝗂𝗅𝖼𝗒</Text>
      </View>

      <View style={{ width: "100%", height: height * 0.05, justifyContent: "center", alignItems: "center", marginVertical: 5, paddingHorizontal: 20, backgroundColor: "#00C754", borderRadius: 10 }}>
        <Pressable
          style={({ pressed }) => [
            {
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center"
            },
            pressed && {
              transform:[{scale:0.9}]
            }
          ]}
          onPress={signUp}
        >
          <Text style={{ color: "white" }}>𝖲𝗂𝗀𝗇 𝖴𝗉</Text>
        </Pressable>
      </View>

      <View style={{ width: "100%", justifyContent: "center", alignItems: "center", marginVertical: 5, borderRadius: 10, paddingLeft: 5, display: "flex", flexDirection: "row" }}>
        <View style={{ borderWidth: 1, width: "20%", height: "1%", opacity: 0.2 }} />
        <Text style={{ color: "black", marginHorizontal: 20, opacity: 0.5 }}>𝗈𝗋 𝖼𝗈𝗇𝗍𝗂𝗇𝗎𝖾 𝗐𝗂𝗍𝗁</Text>
        <View style={{ borderWidth: 1, width: "20%", height: "1%", opacity: 0.2 }} />
      </View>


      <View style={{ width: "100%", justifyContent: "center", alignItems: "center", marginVertical: 5, borderRadius: 10, paddingLeft: 5, display: "flex", flexDirection: "row", gap: 30 }}>
        <View style={{ backgroundColor: "#00000010", padding: 10, borderRadius: 15, display: "flex", flexDirection: "row", gap: 10 }} >
          <FontAwesome name="google" color="#0059ff" size={22} />
          <Text>𝗀𝗈𝗈𝗀𝗅𝖾</Text>
        </View>

        {
          Platform.OS === "ios" ? <View style={{ backgroundColor: "#00000010", padding: 10, borderRadius: 15, display: "flex", flexDirection: "row", gap: 10 }} >
            <FontAwesome name="apple" color="#000" size={22} />
            <Text>𝖺𝗉𝗉𝗅𝖾</Text>
          </View> : ""
        }
      </View>


      <View style={{ width: "100%", justifyContent: "center", alignItems: "center", marginVertical: 5, borderRadius: 10, paddingLeft: 5, display: "flex", flexDirection: "row", gap: 3 }}>
        <Text>𝖠𝗅𝗋𝖾𝖺𝖽 𝗁𝖺𝗏𝖾 𝖺𝗇 𝖠𝖼𝖼𝗈𝗎𝗇𝗍 ?</Text><Text
          style={{ color: "#3fdf0e" }} onPress={() => route.replace("/Login")}
        >𝖫𝗈𝗀𝗂𝗇</Text>
      </View>
    </ScrollView>
  );
}
