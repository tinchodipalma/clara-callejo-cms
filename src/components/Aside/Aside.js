import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './Aside.css';

const Aside = () => {
  const data = useStaticQuery(graphql`
    query AsideQuery {
      allMarkdownRemark(filter: {frontmatter: {contentType: {eq: "aside-item"}, enabled: {eq: true}}}) {
        edges {
          node {
            frontmatter {
              contentType
              label
              link
              image
            }
          }
        }
      }
    }    
  `);

  const asideItems = data.allMarkdownRemark.edges.map(({ node: { frontmatter } }) => frontmatter);

  return (
    <div className="Aside">
      <ul className="Aside__List">
        {asideItems.map(({ image, link, label }, i) => (
          <li key={i} className="Aside__List__Item">
            <a href={link}>
              <div className="Aside__List__Item__Image">
                <img src={image} alt={label} />
              </div>
              <div className="Aside__List__Item__Label">
                {label}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Aside;
