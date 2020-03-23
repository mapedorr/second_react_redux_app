import React, { Component } from 'react';
import Post from './Post';

export default class Posts extends Component {
  componentWillMount() {
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
