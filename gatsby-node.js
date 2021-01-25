const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    query {
      allContentfulBlog {
        totalCount
        edges {
          node {
            slug
            title
            publishedDate(formatString: "Do MMMM, YYYY")
            body {
              raw
              references {
                fluid {
                  src
                }
              }
            }
            featuredImage {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `);
  data.allContentfulBlog.edges.forEach((edge) => {
    createPage({
      path: `/blogs/${edge.node.slug}`,
      component: path.resolve("./src/components/templates/blog.tsx"),
      context: {
        data: edge.node,
        totalLength: data.allContentfulBlog.totalCount,
      },
    });
  });
};
