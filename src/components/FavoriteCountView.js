import {Image, StyleSheet, Text, View} from 'react-native';
import {assets} from '../assets';
import {PRIMARY_TEXT} from '../constants/colors';
import React from 'react';

export function FavoriteCountView({favoriteCount}) {
  return (
    <View style={styles.favoriteContainer}>
      <Image style={styles.loveIcon} source={assets.love} />
      <Text style={styles.favoriteText}>{favoriteCount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loveIcon: {
    height: 32,
    width: 32,
  },
  favoriteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
  },
  favoriteText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8,
    color: PRIMARY_TEXT,
  },
});
