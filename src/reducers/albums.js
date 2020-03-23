import { GET_ALBUMS, GET_ALBUMS_ERR } from '../actions/actions';

const albums = (state = [], action) => {
  switch (action.type) {
    case GET_ALBUMS:
      let newAlbums = [];
      action.albums.forEach((album) => {
        if (state.findIndex((_album) => _album.id === album.id) === -1) {
          newAlbums.push(album);
        }
      });
      return [...state, ...newAlbums];
    case GET_ALBUMS_ERR:
      console.log('¡ERR!', action.msg, action.error);
      return state;
    default:
      return state;
  }
};

export default albums;
