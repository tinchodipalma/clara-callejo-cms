import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Typography } from '@material-ui/core';
import PortofioItem from './PortfolioItem';

import './Portfolio.css';

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query PortfolioQuery {
      allPortfolioJson {
        nodes {
          portfolio {
            name
            context
            need
            strategy
            images
          }
        }
      }
    }
  `);

  const portfolioData = data.allPortfolioJson.nodes[0].portfolio;


  return (
    <div className="Portfolio Portfolio__Container">
      <div className="Portfolio__Title MainSection__Title">
        <Typography variant="h4" color="secondary">
          Portfolio
        </Typography>
      </div>
      <div className="Portfolio__Content">
        {portfolioData.map((item, i) => (
          <PortofioItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;