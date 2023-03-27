import {StyleSheet, ActivityIndicator, View} from 'react-native';
import React from 'react';

export function LoadingView() {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    justifyContent: 'center',
    flex: 1,
  },
});
