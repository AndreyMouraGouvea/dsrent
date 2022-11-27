import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'
import Detail from '../Pages/Detail';
import Find from '../Pages/Find';
import Shop from '../Pages/Shop';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Profile from '../Pages/Profile';
import Event from '../Pages/Event';
import Detail2 from '../Pages/Detail2';
import Detail3 from '../Pages/Detail3';

import Footer from './footer.routes';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

function StackRoutes() {

    return (

        <Stack.Navigator>

            <Stack.Screen
                name="footer"
                component={Footer}
                options={{
                    headerShown: false,

                }}


            />

            <Stack.Screen
                name="detail"
                component={Detail}
                options={{
                    title: 'Detalhes',
                    headerBackTitle: 'Voltar',
                    headerBackTitleStyle: {
                        fontFamily: 'Montserrat_500Medium'
                    },
                    headerTitleStyle: {
                        fontFamily: 'Montserrat_700Bold'
                    },
                    headerTintColor: '#BB86FC',
                    headerStyle: {
                        backgroundColor: '#121212'
                    }
                }}
            />
            <Stack.Screen
                name="detail2"
                component={Detail2}
                options={{
                    title: 'Detalhes',
                    headerBackTitle: 'Voltar',
                    headerBackTitleStyle: {
                        fontFamily: 'Montserrat_500Medium'
                    },
                    headerTitleStyle: {
                        fontFamily: 'Montserrat_700Bold'
                    },
                    headerTintColor: '#BB86FC',
                    headerStyle: {
                        backgroundColor: '#121212'
                    }
                }}
            />
            <Stack.Screen
                name="detail3"
                component={Detail3}
                options={{
                    title: 'Detalhes',
                    headerBackTitle: 'Voltar',
                    headerBackTitleStyle: {
                        fontFamily: 'Montserrat_500Medium'
                    },
                    headerTitleStyle: {
                        fontFamily: 'Montserrat_700Bold'
                    },
                    headerTintColor: '#BB86FC',
                    headerStyle: {
                        backgroundColor: '#121212'
                    }
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
                    title: "C'HERE",
                    headerTitleStyle: {
                        fontFamily: 'Montserrat_700Bold'
                    },
                    headerShown: false,
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
                    headerTintColor: '#BB86FC',
                    title: 'Cadastro',
                    headerBackTitle: 'Voltar',
                    headerBackTitleStyle: {
                        fontFamily: 'Montserrat_500Medium'
                    },
                    headerTitleStyle: {
                        fontFamily: 'Montserrat_700Bold',

                    },
                    headerStyle: {
                        backgroundColor: '#121212',

                    },

                }}
            />

            <Stack.Screen
                name="profile"
                component={Profile}
                options={{
                    title: 'Perfil',
                    headerTitleStyle: {
                        fontFamily: 'Montserrat_700Bold'
                    },
                    headerShown: false,
                    headerBackgroundContainerStyle: {
                        backgroundColor: '#121212'
                    },
                    headerBackground: {

                    }
                }}
            />

            <Stack.Screen
                name="event"
                component={Event}
                options={{
                    title: 'Evento',
                    headerTitleStyle: {
                        fontFamily: 'Montserrat_700Bold'
                    },
                    headerShown: false,
                    headerBackgroundContainerStyle: {
                        backgroundColor: '#121212'
                    },
                    headerBackground: {

                    }
                }}
            />

        </Stack.Navigator>

    )

}

export default StackRoutes