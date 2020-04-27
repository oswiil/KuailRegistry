import ReactPlayer from "react-player"
import React from "react"
import { Link, graphql } from "gatsby"
import "../components/styles.css"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Random from "../components/registryLinks"
import { rhythm } from "../utils/typography"

/**
 *
 * @param {generarPost} param0
 */
const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle} className="layout">
      <SEO title="All posts" />
      <div
        className="video_player"
        style={{
          padding: `${rhythm(2)} `,
          marginTop: 0,
          backgroundImage:
            "radial-gradient(farthest-corner at 45px 45px , #FF0000 0%, #0000FF 100%)",
        }}
      >
        <ReactPlayer
          id="myVideo"
          url="https://www.youtube.com/watch?v=gqw6rBEZjeU&t=18s"
          volume={0.01}
          playing={true}
          width={1000}
          heigth={1000}
          ligth={true}
        ></ReactPlayer>
        <Random />
      </div>

      <div className="background-index">
        <div className="index_style">
          <Bio />
        </div>

        <div
          className="post-column"
          style={{
            padding: "20px 5% ",
          }}
        >
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug

            return (
              <div className="row">
                <article
                  className="article-link-node"
                  key={node.fields.slug}
                  style={{
                    backgroundColor: "black",

                    color: "white",
                    padding: `${rhythm(1)} `,
                    boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.4)",
                    marginTop: "1%",
                  }}
                >
                  <big style={{ float: "right" }}>{node.frontmatter.step}</big>
                  <header>
                    <h3>
                      <Link
                        style={{
                          boxShadow: `none`,
                          color: `white`,
                          outline: `black`,
                        }}
                        to={node.fields.slug}
                      >
                        {title}
                      </Link>
                    </h3>

                    <small>{node.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </section>
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            step
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
