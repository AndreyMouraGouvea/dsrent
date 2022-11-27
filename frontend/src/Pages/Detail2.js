import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Feather, Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler'
import SwiperComponent from '../components/Swiper';
import SwiperComponent2 from '../components/Swiper2';
import Stars from 'react-native-stars'

function Detail2(props) {

    return (

        <View style={styles.container}>
            <View style={styles.swiperContent}>
                <SwiperComponent2 />
            </View>

            <View style={styles.headerContent}>
                <View style={{ width: '65%' }}>
                    <Text style={styles.house}>Feira Livre</Text>
                </View>
                <View style={{ width: '35%' }}>
                    <Text style={styles.rating}>Avaliações</Text>
                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                        <Stars
                            default={4}
                            count={5}
                            half={true}
                            starSize={20}
                            fullStar={<Ionicons name="md-star" size={24} style={styles.myStarStyle} />}
                            emptyStar={<Ionicons name="md-star-outline" size={24} style={styles.myStarStyle} />}
                            halfStar={<Ionicons name="md-star-half" size={24} style={styles.myStarStyle} />}
                        />
                    </View>
                </View>
            </View>

            <Text style={styles.price}>
            Gratuito
            </Text>
            <Text style={styles.description}>
            Venha com sua família para aproveitar o melhor de saudável natural que a terra provê
            </Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{
                    paddingHorizontal: 15,
                    marginTop: 35
                }}
            >
                <View style={styles.slide}>
                    <Image 
                    source={require('../assets/feira4.jpg')}
                    style={{ width: 90, height: 90, borderRadius: 8 }}
                    />
                </View>

                <View style={styles.slide}>
                    <Image 
                    source={require('../assets/feira5.jpg')}
                    style={{ width: 90, height: 90, borderRadius: 8 }}
                    />
                </View>

                <View style={styles.slide}>
                    <Image 
                    source={require('../assets/feira6.jpg')}
                    style={{ width: 90, height: 90, borderRadius: 8 }}
                    />
                </View>
            </ScrollView>


        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#121212'
    },
    swiperContent: {
        flexDirection: 'row',
        height: 340,
        width: '100%'
    },
    headerContent: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 20
    },
    house: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: '#FFF'
    },
    rating: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 9,
        color: '#FFF'
    },
    myStarStyle: {
        color: '#E7A74E',
        backgroundColor: 'transparent',
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1
    },
    price: {
        paddingHorizontal: 20,
        fontFamily: 'Montserrat_700Bold',
        fontSize: 16,
        color: '#FFF',
    },
    description: {
        fontFamily: 'Montserrat_500Medium',
        paddingHorizontal: 20,
        color: '#B3AEAE',
        fontSize: 14,
        lineHeight: 20,
        marginTop: 20
    },
    slide: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        height: 90,
        borderRadius: 8,
        marginRight: 20
    }


})

export default Detail2