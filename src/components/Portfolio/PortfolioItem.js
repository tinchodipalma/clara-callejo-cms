import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography, IconButton } from '@material-ui/core';
import ChevronLeft from '@material-ui/icons/ChevronLeftRounded';
import ChevronRight from '@material-ui/icons/ChevronRightRounded';

const PortfolioItem = ({ name, context, need, strategy, images }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const nextImage = () => {
    let newActiveImageIndex = activeImageIndex + 1;
    if (newActiveImageIndex >= images.length) {
      newActiveImageIndex = 0;
    }

    setActiveImageIndex(newActiveImageIndex);
  };

  const prevImage = () => {
    let newActiveImageIndex = activeImageIndex - 1;
    if (newActiveImageIndex < 0) {
      newActiveImageIndex = images.length - 1;
    }

    setActiveImageIndex(newActiveImageIndex);
  };

  return (
    <div className="PortfolioItem PortfolioItem__Container">
      <div className="PortfolioItem__Images">
        {images.length > 1 &&
          <IconButton onClick={prevImage} disabled={activeImageIndex === 0}>
            <ChevronLeft />
          </IconButton>
        }
        {images.map((image, i) => (
          <img key={i} src={image} alt={`${name} #${i + 1}`} className={`PortfolioItem__Images__Image PortfolioItem__Images__Image--${activeImageIndex === i ? 'active' : 'hidden'}`} />
        ))}
        {images.length > 1 &&
          <IconButton onClick={nextImage} disabled={images.length - 1 === activeImageIndex}>
            <ChevronRight />
          </IconButton>
        }
      </div>
      <div className="PortfolioItem__Name">{name}</div>
      <div className="PortfolioItem__Data">
        <div className="PortfolioItem__Context">
          <Typography variant="subtitle1" color="secondary">
            Contexto
          </Typography>
          {context}
        </div>
        <div className="PortfolioItem__Need">
          <Typography variant="subtitle1" color="secondary">
            Necesidad
          </Typography>
          {need}
        </div>
        <div className="PortfolioItem__Strategy">
          <Typography variant="subtitle1" color="secondary">
            Estrategia
          </Typography>
          {strategy}
        </div>
      </div>
    </div>
  );
};

PortfolioItem.propTypes = {
  name: PropTypes.string.isRequired,
  context: PropTypes.string,
  need: PropTypes.string,
  strategy: PropTypes.string,
  images: PropTypes.array.isRequired,
};

export default PortfolioItem;
