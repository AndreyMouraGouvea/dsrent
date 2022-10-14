import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


function Register() {

    const navigation = useNavigation();

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: '#121212' }}
        >

            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Crie sua Conta</Text>
                </View>
                <View style={styles.inputContainerName}>
                    <TextInput style={styles.input}
                        placeholder='Digite seu Nome'
                        placeholderTextColor={'#FFF'}
                    />
                </View>
                <View style={styles.inputContainerEmail}>
                    <TextInput style={styles.input}
                        placeholder='Digite seu Email'
                        placeholderTextColor={'#FFF'}
                    />
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
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('login')}
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
        backgroundColor: '#3706B3',
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