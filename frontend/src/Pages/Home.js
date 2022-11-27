import React from 'react';
import { SafeAreaView } from 'react-native'
import Geolocation from '../components/Geolocation';
import NewHeader from '../components/NewHeader';




function Home() {


    return (
        <>
        <SafeAreaView style={{flex: 1, backgroundColor: "#121212"}}>
            <NewHeader />
            <Geolocation />
        </SafeAreaView>
        </>

    )

}


export default Home