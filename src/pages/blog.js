import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import SEO from '../components/seo';
import Aside from '../components/Aside/Aside';
import { Typography } from '@material-ui/core';

const Blog = ({ data, location }) => {
  const siteTitle = data.allSiteJson.nodes[0].siteTitle;
  const author = data.allSiteJson.nodes[0].author;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog" />
      <div className="BlogPage BlogPage__Container BlogPage__WithAside">
        <div className="BlogPage__MainContainer">
          <div className="BlogPage__Title MainSection__Title">
            <Typography variant="h4" color="secondary">
              Blog
            </Typography>
          </div>
          <div className="BlogPage__Content">
            {posts.map(({ node }) => (
              <Link
                key={node.fields.slug}
                to={node.fields.slug}
                className="BlogPage__Content__Item"
              >
                <Typography
                  variant="h6"
                  color="secondary"
                  className="BlogPage__Content__Item__Title"
                >
                  {node.frontmatter.title}
                </Typography>

                <div className="BlogPage__Content__Item__Data">
                  <div className="BlogPage__Content__Item__Image">
                    <img
                      src={node.frontmatter.image}
                      alt={node.frontmatter.title}
                    />
                  </div>

                  <div
                    className="BlogPage__Content__Item__Description"
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </div>
                <div className="BlogPage__Content__Item__Metadata">
                  <small>{author}</small>
                  <small>{node.frontmatter.date}</small>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <aside className="BlogPage__Aside">
          <Aside />
        </aside>
      </div>
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query {
    allSiteJson {
      nodes {
        author
        siteTitle
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { enabled: { eq: true }, contentType: { eq: "blog-post" } }
      }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            title
            description
            image
          }
        }
      }
    }
  }
`;
