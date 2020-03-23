import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  getLocation() {
    return this.props.pathname.slice(1);
  }

  render() {
    return (
      <header>
        <nav className='navbar_menu'>
          <h1>
            <Link to='/'>- SuperWeb -</Link>
          </h1>
          <ul>
            <li>
              <Link
                to='/'
                className={this.getLocation() === '' ? 'active' : ''}>
                <span className='shortcut'>H</span>ome
              </Link>
            </li>
            <li>
              <Link
                to='/posts'
                className={this.getLocation() === 'posts' ? 'active' : ''}>
                <span className='shortcut'>P</span>osts
              </Link>
            </li>
            <li>
              <Link
                to='/albums'
                className={this.getLocation() === 'albums' ? 'active' : ''}>
                <span className='shortcut'>A</span>lbums
              </Link>
            </li>
            <li>
              <Link
                to='/todos'
                className={this.getLocation() === 'todos' ? 'active' : ''}>
                <span className='shortcut'>T</span>oDos
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  pathname: state.router.location.pathname
});

// Hay que decir qué componente va a recibir como props los datos (mapStateToProps)
// y las posibles acciones a ejecutar sobre ests (mapDispatchToProps)
export default connect(mapStateToProps)(Header);
