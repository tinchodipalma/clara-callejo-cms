import React from 'react';
import { graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import SEO from '../../components/seo';
import Layout from '../../layouts/Layout';
import Aside from '../../components/Aside/Aside';

import './blog-post.css';

const BlogPostTemplate = (props) => {
  const post = props.data.markdownRemark;
  const siteTitle = props.data.allSiteJson.nodes[0].siteTitle;
  const author = props.data.allSiteJson.nodes[0].author;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <div className="BlogPostTemplate BlogPostTemplate__Container BlogPostTemplate__WithAside">
        <div className="BlogPostTemplate__Title MainSection__Title">
          <Typography variant="h4" color="secondary">
            {post.frontmatter.title}
          </Typography>
        </div>
        <div className="BlogPostTemplate__MainContainer">
          <div className="BlogPostTemplate__Main">
            <div className="BlogPostTemplate__Main__Image">
              <img src={post.frontmatter.image} alt={post.frontmatter.title} />
            </div>

            <div
              className="BlogPostTemplate__Main__Excerpt"
              dangerouslySetInnerHTML={{
                __html: post.frontmatter.description || post.excerpt,
              }}
            />

            <div
              className="BlogPostTemplate__Main__Content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            <div className="BlogPostTemplate__Main__Footer">
              <div className="BlogPostTemplate__Main__Footer__Author">
                {author}
              </div>
              <div className="BlogPostTemplate__Main__Footer__Date">
                {post.frontmatter.date}
              </div>
            </div>
          </div>

          <aside className="BlogPostTemplate__Aside">
            <Aside />
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
        date(formatString: "MMMM DD, YYYY")
        description
        image
      }
    }
  }
`;
