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
                    backgroundColor: '#0B329B',
                    borderTopColor: 'transparent',
                },
            }}
        >

            <Tab.Screen
                name="home"
                component={Home}
                options={{

                    headerShown: false,
                    tabBarLabel: 'Início',
                    tabBarActiveTintColor: '#FFF',
                    tabBarInactiveTintColor: '#728085',

                    tabBarIcon: ({ focused, color }) => (

                        <Feather
                            name={focused ? "home" : "home"}
                            size={24}
                            color={color}
                        // color= '#FFF'

                        />
                    ),
                    tabBarStyle: {
                        backgroundColor: '#0B329B',
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
                    tabBarActiveTintColor: '#FFF',
                    tabBarInactiveTintColor: '#728085',
                    tabBarIcon: ({ focused, color }) => (

                        <Feather
                            name={focused ? "search" : "search"}
                            size={24}
                            color={color}


                        />
                    ),
                    tabBarStyle: {
                        backgroundColor: '#0B329B',
                        borderTopColor: 'transparent',
                    }

                }} />
            <Tab.Screen
                name="shop"
                component={Shop}
                options={{
                    headerShown: false,
                    tabBarBadge: 1,
                    tabBarLabel: 'Loja',
                    tabBarActiveTintColor: '#FFF',
                    tabBarInactiveTintColor: '#728085',
                    tabBarIcon: ({ focused, color }) => (

                        <Feather
                            name={focused ? "shopping-bag" : "shopping-bag"}
                            size={24}
                            color={color}

                        />
                    ),
                    tabBarStyle: {
                        backgroundColor: '#0B329B',
                        color: '#fff',
                        borderTopColor: 'transparent',
                    }

                }}
            />
        </Tab.Navigator>
    )

}

export default FooterRoutes