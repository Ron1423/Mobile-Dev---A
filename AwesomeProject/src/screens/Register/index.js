import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import TextInputAT from "../../components/molecules/TextInputAT";
import ButtonAT from "../../components/atoms/Button";

const Register = props => {
    const oPress = () => {
        props.navigation.navigate('UserList');
    }
    return (
        <ScrollView style = {{backgroundColor : '#F6F1E9'}}>
            <View style = {styles.titleView}>
                <Text style = {styles.registerText}>REGISTER</Text>
            </View>
            <TextInputAT text = "Nama" label = "Masukan nama lengkap anda"/>
            <TextInputAT text = "Username" label = "Masukan username anda"/>
            <TextInputAT text = "Email" label = "Masukan email anda"/>
            <TextInputAT text = "Address" label = "Masukan alamat anda"/>
            <TextInputAT text = "Phone Number" label = "Masukan nomor telfon anda"/>
            <View style = {styles.buttonView}>
                <ButtonAT text="Register" nav = {oPress}/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    titleView : {
        marginTop : 50,
        alignItems : 'center'
    },
    registerText : {
        fontSize : 30,
        fontWeight : 'bold',
        color : '#FF8400',
    },
    buttonView : {
        marginTop : 40,
        marginHorizontal : 30
    }
})

export default Register;