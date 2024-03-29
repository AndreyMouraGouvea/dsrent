import React, { useState, useRef } from 'react';
import MapView, { LatLng, PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native';
import { GooglePlaceDetail, GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';
import Constants from 'expo-constants';
import { GOOGLE_API_KEY } from '../../enviroment';
import InputAutocomplete from './InputAutoComplete';
import { TouchableOpacity } from 'react-native-gesture-handler';

// https://docs.expo.dev/versions/latest/sdk/map-view/
// https://www.npmjs.com/package/react-native-google-places-autocomplete
// https://www.npmjs.com/package/react-native-maps-directions
// AIzaSyB3YB8Sd-DiKYY-9uN9Sg1qMFkTa95TA7Q
//  https://www.youtube.com/watch?v=KD6zbyyAdTo&ab_channel=FabioBergmann 14:11


const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {

  latitude: -24.288397941221866,
  longitude: -46.979601872724416,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};


function Map() {

  const [origin, setOrigin] = useState<LatLng | null>();
  const [destination, setDestionation] = useState<LatLng | null>();
  const [showDirections, setShowDirections] = useState(false);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const mapRef = useRef<MapView>(null);


  const moveTo = async (position: LatLng) => {
    const camera = await mapRef.current?.getCamera()
    if (camera) {
      camera.center = position;
      mapRef.current?.animateCamera(camera, { duration: 1000 })
    }
  };

  const edgePaddingValue = 70

  const edgePadding = {
    top: edgePaddingValue,
    right: edgePaddingValue,
    bottom: edgePaddingValue,
    left: edgePaddingValue,
  };

  const traceRouteOnReady = (args: any) => {
    if (args) {
      //args.distance
      //args.duration
      setDistance(args.distance)
      setDuration(args.duration)

    }
  }

  const traceRoute = () => {
    if (origin && destination) {
      setShowDirections(true)
      mapRef.current.fitToCoordinates([origin, destination],
        { edgePadding });
    }
  }


  const onPlaceSelected = (
    details: GooglePlaceDetail | null,
    flag: 'origin' | 'destination'
  ) => {
    const set = flag === 'origin' ? setOrigin : setDestionation
    const position = {
      latitude: details?.geometry.location.lat || 0,
      longitude: details?.geometry.location.lng || 0
    };
    set(position);
    moveTo(position);
  };


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#121212"}}>

    
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_POSITION}
      >
        {origin && <Marker coordinate={origin} />}
        {destination && <Marker coordinate={destination} />}
        {showDirections && origin && destination && (
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_API_KEY}
            strokeColor='#6644ff'
            strokeWidth={4}
            onReady={traceRouteOnReady}
          />)}
      </MapView>


      <View style={styles.searchContainer}>
        <InputAutocomplete
          label='Origem'
          placeholder=''
          onPlaceSelected={(details) =>
            onPlaceSelected(details, 'origin')
          }
          
        />
        <InputAutocomplete
          label='Destino'
          placeholder=''
          onPlaceSelected={(details) =>
            onPlaceSelected(details, 'destination')
          }
        />
        <TouchableOpacity
          style={styles.button}
          onPress={traceRoute}
        >
          <Text style={styles.buttonText}>Traçar Rota</Text>
        </TouchableOpacity>
        {distance && duration ? (<><Text style={styles.textTime}>
          Distância: {Number(distance.toFixed(2)).toLocaleString('pt-BR')}{''} km
        </Text>
        <Text style={styles.textTime}>
          Tempo de chegada: {Math.ceil(duration)}{''} min
        </Text>
        </>) : null}
      </View>

    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: Constants.statusBarHeight - 20,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Montserrat_500Medium',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  searchContainer: {
    position: 'absolute',
    width: '90%',
    fontFamily: 'Montserrat_500Medium',
    backgroundColor: '#FFF', //cor de fundo
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderRadius: 8,
    top: Constants.statusBarHeight - 50,
    // marginTop: 5

  },
  input: {
    borderColor: '#888',
    borderWidth: 1
  },
  button: {
    backgroundColor: '#3706B3',
    opacity: 1.0,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 8
  },
  buttonText: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 13,
    textAlign: 'center',
    color: '#FFF'
  },
  textTime: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 13,
    marginTop: 16
  }
});

export default Map