import React, { Component } from 'react';
import Post from './Post.jsx';

export default class Posts extends Component {
  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    return (
      <div className='posts_page h-100'>
        {this.props.posts.map((post, idx) => (
          <Post post={post} key={idx} {...this.props} />
        ))}
      </div>
    );
  }
}
