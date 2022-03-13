import React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import Find from './Pages/Find'
import Shop from './Pages/Shop'
import Register from './Pages/Register';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import { Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function Footer() {

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

function Routes() {

    return (

        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name="footer"
                    component={Footer}
                    options={{
                        title: 'LOGO ALI',
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        },
                        headerRight: () => (
                            <TouchableOpacity style={{
                                marginRight: 15,
                            }}
                            
                            >

                                <Feather
                                    name="user"
                                    size={24}
                                    color="#000"
                                />
                            </TouchableOpacity>

                        )
                    }}

                />

                <Stack.Screen
                    name="detail"
                    component={Detail}
                    options={{
                        title: 'Detalhe',
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        },
                        headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <Feather
                                    name="shopping-bag"
                                    size={24}
                                    color="#000"
                                />
                            </TouchableOpacity>

                        )
                    }}
                />

                <Stack.Screen
                    name="find"
                    component={Find}
                    options={{
                        title: 'Procurar',
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        }
                    }}
                />

                <Stack.Screen
                    name="shop"
                    component={Shop}
                    options={{
                        title: 'Carrinho',
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        },
                        headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <Feather
                                    name="shopping-bag"
                                    size={24}
                                    color="#000"
                                />
                            </TouchableOpacity>

                        )
                    }}
                />

                <Stack.Screen
                    name="login"
                    component={Login}
                    options={{
                        title: 'LOGO ALI',
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        },
                        headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <Feather
                                    name="shopping-bag"
                                    size={24}
                                    color="#000"
                                />
                            </TouchableOpacity>

                        )
                    }}
                />

                <Stack.Screen
                    name="register"
                    component={Register}
                    options={{
                        title: 'Cadastro',
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        }
                    }}
                />

                <Stack.Screen
                    name="profile"
                    component={Profile}
                    options={{
                        title: 'Perfil',
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        }
                    }}
                />





            </Stack.Navigator>

        </NavigationContainer>
    )

}

export default Routes