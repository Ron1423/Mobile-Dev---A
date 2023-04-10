import React from 'react' //library
import { View, 
    Text,
    Image,
    Alert,
    TextInput,
    ImageBackground,
    ScrollView,
    StyleSheet, 
    Button,
    TouchableOpacity} from 'react-native' //core component
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import Gambar from '../img/bg.jpg'
// import Bg from '../img/bgu.jpg'

const LoginPage = props => {
    return (
        <ScrollView style = {{backgroundColor : '#F6F1E9'}}>
            <View style = {styles.titleView}>
                <Text style = {styles.welcomeText}>{props.title}</Text>
            </View>
            <View style = {styles.unameView}>
                <Text style = {styles.inputText}>Username</Text>
                <TextInput style = {styles.txtinputBorder} placeholder = "Masukan Username Anda"/>
            </View>
            <View style = {styles.passView}>
                <Text style = {styles.inputText}>Password</Text>
                <TextInput style = {styles.txtinputBorder} placeholder = "Masukan Password Anda"/>
            </View>
            <View style = {styles.buttonView}>
                <TouchableOpacity onPress={() => Alert.alert('Custom Button pressed')} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    titleView : {
        marginTop : 100,
        alignItems : 'center'
    },

    welcomeText : {
        fontSize : 50,
        fontWeight : 'bold',
        color : '#FF8400',
        // shadowRadius : 10,
        // shadowColor : 'black'
    },

    unameView : {
        marginTop : 65,
        marginHorizontal : 40
    },

    passView : {
        marginTop : 25,
        marginHorizontal : 40
    },

    inputText : {
        marginVertical : 6,
        fontWeight : 'bold',
        color : '#4F200D',
        fontSize : 20
    },

    txtinputBorder : {
        borderColor: '#4F200D',
        borderWidth: 2,
        borderRadius: 10,
        padding : 10
      },

    buttonView : {
        // borderRadius: 10,
        marginTop : 80,
        alignItems : 'center'
    }, 

    appButtonContainer: {
        elevation: 7,
        backgroundColor: "#FF8400",
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 70
    },

    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }

})

export default LoginPage;