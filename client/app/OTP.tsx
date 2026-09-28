import { useLocalSearchParams } from "expo-router"
import { useState } from "react"
import { Pressable, Text, TextInput, View } from "react-native"
import FontAwesome from "react-native-vector-icons/FontAwesome"
export default function OTP(){
    let {userData}  =useLocalSearchParams < {userData : string} >()
    const parsed = userData ? JSON.parse(userData) : {}
    const [otp,setOtp] = useState(0)

    return(
        <View style={{
        }}>
        <Text style={{ fontWeight: "bold", fontSize: 12 }}>𝖮𝖳𝖯</Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={{ width: "85%", backgroundColor: "#57585920", flexDirection: "row", alignItems: "center", paddingHorizontal: 20, paddingVertical: 5, borderRadius: 10, marginVertical: 5, display: "flex" }}>
            <FontAwesome name="hashtag" color="#000" size={20} style={{ opacity: 0.5, marginHorizontal: "1%", flexBasis: "10%" }} />
            <TextInput
              placeholder="𝖮𝖳𝖯"
              style={{ flexBasis: "80%" }}
              inputMode="decimal"
              maxLength={6}
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
        </View>
    )
}
