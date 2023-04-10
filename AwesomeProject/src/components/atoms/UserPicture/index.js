import React from "react";
import { View, Image, StyleSheet } from "react-native";
import dfImage from "../../../../img/dfimg.jpg"

const UserPicture = () => {
    return(
        <View>
            <Image style = {styles.dfImage} source = {dfImage}/>
        </View>
    );
}

const styles = StyleSheet.create({
    dfImage : {
        resizeMode: 'contain',
        borderRadius : 50,
        width : 120,
        height : 120,
        margin : 10
    }
})

export default UserPicture;