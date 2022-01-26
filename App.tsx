import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

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
      <View style={styles.textInputParent}>
        <TextInput
          placeholder={'Enter number here'}
          style={styles.textInput}
          keyboardType="numeric"
          onChangeText={(inputNumber) => setInputNumber(inputNumber)}
          value={inputNumber}
          autoFocus={true}
        />
        <TouchableOpacity
          style={styles.clearButtonParent}
          onPress={() => setInputNumber('')}
        >
        <Image
          style={styles.clearButton}
          source={require("./assets/clear.png")}
        />
        </TouchableOpacity>
      </View>
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
  textInputParent: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8',
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    width: "90%",
  },
  clearButton: {
    height: 16,
    width: 16,
  },
  clearButtonParent: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
});
