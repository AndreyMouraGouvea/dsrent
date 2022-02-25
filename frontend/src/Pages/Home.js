import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Find from './Find';
import New from '../components/New';
import House from '../components/House';
import Recommended from '../components/Recommended';
import Shop from './Shop';



function Home() {


    const navigation = useNavigation();

    // navigation.navigate('detail') 




    return (

        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: '#FFF' }}
        >

            {/* <View style={styles.header}>
                <View style={styles.inputArea}>
                    <Feather
                        name="search"
                        size={24}
                        color='#000'
                    />
                    <TextInput
                        placeholder='O que está procurando?'
                        style={styles.input}
                    />
                </View>

            </View> */}

            {/* flat list => api */}

            <View style={styles.contentNew}>
                <Text style={styles.title}>Novidades</Text>


            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ paddingHorizontal: 15 }}
            >

                <New
                    cover={require('../assets/house1.jpg')}
                    name='Casa de Praia'
                    description='Casa nova uma quadra do mar, lugar seguro e monitorado 24 horas'
                    price='R$ 824,90'
                    onPress={() => navigation.navigate('detail')}

                />

                <New
                    cover={require('../assets/house2.jpg')}
                    name='Casa Floripa'
                    description='Casa nova uma quadra do mar, lugar seguro e monitorado 24 horas'
                    price='R$ 1500,00'
                    onPress={() => navigation.navigate('detail')}


                />

                <New
                    cover={require('../assets/house3.jpg')}
                    name='Rancho SP'
                    description='Casa nova uma quadra do mar, lugar seguro e monitorado 24 horas'
                    price='R$ 953,90'
                    onPress={() => navigation.navigate('detail')}


                />



            </ScrollView>


            <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
                <Text style={[styles.title, { marginTop: 20 }]}>Próximo de você</Text>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ paddingHorizontal: 15 }}
            >
                <House
                    cover={require('../assets/house4.jpg')}
                    price='R$ 954,80'
                    description='Sobrado, três dormitórios, dois banheiros, piscina e churrasqueira'
                />
                <House
                    cover={require('../assets/house5.jpg')}
                    price='R$ 1030,90'
                    description='Casa de frente ao mar, três suítes e cinco vagas de garagem'
                />
                <House
                    cover={require('../assets/house6.jpg')}
                    price='R$ 1200,90'
                    description='Possui 45m², uma suíte,
             cozinha equipada e uma linda vista da vida noturna'
                />


            </ScrollView>

            <Text style={[styles.title, { marginTop: 20 }]}>
                Dica do Dia
            </Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ paddingHorizontal: 15 }}
            >

                <Recommended
                    cover={require('../assets/house1.jpg')}
                    house='Casa Floripa'
                    offer='20%'
                />
                <Recommended
                    cover={require('../assets/house4.jpg')}
                    house='Casa São Paulo'
                    offer='15%'
                />
                <Recommended
                    cover={require('../assets/house6.jpg')}
                    house='Rancho na Praia'
                    offer='10%'
                />

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

export default Home