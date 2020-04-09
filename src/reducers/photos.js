import { GET_PHOTOS, GET_PHOTOS_ERR, CLEAN_PHOTOS } from '../actions/actions';
import { getWithoutDuplicates } from '../utils/data';

const photos = (state = [], action) => {
  switch (action.type) {
    case GET_PHOTOS:
      // Cambiar la url para que cargue fotos de Usplash
      const newURLs = action.photos.map((photo, idx) => ({
        ...photo,
        url: `https://picsum.photos/600?random=${photo.id}`
      }))
      return [...state, ...getWithoutDuplicates(state, newURLs)];
    case GET_PHOTOS_ERR:
      console.log('¡ERR!', action.msg, action.error);
      return state;
    case CLEAN_PHOTOS:
      return [];
    default:
      return state;
  }
};

export default photos;
