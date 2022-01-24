import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [inputNumber, setInputNumber] = React.useState('');

  let call = async () => {
    let phoneNumber = ''
    if(inputNumber.length != 5){
      alert("Input number needs to be 5 digits")
      return
    }
    if (inputNumber.charAt(0) == '5')
    {
      phoneNumber = '61468' + inputNumber
    } 
    else if(inputNumber.charAt(0) == '6')
    {
      phoneNumber = '61436' + inputNumber
    } 
    else if( inputNumber.charAt(0) == '3')
    {
      phoneNumber = '61429'+inputNumber
    }

    Linking.openURL('tel:'+phoneNumber);
  }

  return (
        <View style={styles.container}>
        <Text style={styles.textStyle}>Enter Number</Text>
        <TextInput
          placeholder={'Enter number here'}
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(inputNumber) => setInputNumber(inputNumber)}
          value={inputNumber}
        />
        <TouchableOpacity onPress={call} style={styles.button}>
          <Text style={styles.buttonText}>Call</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8'
  },
});
