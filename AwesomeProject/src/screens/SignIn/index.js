import React from 'react' //library
import { View, 
    Text,
    ScrollView,
    StyleSheet } from 'react-native' //core component
import ButtonAT from '../../components/atoms/Button';
import TextInputAT from '../../components/molecules/TextInputAT';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SignIn = props => {
    const oPress = () => {
        props.navigation.navigate('Register');
    }
    return (
        <ScrollView style = {{backgroundColor : '#F6F1E9'}}>
            <View style = {styles.titleView}>
                <Text style = {styles.welcomeText}>WELCOME</Text>
            </View>
            <TextInputAT text = "Username" label = "Masukan username anda"/>
            <TextInputAT text = "Password" label = "Masukan password anda"/>
            <View style = {styles.buttonView}>
                <ButtonAT text="Sign In" nav = {oPress}/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create ({
    titleView : {
        marginTop : 100,
        marginBottom : 50,
        alignItems : 'center'
    },

    welcomeText : {
        fontSize : 50,
        fontWeight : 'bold',
        color : '#FF8400',
    },
    
    buttonView : {
        marginTop : 80,
        marginHorizontal : 30
    }
})

export default SignIn;