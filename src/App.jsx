/*
Este componente se usará para hacer que el Main y todos los componentes
hijos tengan acceso a las acciones y los datos. Para no estar pasando todo
por props entre los hijos, Redux tiene un componente llamado "connect", ese es
el que se encarga de hacer que las funciones de las acciones y los datos se
puedan acceder desde cualquier hijo de Main.
*/
import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './actions/actions';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div className='site_wrapper'>
        <Header />
        <main className='page_content'>
          <Routes {...this.props} />
        </main>
        <Footer />
      </div>
    );
  }
}

/*
 * Esto es lo que hace que se carguen los objetos en el STATE. Por eso dentro de
 * cada reducer el estado es el objeto con el mismo nombre.
 */
const mapStateToProps = (state) => ({
  posts: state.posts,
  comments: state.comments,
  albums: state.albums,
  todos: state.todos,
  photos: state.photos,
  pathname: state.router.location.pathname,
});

// 'dispatch' es la función que puede verse en $r.store.dispatch
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

// Hay que decir qué componente va a recibir como props los datos (mapStateToProps)
// y las posibles acciones a ejecutar sobre ests (mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(App);
