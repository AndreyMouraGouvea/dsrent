import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import API from './Api';

function Geolocation() {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [region, setRegion] = useState(null);

    const [info, setData] = useState(null);

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permissão negada!');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            let address = await Location.reverseGeocodeAsync(location.coords);
            setLocation(location);

            // Se tiver testando de outro local que não exista customers, descomente o codigo abaixo
            //address[0].subregion='peruibe'
            const response = await API.get('api/customer/city/'+address[0].subregion);
            console.log(response.data)
            setData(response.data);

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

    useEffect(() => {
        console.log(info)
        mapMarkers()
    }, [info])

    function mapMarkers() {
        if(info !== null) {
            return info.map((report) => 
                <Marker coordinate={{
                    latitude: Number(report.ds_lat),
                    longitude: Number(report.ds_long)
                    }} 
                    title={report.nm_customer}
                    pinColor={'#b900ded2'}
                    description={report.ds_servico}
                    key={report.id}
                />
            )
        }
        return null
    }
 
    return (
        {
            componetWillMount(){
                this.index = 0;
            }

        },

        <View style={styles.container}>
            <MapView style={styles.mapView} initialRegion={region} showsUserLocation={true} >
                
                {mapMarkers()}

            </MapView>
            
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