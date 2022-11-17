import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Platform, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';


function Event() {

    const navigation = useNavigation();

    const [image, setImage] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);

    useEffect(async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Permissão negada!')
            }
        }
    }, [])

    const PickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [4, 3],
            quality: 1
        })
        console.log(result)
        if (!result.cancelled) {
            setImage(result.uri)
        }
    }
    const PickImage2 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [4, 3],
            quality: 1
        })
        console.log(result)
        if (!result.cancelled) {
            setImage2(result.uri)
        }
    }
    const PickImage3 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [4, 3],
            quality: 1
        })
        console.log(result)
        if (!result.cancelled) {
            setImage3(result.uri)
        }
    }



    

    return (

        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: '#121212', height: '100%' }}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Novo Evento</Text>
                </View>
                {/* novo */}
                <View style={styles.imageContainer}>
                    <TouchableOpacity onPress={PickImage}>
                        <Text style={styles.imageText}>Selecione a imagem de capa</Text>
                        <View style={{ alignItems: 'center' }}>
                            {image && <Image source={{ uri: image }} style={{
                                width: 200,
                                height: 200,
                                borderRadius: 100,
                                marginBottom: 15
                            }} />}
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.imageContainer}>
                    <TouchableOpacity onPress={PickImage2}>
                        <Text style={styles.imageText}>Selecione a segunda imagem</Text>
                        <View style={{ alignItems: 'center' }}>
                            {image2 && <Image source={{ uri: image2 }} style={{
                                width: 200,
                                height: 200,
                                borderRadius: 100,
                                marginBottom: 15
                            }} />}
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.imageContainer}>
                    <TouchableOpacity onPress={PickImage3}>
                        <Text style={styles.imageText}>Selecione a terceira imagem</Text>
                        <View style={{ alignItems: 'center' }}>
                            {image3 && <Image source={{ uri: image3 }} style={{
                                width: 200,
                                height: 200,
                                borderRadius: 100,
                                marginBottom: 15
                            }} />}
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input}
                        placeholder='Digite o nome do evento'
                        placeholderTextColor={'#FFF'}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input}
                        placeholder='Digite o endereço do evento'
                        placeholderTextColor={'#FFF'}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TouchableOpacity>
                        <TextInput style={styles.input}
                            placeholder='Selecione a data do evento'
                            placeholderTextColor={'#FFF'}
                            editable={false}
                        />
                        {/* DATE PICKER */}




                        
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <TouchableOpacity>
                        <TextInput style={styles.input}
                            placeholder='Selecione o horário do evento'
                            placeholderTextColor={'#FFF'}
                            editable={false}

                        />

                            

                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input}
                        placeholder='Digite a descrição do evento'
                        placeholderTextColor={'#FFF'}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('home')}
                    >
                        <Text style={styles.buttonText}>Criar Evento</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212'

    },
    imageContainer: {
        width: '90%',
        marginVertical: 30,
        color: '#FFF',
        backgroundColor: '#121212',
        borderRadius: 10,
        paddingHorizontal: 10,
        borderColor: '#BB86FC',
        borderWidth: 3,
        borderStyle: 'dotted',
        justifyContent: 'center',
        padding: 10,
        paddingBottom: -12,
    },
    inputContainer: {
        width: '90%',
        marginVertical: 15,
        color: '#FFF',
        backgroundColor: '#333333',
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    imageText: {
        fontSize: 13,
        paddingTop: 5,
        color: '#BB86FC',
        fontFamily: 'Montserrat_500Medium',
        paddingHorizontal: 8,
        height: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,


    },
    input: {
        fontSize: 13,
        color: '#FFF',
        fontFamily: 'Montserrat_500Medium',
        paddingHorizontal: 10,
        height: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,

    },
    header: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        color: '#000'

    },
    headerText: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#FFF'


    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        marginVertical: '20%'

    },
    button: {
        width: '55%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3706B3',
        borderRadius: 10,
        elevation: 2,
        height: 70,
        paddingHorizontal: 10,

    },
    buttonText: {
        color: '#FFF',
        fontFamily: 'Montserrat_700Bold',
        paddingHorizontal: 10,
        fontSize: 22

    },
    dateComponent: {
        width: 350
    }

})

export default Event