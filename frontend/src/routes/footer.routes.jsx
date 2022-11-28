import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'
import Home from '../Pages/Home';
import Find from '../Pages/Find';
import Shop from '../Pages/Shop';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator();

function FooterRoutes() {

    const navigation = useNavigation();
    return (
        <Tab.Navigator
            options={{
                tabBarStyle: {
                    paddingBottom: 5,
                    paddingTop: 5,
                    backgroundColor: '#121212',
                    borderTopColor: 'transparent',
                },
                tabBarHideOnKeyboard: true
            }}
        >

            <Tab.Screen
                name="home"
                component={Home}
                options={{

                    headerShown: false,
                    tabBarLabel: 'Início',
                    tabBarActiveTintColor: '#BB86FC',
                    tabBarInactiveTintColor: '#728085',
                    tabBarHideOnKeyboard: true,

                    tabBarIcon: ({ focused, color }) => (

                        <Feather
                            name={focused ? "home" : "home"}
                            size={24}
                            color={color}
                            
                        // color= '#FFF'

                        />
                    ),
                    tabBarStyle: {
                        backgroundColor: '#121212',
                        borderTopColor: 'transparent',
                    }

                        
                }}
            />
            <Tab.Screen
                name="find"
                component={Find}
                options={{
                    headerShown: false,
                    tabBarBadge: 2,
                    tabBarLabel: 'Pesquisar',
                    tabBarActiveTintColor: '#BB86FC',
                    tabBarInactiveTintColor: '#728085',
                    tabBarHideOnKeyboard: true,
                    tabBarIcon: ({ focused, color }) => (

                        <Feather
                            name={focused ? "search" : "search"}
                            size={24}
                            color={color}


                        />
                    ),
                    tabBarStyle: {
                        backgroundColor: '#121212',
                        borderTopColor: 'transparent',
                    }

                }} />
            <Tab.Screen
                name="shop"
                component={Shop}
                options={{
                    headerShown: false,
                    tabBarBadge: 3,
                    tabBarLabel: 'Evento',
                    tabBarActiveTintColor: '#BB86FC',
                    tabBarInactiveTintColor: '#728085',
                    tabBarHideOnKeyboard: true,
                    tabBarIcon: ({ focused, color }) => (

                        <Feather
                            name={focused ? "activity" : "activity"}
                            size={24}
                            color={color}

                        />
                    ),
                    tabBarStyle: {
                        backgroundColor: '#121212',
                        color: '#fff',
                        borderTopColor: 'transparent',
                    }

                }}
            />
        </Tab.Navigator>
    )

}

export default FooterRoutes