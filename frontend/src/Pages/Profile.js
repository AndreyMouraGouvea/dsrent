import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'


function Profile() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* <View style={styles.header}>
                <Text style={styles.headerText}>Teste</Text>
            </View> */}
            <View style={styles.profileContainer}>
                <Feather
                    name='user'
                    size={26}
                    color='#BB86FC'
                    style={styles.icon}
                />
            </View>
            <View style={styles.buttonEditContainer}>
                <TouchableOpacity style={styles.buttonSend}
                    onPress={() => alert('Enviar Foto')}
                // () => navigation.navigate('home')
                >
                    <Text style={styles.buttonText}>Enviar Foto</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonEdit}
                    onPress={() => alert('Editar perfil')}
                // () => navigation.navigate('home')
                >
                    <Text style={styles.buttonText}>Editar Perfil</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.inputContainerLogin}>
                <TextInput style={styles.input}
                    placeholder='Nome que a pessoa escolheu'
                    placeholderTextColor={'#FFF'}
                    editable={false}
                />
            </View>
            <View style={styles.inputContainerPassword}>
                <TextInput style={styles.input}
                    placeholder='E-mail que a pessoa escolheu'
                    placeholderTextColor={'#FFF'}
                    editable={false}
                />
            </View>
            <View style={styles.inputContainerLogin}>
                <TextInput style={styles.input}
                    placeholder='Telefone que a pessoa escolheu'
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
        </View>


    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212'

    },
    profileContainer: {
        width: '20%',
        height: '12%',
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#BB86FC',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainerLogin: {
        width: '90%',
        marginVertical: 30,
        color: '#FFF',
        backgroundColor: '#333333',
        borderRadius: 10,
        paddingHorizontal: 10

    },
    inputContainerPassword: {
        width: '90%',
        color: '#FFF',
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
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: '10%'
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
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BB86FC',
        borderRadius: 10,
        elevation: 2,
        height: 70,
        paddingHorizontal: 5,
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