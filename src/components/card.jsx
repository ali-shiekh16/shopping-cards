import React, { useRef } from 'react';

function Card({
  data: { subText, headerText, src, title, overlayText, isLarge = false },
}) {
  const ref = useRef();

  if (subText) console.log(ref);

  const renderText = () => {
    if (!overlayText)
      return (
        <>
          {title && <img src={src} className='card__img' />}
          {headerText && (
            <img
              src={
                'https://images.pexels.com/photos/3974146/pexels-photo-3974146.jpeg'
              }
              className='card__img'
            />
          )}
          <h3 className='card__title'>{title}</h3>
        </>
      );

    if (overlayText && subText && headerText)
      return (
        <>
          <h2 className='card__overlay-header-text'>{headerText}</h2>
          <h2 className='card__overlay-text card__overlay-text--large card__overlay-text--xl text-fancy'>
            {overlayText}
          </h2>
          <h2 className='card__overlay-subtext'>{subText}</h2>
        </>
      );

    return (
      <h2
        className={`card__overlay-text ${
          isLarge ? 'card__overlay-text--large' : ''
        } text-fancy`}
      >
        {overlayText}
      </h2>
    );
  };

  const getWrapperClass = () => {
    if (overlayText && subText && headerText)
      return 'card__img-wrapper--xl card__img-wrapper card__img-wrapper--no-shadow ';

    return `card__img-wrapper ${
      overlayText ? 'card__img-wrapper--no-shadow' : ''
    }`;
  };

  return (
    <div ref={ref} className='card'>
      <div className={getWrapperClass()}>{renderText()}</div>
    </div>
  );
}

export default Card;
