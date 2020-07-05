/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWordpressPost {
        edges {
          node {
            title
            slug
            date(formatString: "MM-DD-YYYY")
          }
        }
      }
    }

  `).then(result => {
    result.data.allWordpressPost.edges.forEach(({ node }) => {
      createPage({
        // Decide URL structure
        path: node.slug,
        // path to template
        component: path.resolve(`./src/pages/single-post.js`),
        context: {
          // This is the $slug variable
          // passed to single-post.js
          slug: node.slug,
        },
      })
    })
  })
};