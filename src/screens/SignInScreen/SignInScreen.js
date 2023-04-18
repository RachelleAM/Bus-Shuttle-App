import React from 'react';
import {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    console.log('Sign in');

    //validate user

    navigation.navigate('Home');
  };

  const onForgotPasswordPressed = () => {
    console.log('forgot password pressed');

    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.5}]}
        resizeMode="contain"
      />

      <CustomInput
        placeholder="Username"
        value={Username}
        setvalue={setUsername}
      />
      <CustomInput
        placeholder="Password"
        value={Password}
        setvalue={setPassword}
        secureTextEntry
      />
      <CustomButton text="Sign In" onPress={onSignInPressed} />
      <CustomButton
        text="Forgot Password?"
        onPress={onForgotPasswordPressed}
        type="TERTIARY"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  logo: {
    width: '60%',
    maxWidth: 500,
    maxHeight: 1000,
  },
});
export default SignInScreen;
