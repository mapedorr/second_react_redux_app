/*
Sólo puede haber un reducer para Redux. Por eso es necesario combinar todos los
que se vayan a utilizar en uno.
*/
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

// Importar los reducers que usará la aplicación
import posts from './posts';
import comments from './comments';
import albums from './albums';
import todos from './todos'
import photos from './photos'

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  posts,
  comments,
  albums,
  todos,
  photos
})

export default rootReducer;
