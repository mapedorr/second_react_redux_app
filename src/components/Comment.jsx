import React, { Component } from 'react';

export default class Comment extends Component {
  render() {
    return (
      <div className='comment_wrapper'>
        <p className='comment_email'>{this.props.comment.email}</p>
        <p className='comment_body'>{this.props.comment.body}</p>
      </div>
    );
  }
}
