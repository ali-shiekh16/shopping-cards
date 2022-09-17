import './App.css';
import React, { useState, useEffect, useRef } from 'react';

import CardsBlock from './components/cardsBlock';

function App() {
  const [images, setImages] = useState([]);

  const addTextTile = (title, isLarge = false) => ({
    src: '/images/transparent.png',
    id: Math.random() + Date.now(),
    overlayText: title,
    isLarge,
  });

  useEffect(() => {
    const itemsCount = 50;
    // Womens collection.
    fetch(
      `https://pixabay.com/api/?key=9900445-fb79d9b3cd549d8f93f1f8ddc&q=casual+shoes&image_type=photo&pretty=true&per_page=${itemsCount}`
    )
      .then(res => res.json())
      .then(res =>
        setImages(prev => [
          addTextTile('Womens collection', true),
          addTextTile('Shoes'),
          ...res.hits.map((hit, index) => ({
            src: hit.largeImageURL,
            id: index,
            title: `Casual Shoes ${index + 1}`,
          })),
        ])
      );

    fetch(
      `https://pixabay.com/api/?key=9900445-fb79d9b3cd549d8f93f1f8ddc&q=pants&image_type=photo&pretty=true&per_page=${itemsCount}`
    )
      .then(res => res.json())
      .then(res =>
        setImages(prev => {
          const images = res.hits.map((hit, index) => ({
            src: hit.largeImageURL,
            id: index,
            title: `Pants ${index + 1}`,
          }));

          return [...prev, addTextTile('wear pants'), ...images];
        })
      );

    // Mens collection.
    fetch(
      `https://pixabay.com/api/?key=9900445-fb79d9b3cd549d8f93f1f8ddc&q=wrist+watch&image_type=photo&pretty=true&per_page=${itemsCount}`
    )
      .then(res => res.json())
      .then(res =>
        setImages(prev => [
          ...prev,
          {
            src: '/images/transparent.png',
            id: Math.random() + Date.now(),
            overlayText: 'Collections',
            headerText: 'Meolaa',
            subText: "What's sustainable is fashionable",
          },
          addTextTile('Mens collection', true),
          addTextTile('Watch'),
          ...res.hits.map((hit, index) => ({
            src: hit.largeImageURL,
            id: index,
            title: `Watch ${index + 1}`,
          })),
        ])
      );

    fetch(
      `https://pixabay.com/api/?key=9900445-fb79d9b3cd549d8f93f1f8ddc&q=glasses+men&image_type=photo&pretty=true&per_page=${itemsCount}`
    )
      .then(res => res.json())
      .then(res =>
        setImages(prev => {
          const images = res.hits.map((hit, index) => ({
            src: hit.largeImageURL,
            id: index,
            title: `Glasses for men ${index + 1}`,
          }));

          return [...prev, addTextTile('Glasses'), ...images];
        })
      );

    // Children Collection

    fetch(
      `https://pixabay.com/api/?key=9900445-fb79d9b3cd549d8f93f1f8ddc&q=child&image_type=photo&pretty=true&per_page=${itemsCount}`
    )
      .then(res => res.json())
      .then(res =>
        setImages(prev => [
          ...prev,
          addTextTile('Children collection', true),
          addTextTile('outfits'),
          ...res.hits.map((hit, index) => ({
            src: hit.largeImageURL,
            id: index,
            title: `Outfits ${index + 1}`,
          })),
        ])
      );

    fetch(
      `https://pixabay.com/api/?key=9900445-fb79d9b3cd549d8f93f1f8ddc&q=toys&image_type=photo&pretty=true&per_page=${itemsCount}`
    )
      .then(res => res.json())
      .then(res =>
        setImages(prev => {
          const images = res.hits.map((hit, index) => ({
            src: hit.largeImageURL,
            id: index,
            title: `Toys ${index + 1}`,
          }));

          return [...prev, addTextTile('Toys'), ...images];
        })
      );
  }, []);

  // useEffect(() => {
  // }, [images]);

  return (
    <div className='container'>
      <CardsBlock images={images} title='Casual Shoes' />
    </div>
  );
}

export default App;
