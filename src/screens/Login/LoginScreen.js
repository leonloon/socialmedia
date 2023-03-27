import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';
import {userAction} from '../../redux/actions/userAction';

import {assets} from '../../assets';
import {TextFieldInput} from '../../components/TextFieldInput';
import styles from './LoginScreen.style';
import {StackActions} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

function LoginScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useSelector(state => state.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user.user.token) {
      navigation.dispatch(StackActions.replace('Home'));
    }
  }, [navigation, user]);

  const login = () => dispatch(userAction.postLogin({email, password}));

  function onChangeEmail(text) {
    setEmail(text);
  }

  function onChangePassword(text) {
    setPassword(text);
  }

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        enableOnAndroid
        scrollEnabled
        keyboardShouldPersistTaps="handled"
        scrollToOverflowEnabled
        enableAutomaticScroll>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={assets.logo} />
          <Text style={styles.title}>SocialFi</Text>
        </View>
        <TextFieldInput placeholder={'Email'} onChangeText={onChangeEmail} />
        <TextFieldInput
          placeholder={'Password'}
          isSecured={true}
          onChangeText={onChangePassword}
        />
        <TouchableOpacity onPress={login}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default LoginScreen;
