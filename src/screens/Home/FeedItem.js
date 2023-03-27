import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FavoriteCountView} from '../../components/FavoriteCountView';
import {ProfileView} from '../../components/ProfileView';
import styles from './FeedItem.style';

export function FeedItem({article, onPressArticle}) {
  return (
    <TouchableOpacity onPress={onPressArticle}>
      <View style={styles.container}>
        <ProfileView author={article?.author} createdAt={article?.createdAt} />
        <Text style={styles.articleTitleText}>{article?.title}</Text>
        <Text style={styles.descText}>{article?.description}</Text>
        <View style={styles.tagContainer}>
          {article?.tagList?.map(tag => (
            <View style={styles.tagPill}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
        <FavoriteCountView favoriteCount={article?.favoritesCount} />
      </View>
    </TouchableOpacity>
  );
}
