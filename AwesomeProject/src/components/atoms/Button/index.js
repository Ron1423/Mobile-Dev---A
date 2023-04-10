import React from "react";
import { Text, Alert, TouchableOpacity, StyleSheet } from "react-native";

const ButtonAT = props => {
    return (
        <TouchableOpacity onPress={props.nav} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
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

export default ButtonAT;