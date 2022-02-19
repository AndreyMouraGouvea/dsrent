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


function Routes() {

    return (

        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name="home"
                    component={Home}
                    options={{
                        title: 'LOGO ALI',
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        },
                        headerRight: () => (
                            <TouchableOpacity style={{
                                marginRight: 15,
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'space-around'
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

            <Stack.Navigator>
                        <Tab.Screen name="home" component={Home}
                        options={{
                            tabBarBadge: 3
                        }} />
                        <Tab.Screen name="find" component={Find} />
                        <Tab.Screen name="shop" component={Shop} />
                    </Stack.Navigator>           
            
                
                    
                
            






        </NavigationContainer>
    )

}

export default Routes