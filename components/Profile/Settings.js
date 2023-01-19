import React from 'react';
import { StyleSheet, Text, View,FlatList,Dimensions,Image,TouchableOpacity,Share } from 'react-native';
import { FontAwesome, Feather,Ionicons,MaterialCommunityIcons   } from "@expo/vector-icons";


const Settings = () => {
   

    return (
        <View style={styles.container}>
        <View style={[styles.profile,{
    padding:20,width:"90%",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start"}]}>
        <TouchableOpacity
         onPress={() =>console.log("hello")} //submit
        >
        <View style={styles.settingsGroup}>
        <Ionicons name="exit" size={24} color="green" />
        <Text style={styles.textSettings}>Çıkış Yap</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("hello")}>
        <View style={styles.settingsGroup}>
        <MaterialCommunityIcons name="delete-circle" size={24} color="green" />
        <Text style={styles.textSettings}>Hesap Sil</Text>
        </View>
        
        </TouchableOpacity>
        {/* <DeleteUserPopup
                        ref={popupRef}
                        onTouchOutside={onClosePopup}
                        title={"Add List"}
                        user={user}
                    /> */}
    </View>
    </View>

    )
}

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:200
    },
    settingsGroup:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:25,
    },
    textSettings:{
        fontWeight:"bold",
        fontSize:22,
        letterSpacing:1,
        marginLeft:10
    },
});
