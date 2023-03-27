import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {articleAction} from '../../redux/actions/articleAction';
import {useRoute} from '@react-navigation/core';
import {CommentItem} from './CommentItem';
import {TextFieldInput} from '../../components/TextFieldInput';
import {FavoriteCountView} from '../../components/FavoriteCountView';
import {ProfileView} from '../../components/ProfileView';
import styles from './ArticleScreen.style';
import {isEmpty} from '../../utils/utils';
import {LoadingView} from '../../components/LoaderView';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';

function ArticleScreen() {
  const dispatch = useDispatch();
  const route = useRoute();

  const {params} = route;

  const data = useSelector(state => state.article);
  const article = useSelector(state => state.article.article);
  const comments = useSelector(state => state.article.comments);
  const user = useSelector(state => state.user.user);
  const isDeletingComment = useSelector(
    state => state.article.isDeletingComment,
  );

  const [comment, setComment] = useState('');

  useEffect(() => {
    const slug = params?.item?.slug;
    getArticle(slug);
    getComments(slug);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDeletingComment]);

  const getArticle = slug => dispatch(articleAction.getArticle({slug}));
  const getComments = slug => dispatch(articleAction.getComments({slug}));
  const postComment = ({slug, comment}) =>
    dispatch(
      articleAction.postComment({token: user?.token, slug, text: comment}),
    );
  const deleteComment = ({slug, id}) =>
    dispatch(articleAction.deleteComment({token: user?.token, slug, id}));

  function onChangeText(text) {
    setComment(text);
  }

  function onSubmit() {
    const slug = params?.item?.slug;
    postComment({slug, comment});
  }

  function onPressTrash({item}) {
    deleteComment({slug: article?.slug, id: item?.id});
  }

  function renderHeader() {
    return (
      <>
        <View style={styles.topContainer}>
          <Text style={styles.titleText}>{article?.title}</Text>
          <Text style={styles.descText}>{article?.description}</Text>
          <ProfileView
            author={article?.author}
            createdAt={article?.createdAt}
          />
          <View style={styles.tagContainer}>
            {article?.tagList?.map(tag => (
              <View style={styles.tagPill}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
          <FavoriteCountView favoriteCount={article?.favoritesCount} />
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyText}>{article?.body}</Text>
          <Text style={styles.commentsTitleText}>Comments</Text>
        </View>
      </>
    );
  }

  function renderComment() {
    if (isEmpty(user)) {
      return;
    }
    return (
      <TextFieldInput
        placeholder={'Write your comment...'}
        hasIcon={true}
        onChangeText={onChangeText}
        onSubmit={onSubmit}
      />
    );
  }

  function renderEmptyComments() {
    return <Text style={styles.emptyCommentsText}>No comments yet.</Text>;
  }

  function renderUI() {
    if (data.loading || isEmpty(article)) {
      return <LoadingView />;
    }

    return (
      <KeyboardAwareFlatList
        data={comments}
        renderItem={({item}) => (
          <CommentItem
            comment={item}
            onPressTrash={() => onPressTrash({item})}
          />
        )}
        ListHeaderComponent={
          <>
            {renderHeader()}
            {renderComment()}
          </>
        }
        ListEmptyComponent={renderEmptyComments}
        contentInset={{bottom: 100}}
        showsVerticalScrollIndicator={false}
        enableOnAndroid
        scrollEnabled
        extraScrollHeight={100}
        keyboardShouldPersistTaps="handled"
        scrollToOverflowEnabled
        enableAutomaticScroll
      />
    );
  }

  return <View style={styles.container}>{renderUI()}</View>;
}

export default ArticleScreen;
