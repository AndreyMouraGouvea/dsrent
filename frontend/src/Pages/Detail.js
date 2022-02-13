import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import { Feather, Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler'
import SwiperComponent from '../components/Swiper';

function Detail() {

    return (

        <View style={styles.container}>
            <View style={styles.swiperContent}>
                <SwiperComponent />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({ 

    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    swipContent: {
        flexDirection: 'row',
        height: 340,
        width: '100%'
    }


})

export default Detail