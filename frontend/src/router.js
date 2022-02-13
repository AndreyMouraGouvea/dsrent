import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import { Feather } from '@expo/vector-icons'

const Stack = createNativeStackNavigator();


function Routes() {

    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="Home"
                component={Home}
                options={{
                    title: 'ALUGUE',
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
                name="Detail" 
                component={Detail} 
                options={{
                    title: 'DETALHE',
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