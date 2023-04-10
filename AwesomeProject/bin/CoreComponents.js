import React from 'react' //library
import { View, 
    Text,
    Image,
    TextInput,
    ImageBackground,
    ScrollView,
    StyleSheet } from 'react-native' //core component
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Gambar from '../img/bg.jpg'
import Bg from '../img/bgu.jpg'

const CoreComponents = props => {
    const Hello = 'Hello World';
    return (
        <ScrollView style = {{ backgroundColor : 'orange', flex : 1 }}>
          
          <ImageBackground source={Gambar} style={{height : 1000, width : 420}}>
            <View style = {{justifyContent : 'center', alignItems : 'center' }}>
                <Text style = {styles.title}>{props.title }</Text>
                <Text style = {styles.subtitle}>{props.subtitle}</Text>
                <Image source={require('../img/bali.jpeg')} style={{height : 200, width : 420, alignItems: 'center'}}/>
                <Image source={Bg} style={styles.imageSize}/>      
                <View style = {styles.yellowBox}>
                  <Text style = {{color : 'red'}}>{Hello}</Text>
                </View>
                <View style ={{alignItems : 'center', justifyContent : 'center'}}>
                  <TextInput style = {styles.txtinputBorder}>Text Input</TextInput>
                </View>
            </View>
          </ImageBackground>
          
        </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    title : {
      fontSize : 20,
      fontWeight : 'bold',
      textAlign : 'center',
      marginTop : 20
    },
    subtitle : {
      fontSize : 12,
      fontWeight : 'bold',
      textAlign : 'center',
      marginBottom : 20
    },
    yellowBox : {
      color : 'red',
      width : 100, 
      height : 100, 
      backgroundColor : 'yellow',
      alignItems : 'center',
      justifyContent : 'center'
    },
    imageSize : {height : 200, width : 200},
    txtinputBorder : {
      //backgroundColor: value,
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 15
    }
  })

  export default CoreComponents;