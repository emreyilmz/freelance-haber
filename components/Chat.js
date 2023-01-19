import { View, Text,StyleSheet,ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
/* import { styles } from "../utils/styles"; */

export default function MessageComponent() {
   
//https://dev.to/novu/building-a-chat-app-with-socketio-and-react-native-k1b
    return (
        <ScrollView>
            <View
                style={
                    styles.mmessageWrapper
                }
            >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                   
                    <View
                        style={
                            styles.mmessage
                        }
                    >
                        <Text style={styles.text}>hasan kuzgun</Text>
                        <Text >Bu gece darıca çok sessiz</Text>
                    </View>
                </View>
                
            </View>
            <View
                style={
                    [styles.mmessageWrapper, { alignItems: "flex-end" }]
                }
            >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                
                    <View
                        style={
                            [styles.mmessage, { backgroundColor: "rgb(194, 243, 194)" }]
                        }
                    >
                        <Text style={styles.text2}>semih</Text>
                        <Text>Merhaba bugün darıca sahilde köpek gören var mı?</Text>
                    </View>
                </View>
            </View>
            <View
                style={
                    styles.mmessageWrapper
                }
            >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                   
                    <View
                        style={
                            styles.mmessage
                        }
                    >
                        <Text style={[styles.text,{color:"green"}]}>serdar usta</Text>
                        <Text >anlaştık galiba :)</Text>
                    </View>
                </View>
                
            </View>
            <View
                style={
                    [styles.mmessageWrapper, { alignItems: "flex-end" }]
                }
            >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                
                    <View
                        style={
                            [styles.mmessage, { backgroundColor: "rgb(194, 243, 194)" }]
                        }
                    >
                        <Text style={styles.text2}>semih</Text>
                        <Text>sahil yolunda çevirme var herkes dikkatli kullansın lütfen</Text>
                    </View>
                </View>
            </View>
            <View
                style={
                    styles.mmessageWrapper
                }
            >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                   
                    <View
                        style={
                            styles.mmessage
                        }
                    >
                        <Text style={[styles.text,{color:"black"}]}>deniz akut</Text>
                        <Text >evet gerçekten çok sessiz</Text>
                    </View>
                </View>
                
            </View>
            <View
                style={
                    [styles.mmessageWrapper, { alignItems: "flex-end" }]
                }
            >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                
                    <View
                        style={
                            [styles.mmessage, { backgroundColor: "rgb(194, 243, 194)" }]
                        }
                    >
                        <Text style={styles.text2}>semih</Text>
                        <Text>Köpeğin ne renk oldugunu söyler misiniz</Text>
                    </View>
                </View>
            </View>
            <View
                style={
                    styles.mmessageWrapper
                }
            >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                   
                    <View
                        style={
                            styles.mmessage
                        }
                    >
                        <Text style={[styles.text,{color:"purple"}]}>bahadır seven</Text>
                        <Text >şehirde kimse yok galiba dekjaskdjsa</Text>
                    </View>
                </View>
                
            </View>
            <View
                style={
                    styles.mmessageWrapper
                }
            >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                   
                    <View
                        style={
                            styles.mmessage
                        }
                    >
                        <Text style={[styles.text,{color:"blue"}]}>tolunay ay</Text>
                        <Text >ben bu şehri çok seviyorum ya</Text>
                    </View>
                </View>
                
            </View>
            </ScrollView>
    );
}


const styles = StyleSheet.create({
    mmessageWrapper: {
        width: "100%",
        alignItems: "flex-start",
        marginBottom: 15,
        marginTop:5,
        
        padding:5,
    },
    mmessage: {
        maxWidth: "75%",
        backgroundColor: "#fff",
        paddingHorizontal: 18,
        paddingVertical:5,
        borderRadius: 15,
        marginBottom: 2,
    },
    text:{
        color:"blue",
        fontWeight:"bold",
        fontSize:13,
    },
    text2:{
        color:"#E67E22",
        fontWeight:"bold",
        fontSize:13,
    }
    
});
