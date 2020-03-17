import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Landing from '../layouts/Landing';
import SEO from '../components/seo';
import Activities from '../components/Activities';
import Clients from '../components/Clients';
import Logo from '../components/Logo';
import Contact from '../components/Contact';

const LAYOUT_CLASSES = {
  default: 'HomeLayout',
  scrolling: 'HomeLayout HomeLayout--scroll',
};

const IndexPage = ({ data }) => {
  const landingConfig = data.allLandingJson.nodes[0];
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

  const homeSectionStyles = {
    background: `url('${landingConfig.cover}') 0% 0% / cover no-repeat rgb(250, 250, 250)`,
  };

  return (
    <Landing className={className}>
      <SEO
        title="Inicio"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <div
        className="HomeSection HomeSectionStartLayer"
        style={homeSectionStyles}
      >
        <div></div>
        <div className="HomeSection__Main">
          <Logo />
          <Typography variant="h3" color="secondary" className="Home__Slogan">
            {landingConfig.coverTitle}
          </Typography>
          <Typography variant="h5" className="Home__Slogan">
            {landingConfig.coverSubtitle}
          </Typography>
        </div>
      </div>

      {!!landingConfig.activitiesList && (
        <div className="HomeSection HomeSectionActivitiesLayer">
          <Activities />
        </div>
      )}

      {!!landingConfig.clientsList && (
        <div className="HomeSection HomeSectionClientsLayer">
          <Clients />
        </div>
      )}

      <div className="HomeSection HomeSectionContactLayer">
        <Contact />
      </div>
    </Landing>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query LandingQuery {
    allLandingJson {
      nodes {
        aboutMe
        activitiesList
        clientsList
        cover
        coverTitle
        coverSubtitle
      }
    }
  }
`;
