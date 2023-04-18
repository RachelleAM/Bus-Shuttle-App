import React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const ConfirmEmailScreen = () => {
  const [Code, setCode] = useState('');
  const navigation = useNavigation();

  const onConfirmPressed = () => {
    console.log('Confirm code');
    //validate code

    navigation.navigate('Home');
  };

  const onResendCodePressed = () => {
    console.log('Resend Code');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your Email</Text>
        <CustomInput
          placeholder="Enter confirmation code"
          value={Code}
          setvalue={setCode}
        />
        <CustomButton text="Confirm" onPress={onConfirmPressed} />
        <CustomButton
          text="Resend Code"
          onPress={onResendCodePressed}
          type="SECONDARY"
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    paddingTop: 30,
    fontWeight: 'bold',
    color: '#051C60',
    marginVertical: 30,
  },
});
export default ConfirmEmailScreen;
