import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import { rhythm, scale } from "../utils/typography"

const BlogPostTemplate = ({ data, pageContext, location, config }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  const baseUrl = `https://kuailianregistry.netlify.com`
  const disqusConfig = {
    identifier: post.id,
    title: post.frontmatter.title,
    url: baseUrl + pageContext.slug,
  }
  return (
    <div
      style={{
        backgroundColor: `#003366`,
        boxShadow: "1px 1px 2em black",
      }}
    >
      <Layout
        location={location}
        title={siteTitle}
        style={{ boxShadow: "1px 1px 2em black" }}
      >
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />

        <article>
          <div
            style={{
              backgroundColor: "white",
              color: "black",
              padding: "10px 10%",
              textJustify: "justify",
            }}
          >
            <header>
              <h1
                style={{
                  color: "darkblue",
                  marginTop: rhythm(1),
                  marginBottom: 0,
                }}
              >
                {post.frontmatter.title}
              </h1>
              <p
                style={{
                  ...scale(-1 / 5),
                  display: `block`,
                  marginBottom: rhythm(1),
                }}
              >
                {post.frontmatter.date}
              </p>
            </header>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr
              style={{
                marginBottom: rhythm(1),
              }}
            />
            <footer>
              <CommentCount config={disqusConfig} placeholder={"..."} />

              <Disqus config={disqusConfig} />

              <nav>
                <ul
                  style={{
                    display: `flex`,
                    flexWrap: `wrap`,
                    justifyContent: `space-between`,
                    listStyle: `none`,
                    padding: 0,
                  }}
                >
                  <li>
                    {previous && (
                      <Link to={previous.fields.slug} rel="prev">
                        ← {previous.frontmatter.title}
                      </Link>
                    )}
                  </li>
                  <li>
                    {next && (
                      <Link to={next.fields.slug} rel="next">
                        {next.frontmatter.title} →
                      </Link>
                    )}
                  </li>
                </ul>
              </nav>
            </footer>
          </div>
        </article>
      </Layout>
    </div>
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
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
