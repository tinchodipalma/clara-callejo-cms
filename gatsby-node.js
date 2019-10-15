const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPostComponent = path.resolve(`./src/templates/blog-post.js`);
  const customPageComponent = path.resolve(`./src/templates/CustomPage/index.js`);
  return graphql(
    `
      {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 1000, filter: {frontmatter: {enabled: {eq: true}}}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                path
                contentType
              }
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    const edges = result.data.allMarkdownRemark.edges;

    edges.forEach((edge, index) => {
      let edgePath = edge.node.frontmatter.path || edge.node.fields.slug;
      let component = customPageComponent;

      if (edge.node.frontmatter.contentType !== 'page') {
        edgePath = `blog${edgePath}`;
        component = blogPostComponent;
      }

      createPage({
        path: edgePath.toLowerCase(),
        component,
        context: {
          slug: edge.node.fields.slug,
        },
      });
    });

    return null;
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
