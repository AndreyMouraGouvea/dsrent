import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, ActivityIndicator, StatusBar, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'
import API from '../components/Api';


function Profile() {

    const navigation = useNavigation();

    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(true);

    const userID = '2';

    async function handleProfile() {

        const response = await API.get(`api/user/${userID}`);
        setResult(response.data[0]);
        setLoading(false)
        // alert(result.nm_user)
        console.log(response.data[0].id);
        // alert(response.data[0].nm_user)

    }

    useEffect(() => {
        handleProfile();
    }, []);

    {/*
    const Divider = () => {
        return (
            <View style={{ marginBottom: 10, borderBottomColor: 'red', borderWidth: 2 }}>
            </View>
        )
    }
{*/}

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#121212" }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ backgroundColor: '#121212' }}
            >

                {loading ?
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="small" color="#999999" style={styles.loading} />
                    </View>
                    :
                    <View style={styles.container}>
                        <View style={styles.profileContainer}>
                            {/* tirar profile container para arrumar layout */}
                            <View style={styles.imageProfileContainer}>
                                <Feather
                                    name='user'
                                    size={40}
                                    color='#BB86FC'
                                    style={styles.icon}
                                />
                            </View>
                            <View style={styles.buttonEditContainer}>
                                <TouchableOpacity style={styles.buttonSend}
                                    onPress={handleProfile}
                                // () => navigation.navigate('home')
                                >
                                    <Text style={styles.buttonText}>Enviar Foto</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.buttonEdit}
                                onPress={() => alert('Editar perfil')}
                            // () => navigation.navigate('home')
                            >
                                <Text style={styles.buttonText}>Editar Perfil</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput style={styles.input}
                                placeholder='Nome que a pessoa escolheu'
                                value={result.nm_user}
                                placeholderTextColor={'#FFF'}
                                editable={false}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.input}
                                placeholder='E-mail que a pessoa escolheu'
                                value={result.ds_email}
                                placeholderTextColor={'#FFF'}
                                editable={false}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.input}
                                placeholder='Telefone que a pessoa escolheu'
                                value={result.ds_password}
                                placeholderTextColor={'#FFF'}
                                editable={false}
                            />
                        </View>
                    </View>
                }
                {/* 
                    <FlatList
                        data={result}
                        ItemSeparatorComponent={Divider}
                        keyExtractor={result}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.inputContainer}>
                                    <TextInput style={styles.input}
                                        placeholder='Nome que a pessoa escolheu'
                                        value={item.nm_user}
                                        placeholderTextColor={'#FFF'}
                                        editable={false}
                                    />
                                </View>
                            );

                        }}
                    />
                    */}
                {/* #3706b3 */}





                {/* 
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input}
                            placeholder='Endereço que a pessoa escolheu'
                            // value={response.data[0].ds_photo}
                            placeholderTextColor={'#FFF'}
                            editable={false}
                        />
                    </View>
                    <View style={styles.inputContainerPassword}>
                        <TextInput style={styles.input}
                            placeholder='Endereço que a pessoa escolheu'
                            placeholderTextColor={'#FFF'}
                            editable={false}
                        />
                    </View>

                */}
                {/* <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}
                onPress={ () => navigation.navigate('home')}
                >
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                onPress={ () => navigation.navigate('register')}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View> */}
            </ScrollView>
        </SafeAreaView>


    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
        marginTop: 20

    },
    loadingContainer: {
        top: Constants.statusBarHeight + 300,
        justifyContent: "center",
        alignItems: "center"

    },
    loading: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

    },
    profileContainer: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row', //editar essa parte
    },
    imageProfileContainer: {
        marginTop: 30,
        width: '30%', //editar width
        height: '35%', //editar height
        borderRadius: 50,
        borderWidth: 3,
        marginBottom: 5,
        borderColor: '#BB86FC',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    icon: {

    },
    inputContainer: {
        width: '90%',
        marginVertical: 15,
        color: '#FFF',
        backgroundColor: '#333333',
        borderRadius: 10,
        paddingHorizontal: 10

    },
    inputContainerPassword: {
        width: '90%',
        color: '#FFF',
        marginVertical: 15,
        backgroundColor: '#333333',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 25

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
    buttonEditContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: 5,
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: '-10%',
        marginBottom: '10%'
    },
    button: {
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3706b3',
        borderRadius: 10,
        elevation: 2,
        height: 70,
        paddingHorizontal: 10,

    },
    buttonSend: {
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BB86FC',
        borderRadius: 10,
        elevation: 2,
        height: 70,
        paddingHorizontal: 5,
        marginTop: 30,
        marginRight: 20
    },
    buttonEdit: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3706b3',
        borderRadius: 10,
        elevation: 2,
        height: 70,
        paddingHorizontal: 5,
    },
    buttonText: {
        color: '#FFF',
        fontFamily: 'Montserrat_700Bold',
        paddingHorizontal: 10,
        fontSize: 22

    }

})

export default Profile