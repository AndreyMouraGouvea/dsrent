import React, { useState } from 'react';
import MapView, { LatLng, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { GooglePlaceDetail, GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Constants from 'expo-constants';
import { GOOGLE_API_KEY } from '../../enviroment';
import InputAutocomplete from './InputAutoComplete';
import { TouchableOpacity } from 'react-native-gesture-handler';
// https://docs.expo.dev/versions/latest/sdk/map-view/
// https://www.npmjs.com/package/react-native-google-places-autocomplete
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

  const [origin, setOrigin] = useState<LatLng | null>()
  const [destination, setDestionation] = useState<LatLng | null>()
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
  };


  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_POSITION}
      />
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Traçar Rota</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
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
    backgroundColor: '#FFF',
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
    top: Constants.statusBarHeight,

  },
  input: {
    borderColor: '#888',
    borderWidth: 1
  },
  button: {
    backgroundColor: '#0B329B',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 8
  },
  buttonText: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 13,
    textAlign: 'center',
    color: '#FFF'
  }
});

export default Map