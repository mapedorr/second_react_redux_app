/*
Este componente se usará para hacer que el Main y todos los componentes
hijos tengan acceso a las acciones y los datos. Para no estar pasando todo
por props entre los hijos, Redux tiene un componente llamado "connect", ese es
el que se encarga de hacer que las funciones de las acciones y los datos se
puedan acceder desde cualquier hijo de Main.
*/
import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './actions';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Posts from './components/Posts';
import Albums from './components/Albums';
import Todos from './components/Todos';

class App extends Component {
  render() {
    return (
      <div className='site_wrapper'>
        <Header />
        <main className='page_content'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/posts'>
              <Posts {...this.props} />
            </Route>
            <Route path='/albums'>
              <Albums {...this.props} />
            </Route>
            <Route path='/todos'>
              <Todos {...this.props} />
            </Route>
          </Switch>
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
  pathname: state.router.location.pathname
});

// 'dispatch' es la función que puede verse en $r.store.dispatch
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

// Hay que decir qué componente va a recibir como props los datos (mapStateToProps)
// y las posibles acciones a ejecutar sobre ests (mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(App);
