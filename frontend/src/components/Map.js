import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler';

function Map() {

    return (

        <>
        <Text style={styles.title}>MapTexto</Text>
        </>
        
    )

}

const styles = StyleSheet.create({


    title: {
        paddingHorizontal: 15,
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: '#4f4a4a'
    }

})

export default Map