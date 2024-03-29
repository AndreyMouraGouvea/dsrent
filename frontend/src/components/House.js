import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

function House(props) {

    return (

        <TouchableOpacity
            onPress={props.onPress}
            style={styles.container}
        >
            <View>
                <Image 
                source={props.cover}
                style={styles.cover}
                />
            </View>


            <View style={styles.content}>
                <Text style={styles.price}>
                    {props.price}
                </Text>
                <Text style={styles.description}>
                    {props.description}
                </Text>
            </View>
        </TouchableOpacity>

    )


}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 260,
        height: 70,
        backgroundColor: '#121212',
        borderWidth: 2,
        borderColor: '#2C2C2C',
        elevation: 2,
        padding: 6,
        marginVertical: 5,
        marginRight: 20,
        marginLeft: 2,
        borderRadius: 10

    },
    cover: {
        borderRadius: 10,
        width: 60,
        height: 60
    },
    content: {
        width: '65%',
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: '100%'

    },
    description: {
        fontSize: 10,
        fontFamily: 'Montserrat_500Medium',
        color: '#FFF'
    },
    price: {
        fontSize: 14,
        color: '#FFF'
    }

})

export default House