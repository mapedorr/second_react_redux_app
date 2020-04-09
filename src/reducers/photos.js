import { GET_PHOTOS, GET_PHOTOS_ERR } from '../actions/actions';
import { getWithoutDuplicates } from '../utils/data';

const photos = (state = [], action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return [...state, ...getWithoutDuplicates(state, action.photos)];
    case GET_PHOTOS_ERR:
      console.log('¡ERR!', action.msg, action.error);
      return state;
    default:
      return state;
  }
};

export default photos;
