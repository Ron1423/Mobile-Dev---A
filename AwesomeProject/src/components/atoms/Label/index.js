import React from "react";
import { StyleSheet,Text } from "react-native";

const Label = props => {
    return (
        <Text style = {styles.inputText}>{props.text}</Text>
    );
}

const styles = StyleSheet.create({
    inputText : {
        marginVertical : 6,
        fontWeight : 'bold',
        color : '#4F200D',
        fontSize : 15
    },
})

export default Label;