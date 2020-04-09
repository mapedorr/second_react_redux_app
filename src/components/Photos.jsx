import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Photos = (props) => {
  const { albumId } = useParams();

  useEffect(() => {
    props.getPhotosFor(albumId);
  }, []);

  return (
    <div className='photos_page'>
      {props.photos.map((photo, idx) => (
        <div className='photo'>
          <img
            src={`https://source.unsplash.com/random/500x500?v=${idx + 1}`}
            alt={photo.title}
            key={photo.id}
          />
        </div>
      ))}
      <h1 className={props.photos.length > 0 ? 'd-none' : ''}>
        Cargando fotos del álbum {albumId}...
      </h1>
    </div>
  );
};

export default Photos;
