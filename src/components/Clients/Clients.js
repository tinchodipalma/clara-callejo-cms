import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';

import './Clients.css';

const Clients = () => {
  const data = useStaticQuery(graphql`
    query ClientsQuery {
      allMarkdownRemark(filter: {frontmatter: {contentType: {eq: "client-item"}, enabled: {eq: true}}}) {
        edges {
          node {
            frontmatter {
              contentType
              label
              image
            }
          }
        }
      }
    }    
  `);

  const clients = data.allMarkdownRemark.edges.map(({ node: { frontmatter } }) => frontmatter);

  if (!clients.length) {
    return null;
  }

  return (
    <div className="Clients">
      <div className="Clients__Title MainSection__Title">
        <Typography variant="h4" color="secondary">
          Clientes
        </Typography>
      </div>
      <div className="Clients__List">
        {clients.map(({ image, label }, i) => (
          <div key={i} className="Clients__List__Item" title={label}>
            <img src={image} alt={label} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
