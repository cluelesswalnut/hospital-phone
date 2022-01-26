import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [inputNumber, setInputNumber] = React.useState<string>('');

  let call = async ():Promise<void> => {
    let phoneNumber:string = ''
    let firstNumber = inputNumber.charAt(0)
    if(inputNumber.length != 5){
      alert("Input number needs to be 5 digits")
      return
    }
    else if (firstNumber != '3' && firstNumber != '5' && firstNumber != '6')
    {
      alert("Invalid number. Must start with 3, 5, or 6.")
      return
    }
    if (firstNumber == '5')
    {
      phoneNumber = '61468' + inputNumber
    } 
    else if(firstNumber == '6')
    {
      phoneNumber = '61436' + inputNumber
    } 
    else if( firstNumber == '3')
    {
      phoneNumber = '61429'+inputNumber
    }

    setInputNumber('')
    Linking.openURL('tel:'+phoneNumber);
  }

  return (
        <View style={styles.container}>
        <Text style={styles.instructions}>Enter 5 digit OSU number</Text>
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
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
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
