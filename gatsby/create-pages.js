
'use strict';

const path = require('path');
const createPostsPages = require('./pagination/create-posts-pages.js');

const createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // 404
  createPage({
    path: '/404',
    component: path.resolve('./src/templates/not-found-template.js')
  });

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(formatString: "DD MMMM, YYYY")
              title
              template
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.edges
  if (posts.length > 0) {
    posts.forEach((postEdge, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1]
      const next = index === 0 ? null : posts[index - 1]

      createPage({
        path: postEdge.node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          slug: postEdge.node.fields.slug,
          previous,
          next,
        },
      })
    })
  }

  await createPostsPages(graphql, actions);
}

module.exports = createPages;
