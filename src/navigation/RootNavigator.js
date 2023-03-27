import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import ArticleScreen from '../screens/Article/ArticleScreen';
import {
  PRIMARY_TEXT,
  SECONDARY_BACKGROUND,
  SECONDARY_TEXT,
} from '../constants/colors';
import {assets} from '../assets';
import {StackActions} from '@react-navigation/native';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: PRIMARY_TEXT,
        headerStyle: {backgroundColor: SECONDARY_BACKGROUND},
        headerShadowVisible: false,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={({navigation}) => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(StackActions.replace('Home'))}
              color={SECONDARY_TEXT}>
              <Image style={styles.icon} source={assets.cross} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation}) => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(StackActions.replace('Login'))}
              color={SECONDARY_TEXT}>
              <Image style={styles.icon} source={assets.profile} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  icon: {height: 40, width: 40, marginRight: 20},
});

export default RootNavigator;
