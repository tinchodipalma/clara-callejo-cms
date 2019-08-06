import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../layouts/Layout';

const CustomPageTemplate = (props) => {
  const post = props.data.markdownRemark;
  const siteTitle = props.data.site.siteMetadata.title;

  console.log(props.pageContext);

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <div className="CustomPageTemplate">
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export default CustomPageTemplate;

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
