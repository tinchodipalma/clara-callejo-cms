import React from 'react';
import Layout from '../layouts/Layout';
import SEO from '../components/seo';
import Portfolio from '../components/Portfolio';

const PortfolioPage = ({ location }) => (
  <Layout location={location} title="Portfolio">
    <SEO title="Portfolio" />
    <div className="PortfolioPage PortfolioPage__Container CustomPageTemplate__Container">
      <Portfolio />
    </div>
  </Layout>
);

export default PortfolioPage;
