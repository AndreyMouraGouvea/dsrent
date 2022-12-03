import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker'; 
import axios from "axios";
import FormData from 'form-data';


function Register() {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [image, setImage] = useState(null);

    const navigation = useNavigation();

    async function createUser(){
        let formData = new FormData();    //formdata object

        formData.append('nm_user', name);   //append the values with key, value pair
        formData.append('ds_email', email);
        formData.append('ds_password', password);
        formData.append('image', image, image.name);

        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }

        axios.post("http://chere.com.br/api/user", formData, config)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    }

    const PickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [4, 3],
            quality: 1
        })
        console.log(result.assets[0].uri)
        if (!result.assets[0].cancelled) {
            setImage(result.assets[0].uri)
        }
    }

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Permissão negada!')
                }
            }
        })();
    }, []);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: '#121212' }}
        >

            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Crie sua Conta</Text>
                </View>
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
                <View style={styles.inputContainerName}>
                    <TextInput style={styles.input}
                        placeholder='Digite seu Nome'
                        placeholderTextColor={'#FFF'}
                        onChangeText={(data) => setName(data)}
                    />
                </View>
                <View style={styles.inputContainerEmail}>
                    <TextInput style={styles.input}
                        placeholder='Digite seu Email'
                        placeholderTextColor={'#FFF'}
                        onChangeText={(data) => setEmail(data)}
                    />
                </View>

                <View style={styles.inputContainerPassword}>
                    <TextInput style={styles.input}
                        placeholder='Digite sua Senha'
                        placeholderTextColor={'#FFF'}
                        onChangeText={(data) => setPassword(data)}
                        secureTextEntry={true}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}
                        onPress={createUser} 
                    >
                        <Text style={styles.buttonText}>Cadastrar</Text>
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
    header: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        color: '#000'

    },
    headerText: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#FFF'


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
    inputContainerName: {
        width: '90%',
        color: '#FFF',
        marginVertical: 20,
        backgroundColor: '#333333',
        borderRadius: 10,
        paddingHorizontal: 10

    },
    inputContainerEmail: {
        width: '90%',
        color: '#FFF',
        marginVertical: 20,
        backgroundColor: '#333333',
        borderRadius: 10,
        paddingHorizontal: 10

    },
    inputContainerLogin: {
        width: '90%',
        color: '#FFF',
        marginVertical: 20,
        backgroundColor: '#333333',
        borderRadius: 10,
        paddingHorizontal: 10

    },
    inputContainerPassword: {
        width: '90%',
        color: '#FFF',
        marginVertical: 20,
        backgroundColor: '#333333',
        borderRadius: 10,
        paddingHorizontal: 10

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
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: '15%'
        // marginBottom: '20%'

    },
    button: {
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b900ded2',
        borderRadius: 10,
        elevation: 2,
        height: 70,
        paddingHorizontal: 10,
        // marginBottom: '5%'

    },
    buttonText: {
        color: '#FFF',
        fontFamily: 'Montserrat_700Bold',
        paddingHorizontal: 10,
        fontSize: 22

    }

})

export default Register