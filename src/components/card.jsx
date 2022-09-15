import React from 'react';

function Card({ data: { src, title, overlayText } }) {
  const renderText = () => {
    if (!overlayText)
      return (
        <>
          <img src={src} className='card__img' />
          <h3 className='card__title'>{title}</h3>
        </>
      );

    return <h2 className='card__overlay-text'>{overlayText}</h2>;
  };

  const getWrapperClass = () =>
    `card__img-wrapper ${overlayText ? 'card__img-wrapper--no-shadow' : ''}`;

  console.log(getWrapperClass());

  return (
    <div className='card'>
      {/* <div className={`card__img-wrapper`}>{renderText()}</div> */}
      <div className={getWrapperClass()}>{renderText()}</div>
    </div>
  );
}

export default Card;
