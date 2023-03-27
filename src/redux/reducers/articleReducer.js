import {
  ERROR_ARTICLES_DATA,
  ERROR_ARTICLE_DATA,
  ERROR_COMMENTS_DATA,
  ERROR_DELETE_COMMENT,
  ERROR_LATEST_ARTICLES_DATA,
  ERROR_POST_COMMENT,
  RECEIVED_ARTICLES_DATA,
  RECEIVED_ARTICLE_DATA,
  RECEIVED_COMMENTS_DATA,
  RECEIVED_DELETE_COMMENT,
  RECEIVED_LATEST_ARTICLES_DATA,
  RECEIVED_POST_COMMENT,
  REQUEST_ARTICLES_DATA,
  REQUEST_ARTICLE_DATA,
  REQUEST_COMMENTS_DATA,
  REQUEST_DELETE_COMMENT,
  REQUEST_LATEST_ARTICLES_DATA,
  REQUEST_POST_COMMENT,
} from '../actions/actionTypes';

const initialState = {
    loading: true,
    error: false,
    articles: [],
    articlesCount: 0,
    article: {},
    comments: [],
    isDeletingComment: false,
  },
  articleReducer = (state = initialState, action) => {
    switch (action.type) {
      case REQUEST_LATEST_ARTICLES_DATA:
        return {
          ...state,
          loading: true,
        };
      case RECEIVED_LATEST_ARTICLES_DATA:
        const arrayOne = action.payload.articles;
        const arrayTwo = state.articles;
        const newArticles = arrayOne.filter(
          ({slug: id1}) => !arrayTwo.some(({slug: id2}) => id2 === id1),
        );
        return Object.assign({}, state, {
          ...state,
          loading: false,
          articles: [...newArticles, ...state.articles],
          articlesCount: action.payload.articlesCount,
        });
      case ERROR_LATEST_ARTICLES_DATA:
        return {
          ...state,
          loading: false,
          error: true,
        };
      case REQUEST_ARTICLES_DATA:
        return {
          ...state,
          loading: true,
        };
      case RECEIVED_ARTICLES_DATA:
        return Object.assign({}, state, {
          ...state,
          loading: false,
          articles: [...state.articles, ...action.payload.articles],
          articlesCount: action.payload.articlesCount,
        });
      case ERROR_ARTICLES_DATA:
        return {
          ...state,
          loading: false,
          error: true,
        };
      case REQUEST_ARTICLE_DATA:
        return {
          ...state,
          loading: true,
          article: {},
        };
      case RECEIVED_ARTICLE_DATA:
        return Object.assign({}, state, {
          ...state,
          loading: false,
          article: action.payload.article,
        });
      case ERROR_ARTICLE_DATA:
        return {
          ...state,
          loading: false,
          error: true,
        };
      case REQUEST_COMMENTS_DATA:
        return {
          ...state,
          loading: true,
          isDeletingComment: false,
        };
      case RECEIVED_COMMENTS_DATA:
        return Object.assign({}, state, {
          ...state,
          loading: false,
          comments: action.payload.comments,
        });
      case ERROR_COMMENTS_DATA:
        return {
          ...state,
          loading: false,
          error: true,
        };
      case REQUEST_POST_COMMENT:
        return {
          ...state,
          loading: true,
        };
      case RECEIVED_POST_COMMENT:
        return Object.assign({}, state, {
          ...state,
          loading: false,
          comments: [...state.comments, action.payload.comment],
        });
      case ERROR_POST_COMMENT:
        return {
          ...state,
          loading: false,
          error: true,
        };
      case REQUEST_DELETE_COMMENT:
        return {
          ...state,
          loading: true,
        };
      case RECEIVED_DELETE_COMMENT:
        return Object.assign({}, state, {
          ...state,
          loading: false,
          isDeletingComment: true,
        });
      case ERROR_DELETE_COMMENT:
        return {
          ...state,
          loading: false,
          error: true,
        };
      default:
        return state;
    }
  };

export default articleReducer;
