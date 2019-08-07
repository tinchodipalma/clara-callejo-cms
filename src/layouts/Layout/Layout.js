import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer';

import './Layout.css';

const Layout = ({ className, children }) => (
  <div className="Layout">
    <Navbar />
    <main className="Layout__Main">
      <Paper className="Layout__Main__PaperContainer">
        <div className="Layout__Main__Content">{children}</div>
        <Footer />
      </Paper>
    </main>
  </div>
);

Layout.propTypes = {
  className: 'LayoutGenericLayout',
};

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
