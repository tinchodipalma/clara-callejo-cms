import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar/Navbar';

import './Layout.css';

const Layout = ({ children }) => (
  <div className="Layout">
    <Navbar />
    <main className="Layout__Main">{children}</main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
