import React, { Component } from 'react';

export default class Todos extends Component {
  componentDidMount() {
    this.props.getAllTodos();
  }

  render() {
    return (
      <div className='todos_page'>
        {Object.values(this.props.todos).map((userData, idx) => (
          <div className="user" key={idx}>
            <h3 className="user_data">
              {userData.user.name} {' '}
              <span className="user_email">{userData.user.email}</span>
            </h3>
            <ul>{userData.todos.map((todo, idx) => (
              <li className='todo' key={idx}>
                <span className={
                  `todo_title ${todo.completed === true ? 'completed' : ''}`
                }>
                  {todo.title}
                </span>
              </li>
            ))}</ul>
          </div>
        ))}
        <h1 className={Object.entries(this.props.todos).length > 0 ? 'd-none' : ''}>
          Cargando...
        </h1>
      </div>
    );
  }
}
