// Esta función aplica lo que en Redux se conoce como composición de reducers.
// Es algo así como un sub-reducer que sólo es conocido y usado por uno de los
// reducer registrado en la aplicación.
import { GET_COMMENTS_FOR, GET_COMMENTS_FOR_ERR } from '../actions/actions';

const comments = (state = [], action) => {
  if (typeof action.postId !== 'undefined') {
    switch (action.type) {
      case GET_COMMENTS_FOR:
        return {
          ...state,
          [action.postId]: action.comments
        };
      case GET_COMMENTS_FOR_ERR:
        console.log('¡ERR!', action.msg, action.postId, action.error);
        return state;
      default:
        return state;
    }
  }

  return state;
};

export default comments;
