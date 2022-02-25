import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import Find from './Pages/Find'
import Shop from './Pages/Shop'
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
                    paddingTop: 5
                },
                tabBarActiveTintColor: '#FFF'
            }}
        >

            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Início',
                    tabBarIcon: () => (

                        <Feather
                            name="home"
                            size={24}
                            color= '#FFF'

                        />
                    ),
                    tabBarStyle: {
                        backgroundColor: '#0B329B',
                        borderTopColor: 'transparent',
                    },
                    tabBarLabelStyle: {
                        color: '#FFF'
                    }
                    // tabBarActiveTintColor: '#FFF'

                }}
            />
            <Tab.Screen
                name="find"
                component={Find}
                options={{
                    headerShown: false,
                    tabBarBadge: 2,
                    tabBarLabel: 'Pesquisar',
                    tabBarIcon: () => (

                        <Feather
                            name="search"
                            size={24}
                            color='#FFF'


                        />
                    ),
                    tabBarStyle: {
                        backgroundColor: '#0B329B',
                        borderTopColor: 'transparent',
                    },
                    tabBarLabelStyle: {
                        color: '#FFF'
                    }
                    // tabBarActiveTintColor: '#FFF'


                }} />
            <Tab.Screen
                name="shop"
                component={Shop}
                options={{
                    headerShown: false,
                    tabBarBadge: 1,
                    tabBarLabel: 'Loja',
                    tabBarIcon: () => (

                        <Feather
                            name="shopping-bag"
                            size={24}
                            color='#FFF'


                        />
                    ),
                    tabBarStyle: {
                        backgroundColor: '#0B329B',
                        color: '#fff',
                        borderTopColor: 'transparent',
                    },   
                    tabBarLabelStyle: {
                        color: '#FFF'
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
                            }}>

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




            </Stack.Navigator>

        </NavigationContainer>
    )

}

export default Routes