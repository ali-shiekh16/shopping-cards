import './App.css';
import React, { useState, useEffect } from 'react';

import CardsBlock from './components/cardsBlock';

function App() {
  const [images, setImages] = useState([]);
  const [images2, setImages2] = useState([]);

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
        setImages2(prev =>
          res.hits.map((hit, index) => ({
            src: hit.largeImageURL,
            id: index,
            title: `Pants ${index + 1}`,
          }))
        )
      );
  }, []);

  return (
    <div className='container'>
      <div className='block-container'>
        <CardsBlock images={images} title='Casual Shoes' />
      </div>
      {/* <div className='block-container2'>
        <CardsBlock images={images2} title='Pants' />
      </div> */}
    </div>
  );
}

export default App;
