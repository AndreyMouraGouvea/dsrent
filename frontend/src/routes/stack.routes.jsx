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

    )

}

export default StackRoutes