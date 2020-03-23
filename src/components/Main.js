import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
// import routes from './routes/routes'

export default class Main extends Component {
  render() {
    return (
      <div>
        <div className='site_wrapper'>
          <Header {...this.props} />

          {/*
          El children lo pasa el Router y se configura con el <IndexRoute> o
          un <Route> en "reduxstagram.js".

          (!) Esa clonación es la que hace posible que los datos y las acciones
          puestas en <Main /> gracias al "connect" de Redux se pasen a los componentes
          hijo sin necesidad de pasarlas manualmente con props.
          */}
          <main className='page_content'>
          </main>

          <Footer />
        </div>
      </div>
    );
  }
}
