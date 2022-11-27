import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location'

function Geolocation() {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [region, setRegion] = useState(null);



    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permissão negada!');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);

            setRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.009,
                longitudeDelta: 0.009
            })
            // ou 0.014

        })();
    }, []);


    let text = 'Esperando...';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }


    return (

        <View style={styles.container}>
            <MapView style={styles.mapView} initialRegion={region} showsUserLocation={true} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mapView: {
        width: '100%',
        height: '100%'
    },
    text: {
        fontSize: 16
    }
})

export default Geolocation