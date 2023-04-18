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

const NewPasswordScreen = () => {
  const [Code, setCode] = useState('');
  const [NewPassword, setNewPassword] = useState('');
  const navigation = useNavigation();

  const onSubmitPressed = () => {
    console.log('Submit pressed');
    navigation.navigate('Home');
  };

  const onSignInPressed = () => {
    console.log('back to sign in');
    navigation.navigate('SignIn');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your Password</Text>
        <CustomInput
          placeholder="Enter Confirmation Code"
          value={Code}
          setvalue={setCode}
        />
        <CustomInput
          placeholder="Enter your new password"
          value={NewPassword}
          setvalue={setNewPassword}
        />
        <CustomButton text="Submit" onPress={onSubmitPressed} />

        <CustomButton
          text="Back to Sign In"
          onPress={onSignInPressed}
          type="TERTIARY"
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
export default NewPasswordScreen;
