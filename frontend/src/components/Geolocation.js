import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList, } from 'react-native';
import MapView, { MapMarker, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import API from '../components/Api';

function Geolocation() {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [region, setRegion] = useState(null);
    const [city, setCity] = useState(null);

    const [info, setData] = useState(null);
    const [state, setState] = useState(null);

    // async function eventCity() {
    //     const response = await API.get('api/customer/city/'+city);

    //     setData(response.data);
    // }


    // fetch(`http://chere.com.br/api/customer/city/${city}`)
    //     .then(res => res.json())
    //     .then(res => {
    //         this.state = res
    //     })
    //     .catch(console.error);



    // mapMarkers = () => {
    //     return this.state.reports.map((report) => 
    //         <Marker coordinate={{
    //             latitude: report.ds_lat,
    //             longitude: report.ds_long
    //             }} 
    //             title={report.nm_customer}
    //             pinColor={'#b900ded2'}
    //             description={report.ds_servico}
                
    //         />
    //     )
    // }

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
            // eventCity();

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
        {
            componetWillMount(){
                this.index = 0;
            }

        },

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
                    description={'O melhor do natural para a sua saúde'}
                    
                />
                <Marker coordinate={{
                    latitude: -24.28843999985555,
                    longitude: -46.979593799954074
                    }} 
                    title={"Amostra Cultural"}
                    pinColor={'#b900ded2'}
                    description={'Amostra para celebrar os 100 anos da Semana de Arte Moderna'}
                    
                />
                <Marker coordinate={{
                    latitude: -24.36146611366831,
                    longitude: -47.01731148459294
                    }} 
                    title={"Festa da Criança"}
                    pinColor={'#b900ded2'}
                    description={'Festa para as crianças do bairro'}
                    
                />
                <Marker coordinate={{
                    latitude: -24.294442100736127,
                    longitude: -46.96668965317278
                    }} 
                    title={"Música ao vivo"}
                    pinColor={'#b900ded2'}
                    description={'Chope e música de qualidade'}
                    
                />
                <Marker coordinate={{
                    latitude: -24.295561524194234,
                    longitude: -46.968461843133056
                    }} 
                    title={"DEU A LOUCA NO BOLICHE"}
                    pinColor={'#b900ded2'}
                    description={'Venha jogar concorrendo a um jantar de graça'}
                    
                />
                
                {/* {this.mapMarkers()} */}

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