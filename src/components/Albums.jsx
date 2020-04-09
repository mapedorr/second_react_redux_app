import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Albums extends Component {
  componentDidMount() {
    this.props.getAllAlbums();
  }

  render() {
    return (
      <div className='albums_page'>
        {this.props.albums.map((album, idx) => (
          <div className='album' key={idx}>
            <Link to={`/photos/${album.id}`} className='album_title'>
              <span>{album.title}</span>
            </Link>
          </div>
        ))}
        <h1 className={this.props.albums.length > 0 ? 'd-none' : ''}>
          loading...
        </h1>
      </div>
    );
  }
}
