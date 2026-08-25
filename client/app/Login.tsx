import { Text, View, ScrollView, Image, TextInput, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useWindowDimensions } from "react-native";
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Platform } from "react-native";

import { useState } from "react"
export default function Login() {
    const route = useRouter()
    function signUp() {
        route.replace("/(protected)/First")
    }
    const { height, width } = useWindowDimensions()

    const [toggle, setToggel] = useState(false)

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
                    <Text style={{ fontSize: 10, opacity: 0.5 }}>
                        ᴀ ʜᴇᴀʟᴛʜɪᴇʀ ʏᴏᴜ, ᴏɴᴇ ᴅᴀʏ ᴀᴛ ᴀ ᴛɪᴍᴇ
                    </Text>
                </View>
            </View>

            <View style={{ width: "100%", height: height * 0.1, justifyContent: "center", marginVertical: 5, borderRadius: 10, paddingLeft: 5 }}>
                <Text style={{ fontWeight: "bold" }}>ᴡᴇʟᴄᴏᴍᴇ ʙᴀᴄᴋ</Text>
                <Text>ᴛʀᴀᴄᴋ ʏᴏᴜʀ ᴄᴀʟᴏʀɪᴇꜱ ᴀɴᴅ, ᴛʀᴀɴꜱꜰᴏʀᴍ ʏᴏᴜʀ ʟɪꜰᴇ </Text>
            </View>

            <View style={{ width: "100%", backgroundColor: "", marginVertical: 5, borderRadius: 10, padding: 10 }}>

                <Text style={{ fontWeight: "bold", fontSize: 12 }}>𝖤𝗆𝖺𝗂𝗅</Text>
                <View style={{ width: "100%", backgroundColor: "#57585920", flexDirection: "row", alignItems: "center", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10, marginVertical: 5 }}>
                    <Fontisto name="email" color="#000" size={20} style={{ opacity: 0.5, marginHorizontal: 10 }} />
                    <TextInput placeholder="you@example.com" keyboardType="email-address" />
                </View>

                <Text style={{ fontWeight: "bold", fontSize: 12 }}>𝖯𝖺𝗌𝗌𝗐𝗈𝗋𝖽</Text>

                <View style={{ width: "100%", backgroundColor: "#57585920", flexDirection: "row", alignItems: "center", paddingHorizontal: 20, paddingVertical: 5, borderRadius: 10, marginVertical: 5, display: "flex" }}>
                    <Feather name="lock" color="#000" size={20} style={{ opacity: 0.5, marginHorizontal: "1%", flexBasis: "10%" }} />
                    <TextInput placeholder="𝖯𝖺𝗌𝗌𝗐𝗈𝗋𝖽" secureTextEntry={toggle ? false : true} style={{ flexBasis: "80%" }} />
                    <Entypo
                        name={toggle ? "eye-with-line" : "eye"}
                        color="#000"
                        size={24}
                        style={{ flexBasis: "10%", opacity: 0.5 }}
                        onPress={() => setToggel(!toggle)}
                    />
                </View>
                <View style={{ width: "100%", flexDirection: "row", alignItems: "center", paddingVertical: 5, marginVertical: 5, display: "flex", justifyContent: "flex-end" }}>
                    <Text style={{ color: "#00C754" }}>𝖿𝗈𝗋𝗀𝗈𝗍 𝗉𝖺𝗌𝗌𝗐𝗈𝗋𝖽?</Text>
                </View>
            </View>

            <View style={{ width: "100%", height: height * 0.05, justifyContent: "center", alignItems: "center", marginVertical: 5, paddingHorizontal: 20, backgroundColor: "#00C754", borderRadius: 10, }}>
                <Pressable style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}
                    onPress={() => console.log("Execute")}
                >
                    <Text style={{ color: "white" }}>Login</Text>
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
                <Text>𝖣𝗈𝗇'𝗍 𝗁𝖺𝗏𝖾 𝖺𝗇 𝖺𝖼𝖼𝗈𝗎𝗇𝗍 ?</Text><Text
                    style={{ color: "#3fdf0e" }} onPress={() => route.replace("/Signup")}
                >𝖲𝗂𝗀𝗇 𝖴𝗉</Text>
            </View>
        </ScrollView>
    );
}
