import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Overlay from './Overlay.jsx'

const Photos = (props) => {
  const { albumId } = useParams();
  const randi = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  let [ clickedImg, setClickedImg ] = useState({});

  // Se envía un arreglo vacío al hook de efecto para que sólo lo aplique una vez.
  useEffect(() => {
    props.getPhotosFor(albumId);
    // Lo que debe hacer cuando se desmonté el componente.
    return () => props.cleanPhotos();
  }, []);

  return (
    <div className='photos_page'>
      
      <Overlay
        src={clickedImg.url}
        title={clickedImg.title}
        close={() => setClickedImg({})}
      />

      {props.photos.map((photo, idx, arr) => (
        <div
          className='photo'
          style={{
            '--column-span': idx <= arr.length * 0.7 ? randi(1, 4) : 1,
            '--row-span': idx <= arr.length * 0.7 ? randi(1, 4) : 1,
          }}>
          <img
            src={photo.url}
            alt={photo.title}
            title={photo.title}
            key={photo.id}
          />
          <div className='photo_hover' onClick={() => setClickedImg(photo)}>
            <div className='photo_view'>clic para abrir</div>
          </div>
        </div>
      ))}
      <h1 className={props.photos.length > 0 ? 'd-none' : ''}>
        Cargando fotos del álbum {albumId}...
      </h1>
    </div>
  );
};

export default Photos;
