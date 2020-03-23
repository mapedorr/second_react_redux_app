import React from 'react';
import ReactDOM from 'react-dom';

// Para la recarga de componentes en caliente
import { AppContainer } from 'react-hot-loader';

// Importar lo del enrutador y Redux
import { Provider } from 'react-redux';
import store, { history } from './store';
import { ConnectedRouter } from 'connected-react-router';

// Importar componente principal
import App from './App';

// Importar estilos
// eslint-disable-next-line no-unused-vars
import css from './styles/style.styl';

// Importar Sentry para el registro de errores en su plataforma
/* import * as Sentry from '@sentry/browser'

Sentry.init({
  dsn: 'https://cdb3d2dde41d4101b7cdcee0d7e8293e@sentry.io/5021553'
}) */

/*
? Con la nueva versión de Sentry, queda pendiente pillar:
?   - lo de los tags,
?   - lo de los custom errors,
?   - lo de mostrar una ventana emergente al usuario para que reporte un error,
*/

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history} noInitialPop>
          <App />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./App', () => {
    render();
  });
}

// Renderizar la aplicación
render();
