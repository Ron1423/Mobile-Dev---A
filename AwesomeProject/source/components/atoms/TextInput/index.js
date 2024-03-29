/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import React from 'react';

const TextInput = ({title, placeholder}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <TextInputRN style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    marginBottom: 4,
    color: 'white', //ganti warna
    marginLeft: 26,
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 10,
    paddingLeft: 16,
    paddingVertical: 10,
    marginHorizontal: 26,
    backgroundColor : 'white' //tambah warna
  },
});
