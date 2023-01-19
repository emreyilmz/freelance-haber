/* import { View, Text, Button } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";
import { Feather, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";


const Tab = createMaterialBottomTabNavigator();
const EmptyScreen = () => {
    
    const submit = () => {
        console.log("hello");
    };
    return (
        <View>
            <Button
                onPress={() => submit()}
                title="Learn More"
                color="black"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
};


export default function NavigationScreen() {
    
    return (
        <NavigationContainer>
            <Tab.Navigator
                barStyle={{ backgroundColor: "black", height: 80 }}
                initialRouteName="SearchNavigator"
                screenOptions={{
                    headerShown: false,
                }}

               
            >
                <Tab.Screen
                    name="Word"
                    component={EmptyScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons
                                name="translate"
                                size={20}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Discover"
                    component={EmptyScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Feather name="search" size={20} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="My List"
                    component={EmptyScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Feather
                                name="plus-square"
                                size={20}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Grammer"
                    component={EmptyScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <FontAwesome5
                                name="ethereum"
                                size={20}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Me"
                    component={EmptyScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Feather name="user" size={20} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
 */