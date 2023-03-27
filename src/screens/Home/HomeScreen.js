import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FeedItem} from './FeedItem';
import {articleAction} from '../../redux/actions/articleAction';

import {useNavigation} from '@react-navigation/core';
import {LoadingView} from '../../components/LoaderView';
import {isEmpty} from '../../utils/utils';
import styles from './HomeScreen.style';

function HomeScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const data = useSelector(state => state.article);
  const articles = useSelector(state => state.article.articles);
  const articlesCount = useSelector(state => state.article.articlesCount);

  const limit = 20;
  const [offset, setOffset] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    getArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  const getArticles = () =>
    dispatch(articleAction.getArticles({limit: limit, offset: offset}));
  const getLatestArticles = () =>
    dispatch(articleAction.getLatestArticles({limit: limit}));

  function fetchMoreData() {
    if (articles.length === articlesCount) {
      setIsLastPage(true);
      return;
    }
    setOffset(offset + limit);
  }

  function onPressArticle({item}) {
    navigation.navigate('Article', {item});
  }

  function onPullRefresh() {
    getLatestArticles();
  }

  function renderFooter() {
    if (isLastPage) {
      return <Text style={styles.footerText}>You have seen all articles.</Text>;
    }
  }

  function renderUI() {
    if (data.loading && isEmpty(articles)) {
      return <LoadingView />;
    }

    const renderItem = ({item}) => (
      <FeedItem article={item} onPressArticle={() => onPressArticle({item})} />
    );

    return (
      <FlatList
        data={articles}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={0.2}
        onEndReached={fetchMoreData}
        contentInset={{bottom: 100}}
        showsVerticalScrollIndicator={false}
        onRefresh={onPullRefresh}
        refreshing={false}
      />
    );
  }

  return <View style={styles.container}>{renderUI()}</View>;
}

export default HomeScreen;
