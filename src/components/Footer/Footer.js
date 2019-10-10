import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './Footer.css';

const SOCIAL_MEDIA_MAP = {
  facebook: '/assets/social/Facebook.png',
  instagram: '/assets/social/Instagram.png',
  linkedin: '/assets/social/LinkedIn.png',
  twitter: '/assets/social/Twitter.png',
  youtube: '/assets/social/Youtube.png',
  pinterest: '/assets/social/Pinterest.png',
  snapchat: '/assets/social/Snapchat.png',
  tiktok: '/assets/social/Tiktok.png',
  tumblr: '/assets/social/Tumblr.png',
};

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allSiteJson {
        nodes {
          author
          contactEmail
          contactPhone
          socialNetworks {
            facebook
            instagram
            linkedin
            twitter
            youtube
            pinterest
            snapchat
            tiktok
            tumblr
          }
        }
      }
    }    
  `);

  const footerData = data.allSiteJson.nodes[0];
  const socialNetworksKeys = Object.keys(footerData.socialNetworks).filter(k => footerData.socialNetworks[k] && footerData.socialNetworks[k].length);

  return (
    <footer className="Footer">
      <div className="Footer__Col">
        <ul className="Footer__Col__List">
          <li>
            {footerData.author}
          </li>
          <li>
            {footerData.contactEmail}
          </li>
          <li>
            {footerData.contactPhone}
          </li>
        </ul>
      </div>
      <div className="Footer__Col">
        <ul className="Footer__Col__List Footer__SocialNetworksList">
          {socialNetworksKeys.map((snk, i) => (
            <li className="Footer__SocialNetworksList__Item" key={i}>
              <a href={footerData.socialNetworks[snk]} title={snk.toUpperCase()}>
                <img src={SOCIAL_MEDIA_MAP[snk]} alt={snk.toUpperCase()} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="Footer__Col Footer__DevelopedBy">
        <code>
          &lt;Made with <span className="heart" aria-label="love" role="img" title="love">♥</span> by Tincho /&gt;
        </code>
      </div>
    </footer>
  );
};

export default Footer;
