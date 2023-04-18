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

const SignUpScreen = () => {
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [RepeatPassword, setRepeatPassword] = useState('');

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onRegisterPressed = () => {
    console.log('Sign Up');

    navigation.navigate('ConfirmEmail');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an Account</Text>
        <CustomInput
          placeholder="Username"
          value={Username}
          setvalue={setUsername}
        />
        <CustomInput placeholder="Email" value={Email} setvalue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={Password}
          setvalue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="Repeat Password"
          value={RepeatPassword}
          setvalue={setRepeatPassword}
        />
        <CustomButton text="Register" onPress={onRegisterPressed} />
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
    fontWeight: 'bold',
    color: '#051C60',
    marginVertical: 50,
  },
});
export default SignUpScreen;
