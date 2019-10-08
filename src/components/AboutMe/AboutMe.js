import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';

import './AboutMe.css';

const AboutMe = () => {
  const data = useStaticQuery(graphql`
    query AboutMeQuery {
      allAboutMeJson {
        nodes {
          groups {
            groupData
            groupTitle
          }
          images
        }
      }
    }
  `);

  const aboutMeData = data.allAboutMeJson.nodes[0];

  return (
    <div className="AboutMe AboutMe__Container">
      <div className="AboutMe__Title MainSection__Title">
        <Typography variant="h4" color="secondary">
          Sobre Mi
        </Typography>
      </div>
      <div className="AboutMe__Content">
        <div className="AboutMe__Images">

        </div>
        <div className="AboutMe__Data">
          <div className="AboutMe__Data__Col">

          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutMe;