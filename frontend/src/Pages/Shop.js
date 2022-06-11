import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Find from './Find';
import New from '../components/New';
import House from '../components/House';
import Recommended from '../components/Recommended';
import Login from '../components/Login';
import HeaderAll from '../components/HeaderAll';



function Shop() {


    const navigation = useNavigation();

    // navigation.navigate('detail') 




    return (

        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: '#FFF' }}
        >
            <HeaderAll />
            <ScrollView
            showsHorizontalScrollIndicator={false}
            style={{ paddingHorizontal: 15 }}
            >
                <Login />

            </ScrollView>
    
        </ScrollView>

    )

}

const styles = StyleSheet.create({

    header: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20
    },
    inputArea: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        backgroundColor: '#FFF',
        elevation: 2,
        paddingHorizontal: 10,
        height: 37,
        borderRadius: 10
    },
    input: {
        fontFamily: 'Montserrat_500Medium',
        paddingHorizontal: 10,
        fontSize: 13,
        width: '90%'
    },
    contentNew: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    title: {
        paddingHorizontal: 15,
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: '#4f4a4a'
    }

})

export default Shop