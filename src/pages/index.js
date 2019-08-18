import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';

import Landing from '../layouts/Landing';
import SEO from '../components/seo';
import CCLogo from '../../public/assets/logos/CC.svg';
import Activities from '../components/Activities/Activities';

const LAYOUT_CLASSES = {
  default: 'HomeLayout',
  scrolling: 'HomeLayout HomeLayout--scroll',
};

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
          <img src={CCLogo} alt="Clara Callejo Logo" />
          <Typography variant="h3" color="secondary" className="Home__Slogan">
            Clara Callejo
          </Typography>
          <Typography variant="h5" className="Home__Slogan">
            Asesoramiento en Comunicación
          </Typography>
        </div>
      </div>

      <div className="HomeSection HomeSectionActivitiesLayer">
        <Activities />
      </div>
    </Landing>
  );
};

export default IndexPage;
