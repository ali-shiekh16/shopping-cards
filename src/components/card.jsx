import React from 'react';

function Card({ data: { src, title } }) {
  return (
    <div className='card'>
      <div className='card__img-wrapper'>
        <img src={src} className='card__img' />
        <h3 className='card__title'>{title}</h3>
      </div>
    </div>
  );
}

export default Card;
