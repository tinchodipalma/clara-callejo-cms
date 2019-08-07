import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer';

import './Landing.css';

const Landing = ({ className, children }) => (
  <div className={`LandingLayout ${className}`}>
    <Navbar />
    <main className="LandingLayout__Main">
      <div className="LandingLayout__Main__Content">{children}</div>
      <Footer />
    </main>
  </div>
);

Landing.propTypes = {
  className: 'LandingGenericLayout',
};

Landing.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Landing;
