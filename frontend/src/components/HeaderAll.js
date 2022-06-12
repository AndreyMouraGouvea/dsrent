import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'

function HeaderAll() {

    const navigation = useNavigation();

    return (

        <View style={styles.container}>
            <Text style={styles.title}>C'HERE</Text>
            <TouchableOpacity
                onPress={ () => navigation.navigate('profile')  }>
                <Feather
                    name='user'
                    size={26}
                    color='#BB86FC'
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>

    )

}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#121212',
        justifyContent: 'space-between',
        paddingTop: 16,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: -5,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,

    },
    title: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 20,
        color: '#BB86FC'

    },
    icon: {
        marginRight: 15

    }

})

export default HeaderAll