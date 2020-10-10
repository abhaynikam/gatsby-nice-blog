import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = pageContext;
  const isPostTemplate = post.frontmatter.template === "post";
  const isNextPostTemplate = next && next.node.frontmatter.template === "post";

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        itemScope
        className="blog-post"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
      </article>
      {isPostTemplate && (
        <>
          <nav className="blog-post-nav">
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li className="blog-post-nav-prev">
                {previous && (
                  <Link to={previous.node.fields.slug} rel="prev">
                    ← {previous.node.frontmatter.title}
                  </Link>
                )}
              </li>
              {isNextPostTemplate && (
                <li className="blog-post-nav-next">
                  {next && (
                    <Link to={next.node.fields.slug} rel="next">
                      {next.node.frontmatter.title} →
                    </Link>
                  )}
                </li>
              )}
            </ul>
          </nav>
          <hr />
        </>
      )}

      <footer><Bio /></footer>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        template
      }
    }
  }
`
