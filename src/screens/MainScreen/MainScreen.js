import React from 'react';
import {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    console.log('Sign in');

    //validate user

    navigation.navigate('SignIn');
  };

  const onSignUpPressed = () => {
    console.log('create account');
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.5}]}
        resizeMode="contain"
      />

      <CustomButton text="Sign In" onPress={onSignInPressed} />
      <CustomButton text="Sign Up" onPress={onSignUpPressed} type="SECONDARY" />
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
