/*
Las acciones son cosas que pueden pasar en la aplicación pero no manejan nada.
Son como eventos que se pueden disparar y almacenar en el historial de Redux.

Las acciones que almacena el historial de Redux son objetos.

Wes Bos las compara con los eventos de los elementos en el navegador: hover,
click, out... son cosas que pasan pero no generan ningún cambio si no hay algo
lógico que las use. 👉👉👉 Para eso están los reducers.
*/
/* import { normalize, schema } from 'normalizr'; */

export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_ERR = 'GET_POSTS_ERR';
export const GET_COMMENTS_FOR = 'GET_COMMENTS_FOR';
export const GET_COMMENTS_FOR_ERR = 'GET_COMMENTS_FOR_ERR';
export const GET_ALBUMS = 'GET_ALBUMS';
export const GET_ALBUMS_ERR = 'GET_ALBUMS_ERR';

const BASE = 'https://jsonplaceholder.typicode.com';

// ┌─┤ POSTS ├─────────────────────────────────────────────────────────────────┐
const fetchPosts = () => {
  return fetch(`${BASE}/posts?_limit=5`).then((response) => response.json());
};

const getPosts = (posts = []) => ({
  type: GET_POSTS,
  posts
});

const getPostsError = (msg, error) => ({
  type: GET_POSTS_ERR,
  msg,
  error
});

export const getAllPosts = () => {
  return (dispatch) => {
    return fetchPosts().then(
      (posts) => {
        const mappedPosts = posts.map(({ id, title, body }) => ({
          id,
          title,
          body
        }));
        return dispatch(getPosts(mappedPosts));
      },
      (error) => dispatch(getPostsError('Error getting posts', error))
    );
  };
};
// └───────────────────────────────────────────────────────────────────────────┘

// ┌─┤ COMMENTS ├──────────────────────────────────────────────────────────────┐
const fetchComments = (postId) => {
  return fetch(`${BASE}/comments?postId=${postId}&_limit=3`).then((response) =>
    response.json()
  );
};

const getCommentsFor = (comments, postId) => ({
  type: GET_COMMENTS_FOR,
  comments,
  postId
});

const getCommentsError = (msg, postId, error) => ({
  type: GET_COMMENTS_FOR_ERR,
  msg,
  postId,
  error
});

export const getAllCommentsFor = (postId) => {
  return (dispatch) => {
    return fetchComments(postId).then(
      (comments) => dispatch(getCommentsFor(comments, postId)),
      (error) =>
        dispatch(getCommentsError('Error getting comments', postId, error))
    );
  };
};
// └───────────────────────────────────────────────────────────────────────────┘

// ┌─┤ ALBUMS ├────────────────────────────────────────────────────────────────┐
const fetchAlbums = () => {
  return fetch(`${BASE}/albums?_limit=24`).then((response) => response.json());
};

const getAlbums = (albums) => ({
  type: GET_ALBUMS,
  albums
});

const getAlbumsError = (msg, error) => ({
  type: GET_ALBUMS_ERR,
  msg,
  error
});

export const getAllAlbums = () => {
  return (dispatch) => {
    return fetchAlbums().then(
      (albums) => dispatch(getAlbums(albums)),
      (error) => dispatch(getAlbumsError('Error getting albums', error))
    );
  };
};
// └───────────────────────────────────────────────────────────────────────────┘
