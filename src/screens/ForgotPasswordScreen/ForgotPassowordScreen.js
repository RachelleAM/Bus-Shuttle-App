import React from 'react';
import {useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
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

const ForgotPasswordScreen = () => {
  const [Username, setUsername] = useState('');
  const navigation = useNavigation();

  const onContinuePressed = () => {
    console.log('Continue pressed');
    navigation.navigate('NewPassword');
  };

  const onResendCodePressed = () => {
    console.log('Resend Code');
  };

  const onCancelPressed = () => {
    console.log('back to sign in');
    navigation.navigate('SignIn');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your Password</Text>
        <CustomInput
          placeholder="Username"
          value={Username}
          setvalue={setUsername}
        />
        <CustomButton text="Continue" onPress={onContinuePressed} />

        <CustomButton text="Cancel" onPress={onCancelPressed} type="TERTIARY" />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    height: 1000,
  },

  title: {
    fontSize: 24,
    paddingTop: 30,
    fontWeight: 'bold',
    color: '#051C60',
    marginVertical: 30,
  },
});
export default ForgotPasswordScreen;
