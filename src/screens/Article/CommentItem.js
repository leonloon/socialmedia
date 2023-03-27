import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './CommentItem.style';
import {ProfileView} from '../../components/ProfileView';
import {assets} from '../../assets';
import {useSelector} from 'react-redux';

export function CommentItem({comment, onPressTrash}) {
  const user = useSelector(state => state.user.user);

  function renderTrashButton() {
    if (user?.username === comment?.author?.username) {
      return (
        <TouchableOpacity style={styles.trashButton} onPress={onPressTrash}>
          <Image style={styles.trashIcon} source={assets.trash} />
        </TouchableOpacity>
      );
    }
  }

  return (
    <View style={styles.container}>
      <ProfileView author={comment?.author} createdAt={comment?.createdAt} />
      {renderTrashButton()}
      <Text style={styles.bodyText}>{comment?.body}</Text>
    </View>
  );
}
