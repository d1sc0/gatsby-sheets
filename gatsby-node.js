/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async function({ actions, graphql }) {
    const { data } = await graphql(`
      query {
        allGoogleSheetSomeDataRow(limit: 5) {
            edges {
              node {
                pageslug
              }
            }
          }
        }
    `)
    data.allGoogleSheetSomeDataRow.edges.forEach(edge => {
      const slug = edge.node.pageslug
      actions.createPage({
        path: slug,
        component: require.resolve(`./src/templates/post.js`),
        context: { slug: slug },
      })
    })
  }