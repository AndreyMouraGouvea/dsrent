import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native';
import MapView, { MapMarker, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import API from '../components/Api';

function Geolocation() {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [region, setRegion] = useState(null);
    const [city, setCity] = useState(null);
    const [data, setData] = useState(null);

    async function EventCity() {
        const response = await API.get('api/customer/city/'+city);

        setData(response.data);        
    }
  

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

            setCity(address[0].subregion);
            EventCity();

            console.log(data[1].ds_lat)

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
            <MapView style={styles.mapView} initialRegion={region} showsUserLocation={true} >
                <Marker coordinate={{
                    latitude: -24.31328969930359,
                    longitude: -46.98953948749344
                    }} 
                    title={"Habib's"}
                    pinColor={'#b900ded2'}
                    description={'Esfirras pela metade do preço'}
                    
                />
                <Marker coordinate={{
                    latitude: -24.312994147693683,
                    longitude:  -46.98891033062541
                    }} 
                    title={"Heilige Pocket Peruíbe"}
                    pinColor={'#b900ded2'}
                    description={'Chopp e copa do mundo'}
                    
                />
                <Marker coordinate={{
                    latitude: -24.325808448020467,
                    longitude: -46.99690408829719
                    }} 
                    title={"Cannil Club"}
                    pinColor={'#b900ded2'}
                    description={'Música ao vivo e promoção de bebidas'}
                    
                />
                <Marker coordinate={{
                    latitude: -24.319999533075503,
                    longitude: -46.990601601789095
                    }} 
                    title={"Quiosque 10 - Show na praia"}
                    pinColor={'#b900ded2'}
                    description={'Pica-pau irá se apresentar'}
                    
                />
                <Marker coordinate={{
                    latitude: -24.322530961461254,
                    longitude: -46.997761036936794
                    }} 
                    title={"Feira Livre"}
                    pinColor={'#b900ded2'}
                    description={'O melhor do saudável natural que a terra provê'}
                    
                />
                <Marker coordinate={{
                    latitude: -24.372094492943038,
                    longitude: -47.02006113204599
                    }} 
                    title={"Passarela do Balça"}
                    pinColor={'#b900ded2'}
                    description={'Passe por cima do Rio Guaraú'}
                    
                />

                <FlatList
                    data={data}
                    renderItem={({item}) => 
                    (
                    <Marker coordinate={{ 
                        latitude: item.ds_lat, 
                        longitude: item.ds_long }} 
                        title={item.nm_customer}
                        pinColor={'#b900ded2'}
                        description={item.ds_servico}                                                
                    />)}
                />


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