import axios from 'axios';
import {ShowErrorAlert, ShowSuccessAlert} from '../../utils/utils';
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
} from './actionTypes';

export const articleAction = {
  getLatestArticles,
  getArticles,
  getArticle,
  getComments,
  postComment,
  deleteComment,
};

function getLatestArticles({limit = 1, offset = 0}) {
  return dispatch => {
    dispatch(request());
    axios
      .get(
        `https://api.realworld.io/api/articles?limit=${limit}&offset=${offset}`,
      )
      .then(response => {
        if (response.status === 200) {
          dispatch(success(response.data));
        }
        dispatch(failure(response));
      })
      .catch(error => {
        dispatch(failure(error));
      });
  };

  function request() {
    return {type: REQUEST_LATEST_ARTICLES_DATA};
  }
  function success(data) {
    return {type: RECEIVED_LATEST_ARTICLES_DATA, payload: data};
  }
  function failure(error) {
    return {type: ERROR_LATEST_ARTICLES_DATA, error};
  }
}

function getArticles({limit, offset}) {
  return dispatch => {
    dispatch(request());
    axios
      .get(
        `https://api.realworld.io/api/articles?limit=${limit}&offset=${offset}`,
      )
      .then(response => {
        if (response.status === 200) {
          dispatch(success(response.data));
        }
        dispatch(failure(response));
      })
      .catch(error => {
        dispatch(failure(error));
      });
  };

  function request() {
    return {type: REQUEST_ARTICLES_DATA};
  }
  function success(data) {
    return {type: RECEIVED_ARTICLES_DATA, payload: data};
  }
  function failure(error) {
    return {type: ERROR_ARTICLES_DATA, error};
  }
}

function getArticle({slug}) {
  return dispatch => {
    dispatch(request());
    axios
      .get(`https://api.realworld.io/api/articles/${slug}`)
      .then(response => {
        if (response.status === 200) {
          dispatch(success(response.data));
        } else {
          dispatch(failure(response));
        }
      })
      .catch(error => {
        dispatch(failure(error));
      });
  };

  function request() {
    return {type: REQUEST_ARTICLE_DATA};
  }
  function success(data) {
    return {type: RECEIVED_ARTICLE_DATA, payload: data};
  }
  function failure(error) {
    return {type: ERROR_ARTICLE_DATA, error};
  }
}

function getComments({slug}) {
  return dispatch => {
    dispatch(request());
    axios
      .get(`https://api.realworld.io/api/articles/${slug}/comments`)
      .then(response => {
        if (response.status === 200) {
          dispatch(success(response.data));
        } else {
          dispatch(failure(response));
        }
      })
      .catch(error => {
        dispatch(failure(error));
      });
  };

  function request() {
    return {type: REQUEST_COMMENTS_DATA};
  }
  function success(data) {
    return {type: RECEIVED_COMMENTS_DATA, payload: data};
  }
  function failure(error) {
    return {type: ERROR_COMMENTS_DATA, error};
  }
}

function postComment({token, slug, text}) {
  return dispatch => {
    const header = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': '255',
      Host: 'api.realworld.io',
    };
    dispatch(request());
    axios
      .post(
        `https://api.realworld.io/api/articles/${slug}/comments`,
        {
          comment: {
            body: text,
          },
        },
        {
          headers: header,
        },
      )
      .then(response => {
        if (response.status === 200) {
          dispatch(success(response.data));
        } else {
          dispatch(failure(response));
        }
      })
      .catch(error => {
        dispatch(failure(error));
      });
  };

  function request() {
    return {type: REQUEST_POST_COMMENT};
  }
  function success(data) {
    ShowSuccessAlert({desc: 'Comment submitted.'});
    return {type: RECEIVED_POST_COMMENT, payload: data};
  }
  function failure(error) {
    ShowErrorAlert({desc: 'Comment failed to submit.'});
    return {type: ERROR_POST_COMMENT, error};
  }
}

function deleteComment({token, slug, id}) {
  return dispatch => {
    const header = {
      Authorization: `Bearer ${token}`,
      Host: 'api.realworld.io',
    };
    dispatch(request());
    axios
      .delete(`https://api.realworld.io/api/articles/${slug}/comments/${id}`, {
        headers: header,
      })
      .then(response => {
        if (response.status === 200) {
          dispatch(success(response.data));
        } else {
          dispatch(failure(response));
        }
      })
      .catch(error => {
        dispatch(failure(error));
      });
  };

  function request() {
    return {type: REQUEST_DELETE_COMMENT};
  }
  function success(data) {
    ShowSuccessAlert({desc: 'Comment deleted.'});
    return {type: RECEIVED_DELETE_COMMENT, payload: data};
  }
  function failure(error) {
    ShowErrorAlert({desc: 'Comment failed to delete.'});
    return {type: ERROR_DELETE_COMMENT, error};
  }
}
