import React, { Component } from 'react';
import Comment from './Comment.jsx';

export default class Post extends Component {
  componentDidMount() {
    this.props.getAllCommentsFor(this.props.post.id);
  }

  render() {
    const post = this.props.post;
    const postComments = this.props.comments[post.id] || [];

    return (
      <div className='post_wrapper'>
        <button className='to_top'>Top</button>
        <h2 className='post_title'>{post.title}</h2>
        <p className='post_body'>{post.body}</p>
        {postComments.map((comment, idx) => (
          <Comment comment={comment} key={idx} {...this.props} />
        ))}
        <p className={`loading ${postComments.length > 0 ? 'd-none' : ''}`}>
          cargando comentarios...
        </p>
      </div>
    );
  }
}
