import { GET_ALBUMS, GET_ALBUMS_ERR } from '../actions/actions';
import { getWithoutDuplicates } from '../utils/data';

const albums = (state = [], action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return [...state, ...getWithoutDuplicates(state, action.albums)];
    case GET_ALBUMS_ERR:
      console.log('¡ERR!', action.msg, action.error);
      return state;
    default:
      return state;
  }
};

export default albums;
