import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
          <Text style={styles.profileName}>Elon Musk</Text>
        <Image style={styles.profileImg} source={require('./assets/profile.webp')}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  profileImg:{
    height:120,
    width:120,
    resizeMode:'cover',
    borderRadius: 120/2,
    marginTop: '40%',
    borderWidth:3,
    borderColor:'white',
  },
  profileContainer:{
    flexDirection:'column',
    width:'100%',
    height: '30%',
    alignItems:'center',
    // justifyContent:'center',
    backgroundColor:'grey',
    borderBottomEndRadius:100,
    borderBottomStartRadius:100,
    // paddingVertical:10,
  },

  profileName:{
      color:'black',
      textAlign:'justify'
    }
});
