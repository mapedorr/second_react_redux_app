import React, { Component } from 'react';

export default class Albums extends Component {
  componentDidMount() {
    this.props.getAllAlbums();
  }

  render() {
    return (
      <div className='albums_page'>
        {this.props.albums.map((album, idx) => (
          <div className='album' key={idx}>
            <a href='/' className='album_title'>
              <span>{album.title}</span>
            </a>
          </div>
        ))}
        <h1 className={this.props.albums.length > 0 ? 'd-none' : ''}>
          Cargando...
        </h1>
      </div>
    );
  }
}
