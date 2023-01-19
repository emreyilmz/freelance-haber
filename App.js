import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,Dimensions,Image } from 'react-native';
import {useState} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, MaterialIcons,Fontisto, FontAwesome,Ionicons } from "@expo/vector-icons";
import HomeScreen from './components/Home/Home.js'
import NewsScreen from './components/Home/News.js'

import ChatScreen from './components/Chat.js'
import Youtube from './components/Youtube.js'
import Profile from './components/Profile/Profile.js'
import Settings from './components/Profile/Settings.js'
import Review from './components/Profile/Review.js'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

import { createStackNavigator } from "@react-navigation/stack";



import { NavigationContainer } from '@react-navigation/native';

const {WIDTH,HEIGHT} = Dimensions.get('window')





function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const ProfileStack = createStackNavigator();
const ProfileNavigator = () => (
    <ProfileStack.Navigator
        /* screenOptions={{
            headerShown: false,
        }}
        options={{ headerShown: false }} */
    >
        <ProfileStack.Screen name="Profil" component={Profile} />
        <ProfileStack.Screen name="Ayarlar" component={Settings} />
        <ProfileStack.Screen name="Bizi Değerlendir" component={Review} />


        

    </ProfileStack.Navigator>
);

const HomeStack = createStackNavigator();
const HomeNavigator = () => (
    <HomeStack.Navigator
        /* screenOptions={{
            headerShown: false,
        }}
        options={{ headerShown: false }} */
        
    >
        <HomeStack.Screen name="Ana Sayfa" component={HomeScreen} />
        <HomeStack.Screen name="Haber" component={NewsScreen} />

    </HomeStack.Navigator>
);

const ChatStack = createStackNavigator();
const ChatNavigator = () => (
    <ChatStack.Navigator
        /* screenOptions={{
            headerShown: false,
        }}
        options={{ headerShown: false }} */
    >
        <ChatStack.Screen name="Sohbet" component={ChatScreen} />

    </ChatStack.Navigator>
);

const YayinStack = createStackNavigator();
const YayinNavigator = () => (
    <YayinStack.Navigator
        /* screenOptions={{
            headerShown: false,
        }}
        options={{ headerShown: false }} */
    >
        <YayinStack.Screen name="Youtube" component={Youtube} />

    </YayinStack.Navigator>
);


/* const Tab = createBottomTabNavigator(); */

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
                  initialRouteName="Home"
                  activeColor="#1DB954"
                  inactiveColor="#fff"
                  barStyle={{ backgroundColor: '#1DB954' }}
                
                screenOptions={{
                    headerShown: false,
                }}

               
            >
        <Tab.Screen name="Ana Sayfa" component={HomeNavigator} options={{
                        tabBarIcon: ({ color }) => (
                          <Ionicons name="ios-home-sharp" size={24} color={color} />
                        ),
                    }}/>
        <Tab.Screen name="Chat" component={ChatNavigator} options={{
                        tabBarIcon: ({ color }) => (
                          <Ionicons name="chatbubble" size={24} color={color} />
                        ),
                    }}/>
                    <Tab.Screen name="Yayınlar" component={YayinNavigator} options={{
                        tabBarIcon: ({ color }) => (
                          <Fontisto name="youtube-play" size={22} color={color} />
                        ),
                    }}/>
                    <Tab.Screen name="Profile" component={ProfileNavigator} options={{
                        tabBarIcon: ({ color }) => (
                          <FontAwesome name="user" size={24} color={color} />
                        ),
                    }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrap:{
    width:WIDTH,
    height:HEIGHT*0.25
  },
  wrapDot:{
    position:'absolute',
    bottom:0,
    flexDirection:'row',
    alignSelf:'center'
  },
  dotActive:{
    margin:3,
    color:'black'
  },
  dot:{
    margin:3,
    color:"#888"
  }
});
