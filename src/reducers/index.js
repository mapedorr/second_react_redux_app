/*
Sólo puede haber un reducer para Redux. Por eso es necesario combinar todos los
que se vayan a utilizar en uno.
*/
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
// import { routerReducer } from 'react-router-redux';

// Importar los reducers que usará la aplicación
import posts from './posts';
import comments from './comments';
import albums from './albums';

// const rootReducer = combineReducers({
//   posts,
//   comments,
//   albums,
//   /*
//   Como también queremos almacenar los cambios de la URL (navegación), hay que
//   guardar el reducer que se encargará de ello.
//   */
//   routing: routerReducer
// });

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  posts,
  comments,
  albums
})

export default rootReducer;
