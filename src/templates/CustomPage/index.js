import React from 'react';
import { graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import SEO from '../../components/seo';
import Layout from '../../layouts/Layout';
import Aside from '../../components/Aside/Aside';

import './custom-page.css';

const CustomPageTemplate = (props) => {
  const post = props.data.markdownRemark;
  const siteTitle = props.data.allSiteJson.nodes[0].siteTitle;

  console.log(props.pageContext, props);

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <div className={`CustomPageTemplate CustomPageTemplate__Container ${post.frontmatter.aside ? 'CustomPageTemplate__WithAside' : 'CustomPageTemplate__WithoutAside'}`}>
        <div className="CustomPageTemplate__Title MainSection__Title">
          <Typography variant="h4" color="secondary">
            {post.frontmatter.title}
          </Typography>
        </div>
        <div className="CustomPageTemplate__MainContainer">
          <div className="CustomPageTemplate__Main" dangerouslySetInnerHTML={{ __html: post.html }} />
          {!!post.frontmatter.aside &&
            <aside className="CustomPageTemplate__Aside">
              <Aside />
            </aside>
          }
        </div>
      </div>
    </Layout>
  );
};

export default CustomPageTemplate;

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    allSiteJson {
      nodes {
        author
        siteTitle
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        aside
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
