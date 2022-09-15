import './App.css';
import React, { useState, useEffect } from 'react';

import CardsBlock from './components/cardsBlock';
import Card from './components/card';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(
      'https://pixabay.com/api/?key=9900445-fb79d9b3cd549d8f93f1f8ddc&q=casual+shoes&image_type=photo&pretty=true&per_page=50'
    )
      .then(res => res.json())
      .then(res =>
        setImages(prev =>
          res.hits.map((hit, index) => ({
            src: hit.largeImageURL,
            id: index,
            title: `Casual Shoes ${index + 1}`,
          }))
        )
      );

    fetch(
      'https://pixabay.com/api/?key=9900445-fb79d9b3cd549d8f93f1f8ddc&q=pants&image_type=photo&pretty=true&per_page=50'
    )
      .then(res => res.json())
      .then(res =>
        setImages(prev => {
          const images = res.hits.map((hit, index) => ({
            src: hit.largeImageURL,
            id: index,
            title: `Pants ${index + 1}`,
          }));
          return [
            ...prev,
            {
              src: '/images/transparent.png',
              id: Math.random() + Date.now(),
              overlayText: 'Pants',
            },
            ...images,
          ];
        })
      );
  }, []);

  console.log(images);

  return (
    <div className='container'>
      <CardsBlock images={images} title='Casual Shoes' />
    </div>
  );
}

export default App;
