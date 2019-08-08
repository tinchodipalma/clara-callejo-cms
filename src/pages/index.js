import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';

import Landing from '../layouts/Landing';
import SEO from '../components/seo';

const LAYOUT_CLASSES = {
  default: 'HomeLayout',
  scrolling: 'HomeLayout HomeLayout--scroll',
};

const BANNERS_DATA = [
  {
    img: '/assets/banners/facebook.jpg',
    label: 'Facebook',
  },
  {
    img: '/assets/banners/instragram.jpg',
    label: 'Instagram',
  },
  {
    img: '/assets/banners/twitter.jpg',
    label: 'Twitter',
  },
  {
    img: '/assets/banners/network.jpg',
    label: 'Otras Redes',
  },
];

const IndexPage = () => {
  const [className, setClassName] = useState(LAYOUT_CLASSES.default);

  const onScroll = (event) => {
    if (window.scrollY > 30) {
      setClassName(LAYOUT_CLASSES.scrolling);
    } else {
      setClassName(LAYOUT_CLASSES.default);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <Landing className={className}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <div className="HomeSection HomeSectionStartLayer">
        <div></div>
        <div className="HomeSection__Main">
          <Typography variant="h3" color="secondary" className="Home__Slogan">
            Clara Callejo
          </Typography>
          <Typography variant="h5" className="Home__Slogan">
            Asesoramiento en Comunicación
          </Typography>
        </div>
      </div>

      <div className="HomeSection HomeSectionBannersLayer">
        <div className="HomeSection__Grid">
          {BANNERS_DATA.map(({ img, label }, i) => (
            <div key={i} className="HomeSection__Grid__Item">
              <img
                src={img}
                alt={label}
                className="HomeSection__Grid__Item__Image"
              />
              <div className="HomeSection__Grid__Item__Label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </Landing>
  );
};

export default IndexPage;
