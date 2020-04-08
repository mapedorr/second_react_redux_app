import React, { Component } from 'react';
import Post from './Post.jsx';

export default class Posts extends Component {
  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    return (
      <div className='posts_page'>
        {
          this.props.posts.map((post, idx) => (
            <Post post={post} key={idx} {...this.props} />
          ))
        }
        <h1 className={this.props.posts.length > 0 ? 'd-none' : ''}>
          Cargando...
        </h1>
      </div>
    );
  }
}
