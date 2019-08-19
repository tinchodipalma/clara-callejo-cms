import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useStaticQuery, graphql, Link } from 'gatsby';
import CCLogo from '../../../public/assets/logos/CC.svg';

import './Navbar.css';

const Navbar = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: {
            frontmatter: {
              contentType: { eq: "page" }
              menu: { eq: true }
              enabled: { eq: true }
            }
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                menuTitle
              }
            }
          }
        }
      }
    `
  );

  const menuItems = allMarkdownRemark.edges.map(({ node }) => ({
    slug: node.fields.slug,
    name: node.frontmatter.menuTitle || node.frontmatter.title,
  }));

  return (
    <AppBar position="sticky" className="Navbar">
      <Toolbar className="Navbar__Toolbar">
        <div className="Navbar__Col">
          <div className="Navbar__Logo">
            <img src={CCLogo} alt="Clara Callejo Logo" />
          </div>
        </div>
        <div className="Navbar__Col"></div>
        <div className="Navbar__Col">
          <div className="Navbar__Menu">
            <div className="Navbar__Menu__Icon">
              <IconButton edge="end" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            </div>
            <ul className="Navbar__Menu__List">
              {menuItems.map(({ slug, name }, i) => (
                <li key={i} className="Navbar__Menu__List__Item">
                  <Link to={slug}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
