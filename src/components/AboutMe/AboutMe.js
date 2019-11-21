import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { IconButton, Typography } from '@material-ui/core';
import ChevronLeft from '@material-ui/icons/ChevronLeftRounded';
import ChevronRight from '@material-ui/icons/ChevronRightRounded';

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
          description
        }
      }
    }
  `);

  const aboutMeData = data.allAboutMeJson.nodes[0];
  const imagesLength = aboutMeData.images.length;

  const [activeImage, setActiveImage] = useState(0);

  const onPrevImage = () => {
    const newIndex = activeImage - 1 <= 0 ? 0 : activeImage - 1;
    setActiveImage(newIndex);
  };

  const onNextImage = () => {
    const max = imagesLength;
    const newIndex = activeImage + 1 >= max ? max : activeImage + 1;
    setActiveImage(newIndex);
  };

  return (
    <div className="AboutMe AboutMe__Container">
      <div className="AboutMe__Title MainSection__Title">
        <Typography variant="h4" color="secondary">
          Sobre Mi
        </Typography>
      </div>
      <div className="AboutMe__Content">
        <div className="AboutMe__Images">
          <div className="AboutMe__Images__Container">
            <div className="AboutMe__Images__Arrow AboutMe__Images__Arrow__Prev">
              <IconButton onClick={onPrevImage} disabled={activeImage === 0}>
                <ChevronLeft />
              </IconButton>
            </div>

            <div className="AboutMe__Images__Slider">
              {aboutMeData.images.map((image, i) => (
                <div className={`AboutMe__Images__Item ${i === activeImage ? 'active' : 'not-active'}`} key={i}>
                  <img src={image} alt={`Imagen Sobre Mi #${i + 1}`} />
                </div>
              ))}
              <div className="AboutMe__Images__Indicator">{activeImage + 1}/{imagesLength}</div>
            </div>

            <div className="AboutMe__Images__Arrow AboutMe__Images__Arrow__Next">
              <IconButton onClick={onNextImage} disabled={activeImage >= imagesLength - 1}>
                <ChevronRight />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="AboutMe__Data">
          <div className="AboutMe__Data__Description">
            {aboutMeData.description.slice(0, 500)}
          </div>
          <div className="AboutMe__Data__Groups">
            {aboutMeData.groups.map(({ groupTitle, groupData }, i) => (
              <div className="AboutMe__Data__Group" key={i}>
                <Typography variant="h6" color="secondary">
                  {groupTitle}
                </Typography>
                <div className="AboutMe__Data__Group__Content">
                  <ul className="AboutMe__Data__Group__Content__List">
                    {groupData.map((groupDataItem, j) => (
                      <li className="AboutMe__Data__Group__Content__List__Item" key={j}>
                        {groupDataItem}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;