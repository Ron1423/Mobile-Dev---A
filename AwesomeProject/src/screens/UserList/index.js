import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import UserProfile from "../../components/molecules/UserProfile";
import ButtonAT from "../../components/atoms/Button";

const UserList = props => {
    const oPress = () => {
        props.navigation.navigate('Register');
    }
    return(
        <ScrollView style = {{backgroundColor : '#F6F1E9'}}>
            <View style = {styles.titleView}>
                <Text style = {styles.welcomeText}>USER LIST</Text>
            </View>
            <View>
                <UserProfile/>
            </View>
            <View style = {styles.buttonView}>
                <ButtonAT text = "Back" nav = {oPress} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create ({
    titleView : {
        marginTop : 50,
        marginBottom : 10,
        alignItems : 'center'
    },

    welcomeText : {
        fontSize : 50,
        fontWeight : 'bold',
        color : '#FF8400',
    },

    buttonView : {
        marginHorizontal : 20,
        marginBottom : 20
    }
})

export default UserList;