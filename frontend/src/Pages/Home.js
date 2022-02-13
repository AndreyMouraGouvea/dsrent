import { View, Text, StyleSheet} from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import New from '../components/New';

function Home() {

    return (

        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: '#FFF' }}
        > 
        
        <View style={styles.header}>
            <View style={styles.inputArea}>
                <Feather 
                name="search"
                size={24}
                color= '#000'
                /> 
               <TextInput 
                placeholder='O que está procurando?'
                style={styles.input}
               />
            </View>
            
        </View>

            {/* flat list => api */}  

        <View style={styles.contentNew}>
            <Text style={styles.title}>Novidades</Text>


        </View>

        <ScrollView
         horizontal 
         showsHorizontalScrollIndicator={false}
         style={{ paddingHorizontal: 15 }}
         >

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