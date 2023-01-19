import React from "react"
import { StyleSheet, Text, View,FlatList,Dimensions,Image,TouchableOpacity,Share } from 'react-native';
const staticProfile = require("../../assets/user.png");
import { FontAwesome, Feather,FontAwesome5,Entypo,AntDesign  } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";


const Profile = ({navigation}) => {
    const onShare =  () => {
        /* const uri = await getGalleryImageAsync(1);
    */
       Share.share(
         {
           title: 'https://play.google.com/store/apps/details?id=com.Joygoy.Joygoy',
            url: "www.joygoy.com", 
         },
         {
           excludedActivityTypes: [
             // 'com.apple.UIKit.activity.PostToWeibo',
             // 'com.apple.UIKit.activity.Print',
             // 'com.apple.UIKit.activity.CopyToPasteboard',
             // 'com.apple.UIKit.activity.AssignToContact',
             // 'com.apple.UIKit.activity.SaveToCameraRoll',
             // 'com.apple.UIKit.activity.AddToReadingList',
             // 'com.apple.UIKit.activity.PostToFlickr',
             // 'com.apple.UIKit.activity.PostToVimeo',
             // 'com.apple.UIKit.activity.PostToTencentWeibo',
             // 'com.apple.UIKit.activity.AirDrop',
             // 'com.apple.UIKit.activity.OpenInIBooks',
             // 'com.apple.UIKit.activity.MarkupAsPDF',
             // 'com.apple.reminders.RemindersEditorExtension',
             // 'com.apple.mobilenotes.SharingExtension',
             // 'com.apple.mobileslideshow.StreamShareService',
             // 'com.linkedin.LinkedIn.ShareExtension',
             // 'pinterest.ShareExtension',
             // 'com.google.GooglePlus.ShareExtension',
             // 'com.tumblr.tumblr.Share-With-Tumblr',
             // 'net.whatsapp.WhatsApp.ShareExtension', //WhatsApp
           ],
         }
       ); 
     };
    return (
        <View style={styles.container}>
            <View style={styles.topBox}>
            
                <View style={styles.profile}>
                <Image
                                        style={styles.avatarProfile}
                                        source={staticProfile}
                                    />
                    <View style={styles.textPro}>
                    <Text style={styles.textProfile}>hasan abdi</Text>
                    <Text style={styles.textProfileBottom}>{"1 gün önce katıldı"}</Text>
                    </View>
                    
                    
                </View>
                <LinearGradient
                            colors={["#1DB954", "#01ab9d"]}
                            style={styles.count}
                        >
            <FontAwesome name="facebook-square" size={28} color="white" />
            <FontAwesome name="twitter-square" size={28} color="white" />
            <Entypo name="youtube" size={28} color="white" />
            <AntDesign name="instagram" size={28} color="white" />
            </LinearGradient>
                
            </View>
            <View style={[styles.profile,{
        padding:15,width:"90%",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start"}]}>
             {/* <TouchableOpacity
             onPress={() => navigation.navigate("Premium")} //submit
            >
            <View style={styles.settingsGroup}>
            <FontAwesome5 name="chess-king" size={24} color="orange" />
            <Text style={[styles.textSettings,{color:"orange"}]}>Reklamları Kaldır</Text>
            </View>
            </TouchableOpacity> */}
            
                <TouchableOpacity
                onPress={() => navigation.navigate("Ayarlar")} //submit
               >
               <View style={styles.settingsGroup}>
               <Feather
                                       name="settings"
                                       size={28}
                                       color="green"
                                   />
               <Text style={styles.textSettings}>Hesap Ayarları</Text>
               </View>
               </TouchableOpacity>
           
               <TouchableOpacity
             /* onPress={() => navigation.navigate("CountVideo")} */ //submit
            >
            <View style={styles.settingsGroup}>
            <Feather
                                    name="command"
                                    size={28}
                                    color="green"
                                />
            <Text style={styles.textSettings}>Biz Kimiz?</Text>
            </View>
            </TouchableOpacity>
           
            <TouchableOpacity
              onPress={() => navigation.navigate("Bizi Değerlendir")}
            >
            <View style={styles.settingsGroup}>
            <Feather name="star" size={28} color="green" />
            <Text style={styles.textSettings}>Bizi Değerlendir</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onShare}
            >
            <View style={styles.settingsGroup}>
            <Entypo name="slideshare" size={28} color="green" />
            <Text style={styles.textSettings}>Arkadaşlarını Davet Et</Text>
            </View>
            </TouchableOpacity>


            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8EAED",
        //marginTop: Constants.statusBarHeight,
        height: 100,
        paddingVertical:20,
        alignItems:"center",
    },
    settingsGroup:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:25,
    },
    topBox:{
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"flex-start",
        backgroundColor:"#fff",
        height:170,
        width:"90%",
        padding:20,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    profile:{
        marginTop:50
    },
    count:{
        flex:1,
        marginTop:20,
        flexDirection:"row",
        backgroundColor:"blue",
        paddingHorizontal:20,
        width:"100%",
        height:110,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        alignItems:"center",
        justifyContent:"space-around"
    },
    text:{
        fontWeight:"bold",
        fontSize:19,
        letterSpacing:2,
        width:"80%"
    },
    textSettings:{
        fontWeight:"bold",
        fontSize:24,
        letterSpacing:1,
        marginLeft:10
    },
    textProfile:{
        fontWeight:"bold",
        fontSize:17,
    },
    textProfileBottom:{
        fontWeight:"medium",
        fontSize:11,
    },
    descriptionCount:{
        fontWeight:"medium",
        fontSize:13,
        opacity:0.6,
        color:"white",
    },
    textCount:{
        fontWeight:"bold",
        fontSize:25,
        
        color:"white",
    },
    textPro:{
        justifyContent:"center",
        alignItems:"flex-start"
    },
    language:{
        marginTop:20,
        paddingLeft:15,
        backgroundColor:"#fff",
        height:65,
        width:"90%",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        /* paddingHorizontal: 20, */
        justifyContent:"space-between",
        flexDirection:"row",
        alignItems:"center"
    },
    avatar: {
        marginRight: 15,
        height: 40,
        width: 40,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "white",
    },
    avatarProfile: {
        marginRight: 15,
        height: 50,
        width: 50,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "white",
    },
    avatarPremium:{
        height: 35,
        width: 35,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "white",
    },
    profile:{
        flexDirection:"row",
        alignItems:"center"
    },
    signIn: {
        width: "100%",
        height: 65,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    textSign: {
        fontSize: 18,
        fontWeight: "bold",
    },
    buttonPrimary2: {
        backgroundColor: "#1DB954",
        width: "100%",
        alignItems: "center",
        borderRadius: 5,
        padding: 15,
        margin: 0,
    },
});
