import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Platform, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import FormData from 'form-data';
import { GOOGLE_API_KEY } from '../../enviroment';
import { GEOLOCATION_API } from '../../enviroment';
import axios from 'axios';


function Event() {

    const navigation = useNavigation();
    const [address, setAdress] = useState('');
    const [street, setStreet] = useState(null);
    const [number, setNumber] = useState(null);

    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [city, setCity] = useState(null);
    const [uf, setUF] = useState(null);
    const [status, setStatus] = useState('1');
    const [service, setService] = useState(null);
    const [userID, setUserID] = useState(null);

    // images
    const [image, setImage] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [image4, setImage4] = useState(null);
    const [image5, setImage5] = useState(null);
    const [image6, setImage6] = useState(null);

    //take full adress to take lat and long

    const finalAddress = street + ', ' + number + ' - ' + city + ' - ' + uf;


    async function getCoord() {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${finalAddress}&language=pt-BR&key=${GEOLOCATION_API}`)

        const data = await response.json();

        setLat(data.results[0].geometry.location.lat); 
        setLong(data.results[0].geometry.location.lng);

        console.log(lat, long);
            

    }

    useEffect(() => {
        getCoord();
    }, []);


    async function createEvent() {
        let formData = new FormData();
        let image2Data = new FormData();
        let image3Data = new FormData();
        let image4Data = new FormData();
        let image5Data = new FormData();
        let image6Data = new FormData();

        formData.append('nm_customer', name);   //append the values with key, value pair
        formData.append('ds_email', email);
        formData.append('nr_telefone', phone);
        formData.append('ds_lat', lat);
        formData.append('ds_long', long);
        formData.append('nm_city', city);
        formData.append('uf_state', uf);
        formData.append('cd_status', status);
        formData.append('ds_servico', service);
        formData.append('image', image, image.name);
        formData.append('id_user', userID);

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }

        axios.post("http://chere.com.br/api/customer", formData, config)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });

        // image 2
        image2Data.append('id_customer', userID);
        image2Data.append('image', image2, image2.name);

        axios.post("http://chere.com.br/api/photo", image2Data, config)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });

        // image 3
        image3Data.append('id_customer', userID);
        image3Data.append('image', image3, image3.name);

        axios.post("http://chere.com.br/api/photo", image3Data, config)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });

        image4Data.append('id_customer', userID);
        image4Data.append('image', image4, image.name);

        axios.post("http://chere.com.br/api/photo", image4Data, config)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });

        image5Data.append('id_customer', userID);
        image5Data.append('image', image5, image.name);

        axios.post("http://chere.com.br/api/photo", image5Data, config)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });

        image6Data.append('id_customer', userID);
        image6Data.append('image', image6, image.name);

        axios.post("http://chere.com.br/api/photo", image6Data, config)
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
    const PickImage2 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [4, 3],
            quality: 1
        })
        console.log(result.assets[0].uri)
        if (!result.assets[0].cancelled) {
            setImage2(result.assets[0].uri)
        }
    }
    const PickImage3 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [4, 3],
            quality: 1
        })
        console.log(result.assets[0].uri)
        if (!result.assets[0].cancelled) {
            setImage3(result.assets[0].uri)
        }
    }
    const PickImage4 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [4, 3],
            quality: 1
        })
        console.log(result.assets[0].uri)
        if (!result.assets[0].cancelled) {
            setImage4(result.assets[0].uri)
        }
    }
    const PickImage5 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [4, 3],
            quality: 1
        })
        console.log(result.assets[0].uri)
        if (!result.assets[0].cancelled) {
            setImage5(result.assets[0].uri)
        }
    }
    const PickImage6 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [4, 3],
            quality: 1
        })
        console.log(result.assets[0].uri)
        if (!result.assets[0].cancelled) {
            setImage6(result.assets[0].uri)
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


    // DATE PICKER

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Data: ');
    const [textDate, setTextDate] = useState('');
    const [textHour, setTextHour] = useState('');


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        setText(fDate)
        setTextDate(fDate)

        console.log(fDate)
    }

    // time

    const onChangeTime = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');

        let tempDate2 = new Date(currentDate);
        let fTime2 = '' + tempDate2.getHours() + ':' + tempDate2.getMinutes();

        setTextHour(fTime2)

        console.log(fTime2)
    }



    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode)
    }



    // taking the lat and long





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
                <View style={styles.imageContainer}>
                    <TouchableOpacity onPress={PickImage4}>
                        <Text style={styles.imageText}>Selecione a quarta imagem</Text>
                        <View style={{ alignItems: 'center' }}>
                            {image4 && <Image source={{ uri: image4 }} style={{
                                width: 200,
                                height: 200,
                                borderRadius: 100,
                                marginBottom: 15
                            }} />}
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.imageContainer}>
                    <TouchableOpacity onPress={PickImage5}>
                        <Text style={styles.imageText}>Selecione a quinta imagem</Text>
                        <View style={{ alignItems: 'center' }}>
                            {image5 && <Image source={{ uri: image5 }} style={{
                                width: 200,
                                height: 200,
                                borderRadius: 100,
                                marginBottom: 15
                            }} />}
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.imageContainer}>
                    <TouchableOpacity onPress={PickImage6}>
                        <Text style={styles.imageText}>Selecione a sexta imagem</Text>
                        <View style={{ alignItems: 'center' }}>
                            {image6 && <Image source={{ uri: image6 }} style={{
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
                        onChangeText={(data) => setName(data)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input}
                        placeholder='Digite a rua do evento'
                        placeholderTextColor={'#FFF'}
                        onChangeText={(data) => setStreet(data)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input}
                        placeholder='Digite o número do evento'
                        placeholderTextColor={'#FFF'}
                        onChangeText={(data) => setNumber(data)}
                        maxLength={5}
                        keyboardType='numeric'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input}
                        placeholder='Digite a cidade do evento'
                        placeholderTextColor={'#FFF'}
                        onChangeText={(data) => setCity(data)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input}
                        placeholder='Digite o UF do estado - Ex. SP'
                        placeholderTextColor={'#FFF'}
                        maxLength={2}
                        onChangeText={(data) => setUF(data.toUpperCase())}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input}
                        placeholder='Digite o telefone para contato'
                        placeholderTextColor={'#FFF'}
                        keyboardType='numeric'
                        onChangeText={(data) => setPhone(data)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TouchableOpacity onPress={() => showMode('date')}>
                        <TextInput style={styles.input}
                            placeholder='Selecione a data do evento'
                            placeholderTextColor={'#FFF'}
                            editable={false}
                        />
                        {/* DATE PICKER */}

                        {show && (
                            <DateTimePicker
                                testID='dateTimePicker'
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display='default'
                                onChange={onChange}

                            />)}

                        {textDate ?
                            <View style={styles.inputContainerDate}>
                                <TouchableOpacity>
                                    <TextInput style={styles.input}
                                        value={text}
                                        placeholderTextColor={'#FFF'}
                                        editable={false}
                                    />
                                </TouchableOpacity>
                            </View>
                            :
                            <></>

                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <TouchableOpacity onPress={() => showMode('time')}>
                        <TextInput style={styles.input}
                            placeholder='Selecione o horário do evento'
                            placeholderTextColor={'#FFF'}
                            editable={false}

                        />

                        {/* TIME PICKER */}

                        {show && (
                            <DateTimePicker
                                testID='dateTimePicker'
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display='default'
                                onChange={onChangeTime}

                            />)}

                        {textHour ?
                            <View style={styles.inputContainerDate}>
                                <TouchableOpacity>
                                    <TextInput style={styles.input}
                                        value={textHour}
                                        placeholderTextColor={'#FFF'}
                                        editable={false}
                                    />
                                </TouchableOpacity>
                            </View>
                            :
                            <></>

                        }



                    </TouchableOpacity>
                </View>


                <View style={styles.inputDescriptionContainer}>
                    <TextInput style={styles.inputDescription}
                        placeholder='Digite a descrição do evento'
                        placeholderTextColor={'#FFF'}
                        multiline={true}
                        maxFontSizeMultiplier={1}
                        maxLength={150}
                        numberOfLines={5}
                        onChangeText={(data) => setService(data)}


                    />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}
                        onPress={createEvent}
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
    inputDescriptionContainer: {
        width: '90%',
        marginVertical: 15,
        color: '#FFF',
        backgroundColor: '#333333',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingBottom: 6,
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        height: 150
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
    inputDescription: {
        fontSize: 13,
        color: '#FFF',
        fontFamily: 'Montserrat_500Medium',
        paddingHorizontal: 10,
        height: 150,
        lineHeight: 10,




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
        backgroundColor: '#b900ded2',
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