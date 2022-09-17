import { Masonry } from 'masonic';
import React, { useEffect, useState } from 'react';
import srcs from '../src';
import Card from './card';

function CardsBlock({ images, title }) {
  return (
    <div className='cards-block'>
      {/* <h2 className='cards-block__title text-fancy'>{title}</h2> */}
      {images && (
        <Masonry
          items={images}
          render={Card}
          columnGutter={15}
          columnWidth={350}
        />
      )}
    </div>
  );
}

export default CardsBlock;
