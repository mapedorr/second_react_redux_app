import React, { Component } from 'react';

export default class Albums extends Component {
  componentWillMount() {
    this.props.getAllAlbums();
  }

  render() {
    return (
      <div className='albums_page h-100'>
        {this.props.albums.map((album, idx) => (
          <div className='album' key={idx}>
            <a href='/' className='album_title'>
              <span>{album.title}</span>
            </a>
          </div>
        ))}
      </div>
    );
  }
}
