import * as React from 'react';
import { Image, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Creates an app that takes a partial phone number and prepends
// the appropriate digits. Then the number is sent to the phone app.

export const PhoneInput = () => {

	// setup state for the input number
	const [inputNumber, setInputNumber] = React.useState('');

	const call = async (): Promise<void> => {
		let phoneNumber = '';
		const firstNumber = inputNumber.charAt(0);

		// check for valid input
		if (inputNumber.length != 5) {
			alert('Input number needs to be 5 digits');
			return;
		} else if (firstNumber != '3' && firstNumber != '5' && firstNumber != '6' && firstNumber != '7' && firstNumber != '8') {
			alert('Invalid number. Must start with 3, 5, 6, 7, or 8.');
			return;
		}

		// pre-pend the appropriate digits
		if (firstNumber == '5') {
			phoneNumber = '61468' + inputNumber;
		} else if (firstNumber == '6') {
			phoneNumber = '61436' + inputNumber;
		} else if (firstNumber == '3') {
			phoneNumber = '61429' + inputNumber;
		} else if (firstNumber == '7') {
			phoneNumber = '61425' + inputNumber;
		} else if (firstNumber == '8') {
			phoneNumber = '61468' + inputNumber;
		}

		setInputNumber('');
		// send the number to the telephone app
		Linking.openURL('tel:' + phoneNumber);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.instructions}>Enter 5 digit OSU number</Text>
			<View style={styles.textInputParent}>
				<TextInput
					placeholder={'Enter number here'}
					style={styles.textInput}
					keyboardType='numeric'
					onChangeText={setInputNumber}
					value={inputNumber}
					autoFocus={true}
				/>
				{/* setup a button to clear the input */}
				<TouchableOpacity style={styles.clearButtonParent} onPress={() => setInputNumber('')}>
					<Image style={styles.clearButton} source={require('../assets/clear.png')} />
				</TouchableOpacity>
			</View>
			<TouchableOpacity onPress={call} style={styles.button}>
				<Text style={styles.buttonText}>Call</Text>
			</TouchableOpacity>
		</View>
	);
};

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
		backgroundColor: 'blue',
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
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	textInput: {
		width: '90%',
	},
	clearButton: {
		height: 16,
		width: 16,
	},
	clearButtonParent: {
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 5,
	},
});
