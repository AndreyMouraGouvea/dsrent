import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { GooglePlaceDetail, GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Constants from 'expo-constants';
import { GOOGLE_API_KEY } from '../../enviroment';

type InputAutoCompleteProps = {
  label: string
  placeholder: string
  onPlaceSelected: (details: GooglePlaceDetail | null) => void
}


function InputAutocomplete({label, placeholder, onPlaceSelected}: InputAutoCompleteProps) {

    return (
        <>
            <Text style={styles.inputTitle}>{label}</Text>
            <GooglePlacesAutocomplete
                styles={{
                    textInput: styles.input
                }}
                placeholder={placeholder}
                fetchDetails={true}
                onPress={(data, details = null) => { 
                  {onPlaceSelected(details)}
                }}
                query={{
                    key: GOOGLE_API_KEY,
                    language: 'pt-BR',
                }}
            />
        </>

    )


}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    searchContainer: {
      position: 'absolute',
      width: '90%',
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
      borderWidth: 1,
      fontFamily: 'Montserrat_500Medium',
    },
    inputTitle: {
      fontFamily: 'Montserrat_500Medium',
      fontSize: 16
    }
  });


export default InputAutocomplete