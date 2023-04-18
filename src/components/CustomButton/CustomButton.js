import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const CustomButton = ({onPress, text, type = 'PRIMARY'}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    marginVertical: 3,
    alignItems: 'center',
    borderRadius: 5,
  },
  container_PRIMARY: {
    backgroundColor: '#43bdc8',
  },

  container_SECONDARY: {
    borderWidth: 2,
    borderColor: '#43bdc8',
  },
  conatiner_TERTIARY: {},

  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },

  text_SECONDARY: {
    fontSize: 13,
    color: '#43bdc8',
  },

  text_TERTIARY: {
    fontSize: 13,
    color: 'grey',
  },
});

export default CustomButton;
