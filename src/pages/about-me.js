import React from 'react';
import Layout from '../layouts/Layout';
import SEO from '../components/seo';
import AboutMe from '../components/AboutMe';

const AboutMePage = ({ location }) => (
  <Layout location={location} title="Sobre Mi">
    <SEO title="Sobre Mi" />
    <div className="AboutMePage AboutMePage__Container CustomPageTemplate__Container">
      <AboutMe />
    </div>
  </Layout>
);

export default AboutMePage;
