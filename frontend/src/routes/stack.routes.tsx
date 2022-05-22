import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'
import Home from '../Pages/Home';
import Detail from '../Pages/Detail';
import Find from '../Pages/Find';
import Shop from '../Pages/Shop';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Profile from '../Pages/Profile';

const { Screen, Navigator } = createNativeStackNavigator();

function StackRoutes() {

    const navigation = useNavigation();
    return (

        <Navigator>
                <Screen
                    name='home'
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                />
                <Screen
                    name="detail"
                    component={Detail}
                    options={{
                        title: 'Detalhe',
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        },
                        headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 15 }}
                                >
                                <Feather
                                    name="shopping-bag"
                                    size={24}
                                    color="#000"

                                />
                            </TouchableOpacity>

                        )
                    }}
                />
                <Screen
                    name="find"
                    component={Find}
                    options={{
                        title: 'Procurar',
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        }
                    }}
                />
                <Screen
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
                <Screen
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
                <Screen
                    name="register"
                    component={Register}
                    options={{
                        title: 'Cadastro',
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        }
                    }}
                />
                <Screen
                    name="profile"
                    component={Profile}
                    options={{
                        title: 'Perfil',
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        }
                    }}
                />
        </Navigator>

    )

}

export default StackRoutes