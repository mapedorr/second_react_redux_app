import { GET_ALBUMS, GET_ALBUMS_ERR } from '../actions';

const albums = (state = [], action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return [...state, ...action.albums];
    case GET_ALBUMS_ERR:
      console.log('¡ERR!', action.msg, action.error);
      return state;
    default:
      return state;
  }
};

export default albums;
