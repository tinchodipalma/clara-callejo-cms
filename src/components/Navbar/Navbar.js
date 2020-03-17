import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/MenuRounded';
import CloseIcon from '@material-ui/icons/CloseRounded';
import Logo from '../Logo';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { PAGES_MENU_ITEMS } from './Navbar.constants';
import { Typography } from '@material-ui/core';

import './Navbar.css';

const MenuList = ({ items = [] }) => (
  <ul className="Navbar__Menu__List">
    {items.map(({ slug, name }, i) => (
      <li key={i} className="Navbar__Menu__List__Item">
        <Link to={slug.startsWith('/') ? slug : `/${slug}`}>{name}</Link>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: {
            fields: [frontmatter___menuOrder, frontmatter___date]
            order: [ASC, DESC]
          }
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
                path
                menuTitle
                menuOrder
              }
            }
          }
        }
      }
    `
  );

  const menuItems = allMarkdownRemark.edges
    .map(({ node }) => ({
      slug: (node.frontmatter.path || node.fields.slug).toLowerCase(),
      name: node.frontmatter.menuTitle || node.frontmatter.title,
    }))
    .concat(PAGES_MENU_ITEMS);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <AppBar
      position="sticky"
      className={`Navbar ${isMenuOpen ? 'Navbar--opened' : 'Navbar--closed'}`}
    >
      <Toolbar className="Navbar__Toolbar">
        <div className="Navbar__Col">
          <div className="Navbar__Logo">
            <Link to="/" title="Inicio">
              <Logo />

              <Typography
                variant="h6"
                color="secondary"
                className="Navbar__Slogan"
              >
                Clara Callejo
              </Typography>
            </Link>
          </div>
        </div>
        <div className="Navbar__Col"></div>
        <div className="Navbar__Col">
          <div className="Navbar__Menu">
            <div className="Navbar__Menu__Icon">
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={onMenuToggle}
              >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </div>
            <MenuList items={menuItems} />
          </div>
        </div>
      </Toolbar>
      <div className="Navbar__Fade" />
    </AppBar>
  );
};

export default Navbar;
