import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import SEO from '../components/seo';

class Blog extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.allSiteJson.nodes[0].siteTitle;
    const posts = data.allMarkdownRemark.edges;
    console.log(posts);
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Blog" />
        <div style={{ margin: '20px 0 40px' }}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <div key={node.fields.slug}>
                <h3>
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            );
          })}
        </div>
      </Layout>
    );
  }
}

export default Blog;

export const pageQuery = graphql`
  query {
    allSiteJson {
      nodes {
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
          }
        }
      }
    }
  }
`;
