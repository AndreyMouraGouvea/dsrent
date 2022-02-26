import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';


function Login() {

    const navigation = useNavigation();

    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Para Acessar o Seu Perfil
                    Faça o Login ou Cadastre-se</Text>
            </View>
            <View style={styles.inputContainerLogin}>
                <TextInput style={styles.input}
                    placeholder='Digite seu Login'
                    placeholderTextColor={'#FFF'}
                />
            </View>
            <View style={styles.inputContainerPassword}>
                <TextInput style={styles.input}
                    placeholder='Digite sua Senha'
                    placeholderTextColor={'#FFF'}
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}
                    onPress={ () => navigation.navigate('home')}
                    >Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>

    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    inputContainerLogin: {
        width: '90%',
        marginVertical: 30,
        color: '#FFF',
        backgroundColor: '#0B329B',
        borderRadius: 10,
        paddingHorizontal: 10

    },
    inputContainerPassword: {
        width: '90%',
        color: '#FFF',
        backgroundColor: '#0B329B',
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


    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: '20%'

    },
    button: {
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0B329B',
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

    }

})

export default Login