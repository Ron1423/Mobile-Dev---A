import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TextInput,Gap,Button, } from '../../components/atoms'
import logo from '../../assets/img/logoCS.png'

const SignIn = () => {
  return (
    <View>
        <View style = {styles.UpperBody}>
            <Gap height={27}/>
            <Image source={logo} style={styles.image}/>
            <Text style = {styles.HeaderText}>Sign In</Text>
            <Text style = {styles.SubText}>Customer</Text>
            <Gap height={27}/>
        </View>
        <View style = {styles.LowerBody}>
            <Gap height={40}/>
            <TextInput title = 'Email Address' placeholder='Enter Your Email'/>
            <Gap height={23}/>
            <TextInput title = 'Password' placeholder='Enter Your Password'/>
            <Gap height={23}/>
            <TextInput title = 'Verification Code' placeholder='Enter 6 Digits Verification Code'/>
            <Gap height={26}/>
            <Button title={'Send Verivication Code'} color='#D9D9D9' textColor='#000000'/>
            <Gap height={13}/>
            <Button title={'Sign In As Customer'} color='#65BC9A' textColor='#000000'/>
            <Gap height={13}/>
            <Button title={'Sign In As Designer'} color='#65BC9A' textColor='#000000'/>
            <Gap height={36}/>
            <View style = {styles.Textposition}>
                <Text style = {styles.footerText}> Need Help?</Text>
            </View>
        </View>
    </View>
  )
}

export default SignIn;

const styles = StyleSheet.create({
    UpperBody : {
        alignItems : 'center',
        height : 161,
        backgroundColor : '#F7F2F2',
        //flexGrow : 1,
        //justifyContent : 'space-between',
    },

    image : {
        height : 63,
        width : 63,
    },

    HeaderText : {
        fontFamily : 'Montserrat',
        fontStyle : 'normal',
        fontWeight : 800,
        fontSize : 18,
        color : '#65BC9A'
    },

    SubText : {
        fontFamily : 'Montserrat',
        fontStyle : 'normal',
        fontWeight : 800,
        fontSize : 18,
        color : '#1F2D71'
    },

    LowerBody : {
        backgroundColor : '#1F2D71',
        height : 586,
        flexGrow : 1,
        justifyContent : 'space-between',
    },

    Textposition : {
        alignItems : 'center',
        paddingBottom : 7
    },

    footerText : {
        color : '#65BC9A',
    }
})