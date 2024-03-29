import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Routes from './src/routes/index'
// import Routes from './src/router';
import Splash from './src/Pages/Splash';
// import { NavigationContainer } from '@react-navigation/native'


function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold

    
  })

  if (!fontsLoaded) {

    // return <AppLoading />
    return <></>
            

  }

  return (
    <>
      <StatusBar style="light" backgroundColor='#000' translucent={false} />
          <Routes />
    </>
  );
}


export default App
