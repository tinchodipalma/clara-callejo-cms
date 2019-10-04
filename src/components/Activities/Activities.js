import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';

import './Activities.css';

const Activities = () => {
  const data = useStaticQuery(graphql`
    query ActivitiesQuery {
      allMarkdownRemark(filter: {frontmatter: {contentType: {eq: "activity-item"}, enabled: {eq: true}}}) {
        edges {
          node {
            frontmatter {
              contentType
              title
              description
              image
            }
          }
        }
      }
    }    
  `);

  const activities = data.allMarkdownRemark.edges.map(({ node: { frontmatter } }) => frontmatter);

  if (!activities.length) {
    return null;
  }

  return (
    <div className="Activities">
      <div className="Activities__Title MainSection__Title">
        <Typography variant="h4" color="secondary">
          Actividades
        </Typography>
      </div>
      <div className="Activities__List">
        {activities.map(({ image, title, description }, i) => (
          <div key={i} className="Activities__List__Item">
            <div className="Activities__List__Item__Image">
              <img src={image} alt={title} />
            </div>
            <div className="Activities__List__Item__Data">
              <div className="Activities__List__Item__Data__Label">
                <Typography variant="subtitle1" color="secondary">
                  {title}
                </Typography>
              </div>
              <div className="Activities__List__Item__Data__Description">
                <Typography variant="body2">{description}</Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
