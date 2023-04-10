import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Label from "../../atoms/Label";

const TextInputAT = props => {
    return (
        <View style = {styles.txtView}>
            <Label text = {props.text} />
            <TextInput style = {styles.txtinputBorder} placeholder = {props.label}/>
        </View>
        
    );
}

const styles = StyleSheet.create({
    txtView : {
        marginTop : 10,
        marginHorizontal : 40
    },

    txtinputBorder : {
        borderColor: '#4F200D',
        borderWidth: 2,
        borderRadius: 10,
        padding : 10
      },
})

export default TextInputAT;