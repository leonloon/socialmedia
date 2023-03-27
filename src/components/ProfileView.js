import {Image, StyleSheet, Text, View} from 'react-native';
import {PRIMARY_TEXT, SECONDARY_TEXT} from '../constants/colors';
import React from 'react';
import moment from 'moment';

export function ProfileView({author, createdAt}) {
  return (
    <View style={styles.container}>
      <Image style={styles.profileImage} source={{uri: author?.image}} />
      <View style={styles.subContainer}>
        <Text style={styles.usernameText}>{author?.username}</Text>

        <Text style={styles.momentFromNow}>{moment(createdAt).fromNow()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  usernameText: {
    color: PRIMARY_TEXT,
    fontSize: 16,
    fontWeight: 'bold',
  },
  subContainer: {
    flexDirection: 'column',
    marginLeft: 12,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderColor: PRIMARY_TEXT,
    borderWidth: 2,
  },
  container: {flexDirection: 'row', alignItems: 'center'},
  momentFromNow: {color: SECONDARY_TEXT},
});
