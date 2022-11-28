import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Dimensions } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import New from '../components/New';
import House from '../components/House';
import Recommended from '../components/Recommended';
import HeaderAll from '../components/HeaderAll';
import API from '../components/Api';


function Find() {
    const [data, setData] = useState(null);
    const navigation = useNavigation();

    // navigation.navigate('detail') 

    async function searchEvent(search){
        if(search != ""){
            const response = await API.get('api/customer/busca/'+search);
            setData(response.data);
        }
        else{
            const response = ""
            setData(response.data);
        }
    }

    return (

        <SafeAreaView style={{flex: 1, backgroundColor: "#121212"}}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ backgroundColor: '#121212' }}
            >
                <HeaderAll />
                <View style={styles.header}>
                    <View style={styles.inputArea}>
                        <Feather
                            name="search"
                            size={24}
                            color='#FFF'
                        />
                        <TextInput
                            placeholder='O que está procurando?'
                            placeholderTextColor={'#FFF'}
                            style={styles.input}
                            onChangeText={(data)=>searchEvent(data)}
                        />
                    </View>

                </View>

                {/* flat list => api */}
                <FlatList
                    data={data}
                    renderItem={({item}) => 
                    (
                        <View style={styles.resultadosBusca}>
                            <House
                                cover={{uri: `${item.ds_photo}`}}
                                price={item.nm_customer}
                                description={item.ds_servico}
                            />
                        </View>
                    )}
                />

                <View style={styles.contentNew}>
                    <Text style={styles.title}>Novidades</Text>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ paddingHorizontal: 15 }}
                >
                    <New
                        cover={require('../assets/cannil.jpg')}
                        name='Show no Cannil'
                        description='Música ao vivo e promoção de bebidas - A partir das 20h'
                        price='R$ 10,90'
                        onPress={() => navigation.navigate('detail')}

                    />

                    <New
                        cover={require('../assets/feira.jpg')}
                        name='Feira Livre'
                        description='Venha com sua família para aproveitar o melhor de saudável natural que a terra provê'
                        price='Gratuito'
                        onPress={() => navigation.navigate('detail2')}


                    />

                    <New
                        cover={require('../assets/showpraia.jpg')}
                        name='Show na Praia'
                        description='Pica-pau irá apresentar a partir das 10h da manhã no quiosque 10'
                        price='Gratuito'
                        onPress={() => navigation.navigate('detail3')}


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
                        cover={require('../assets/lavie.jpg')}
                        price='Gratuito até 00h'
                        description='La Vie - Show ao vivo e bebidas de qualidade ------ Dia 10/12'
                    />
                    <House
                        cover={require('../assets/totem.jpg')}
                        price='R$ 30,90'
                        description='TOTEM Beach Bar - Rock ao vivo todos finais de semana'
                    />
                    <House
                        cover={require('../assets/hippie.jpeg')}
                        price='Gratuito'
                        description='Feira Hippie em Peruíbe - Aberta para toda a família com itens culturais e naturais'
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
                        cover={require('../assets/mcdonalds.jpg')}
                        house="Promoção Black Friday no McDonald's"
                        offer='30%'
                    />
                    <Recommended
                        cover={require('../assets/cannil.jpg')}
                        house='Promoção em bebidas no Cannil'
                        offer='15%'
                    />
                    <Recommended
                        cover={require('../assets/habibs.jpg')}
                        house="Esfirras pela metade do preço no Habib's"
                        offer='50%'
                    />

                </ScrollView>

            </ScrollView>
        </SafeAreaView>

    )

}

const styles = StyleSheet.create({

    header: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20,
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
        borderRadius: 10,
        backgroundColor: '#333333',

    },
    input: {
        fontFamily: 'Montserrat_500Medium',
        paddingHorizontal: 10,
        fontSize: 13,
        width: '90%',
        color: '#FFF',


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
        color: '#FFF'
    },
    resultadosBusca: {
        width: Dimensions.get('window').width,

        flexDirection: 'column',
        alignItems: 'center'
    }

})

export default Find