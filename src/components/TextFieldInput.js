import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  PRIMARY_BACKGROUND,
  PRIMARY_TEXT,
  SECONDARY_TEXT,
} from '../constants/colors';
import {assets} from '../assets';

export function TextFieldInput({
  placeholder,
  isSecured = false,
  hasIcon = false,
  onChangeText,
  onSubmit,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={SECONDARY_TEXT}
        autoCapitalize="none"
        secureTextEntry={isSecured}
        onChangeText={onChangeText}
      />
      {!!hasIcon && (
        <TouchableOpacity onPress={onSubmit} style={styles.button}>
          <Image style={styles.icon} source={assets.send} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    paddingHorizontal: 28,
    backgroundColor: PRIMARY_BACKGROUND,
    height: 70,
    borderRadius: 36,
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 18,
    color: PRIMARY_TEXT,
  },
  button: {
    position: 'absolute',
    right: 0,
    marginRight: 20,
  },
  icon: {
    height: 30,
    width: 30,
  },
});
