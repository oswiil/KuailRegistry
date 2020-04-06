import ReactPlayer from "react-player"
import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import "../components/styles.css"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Random from "../components/registryLinks"
import { rhythm, scale } from "../utils/typography"
import { useSpring, animated } from "react-spring"

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
]
const trans = (x, y, s) =>
  `perspective(10000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
  }))
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
            margin: "5%",
          }}
        >
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug

            return (
              <animated.div
                onMouseMove={({ clientX: x, clientY: y }) =>
                  set({ xys: calc(x, y) })
                }
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{
                  transform: props.xys.interpolate(trans),
                }}
              >
                <article
                  className="article-link-node"
                  key={node.fields.slug}
                  style={{
                    color: "black",
                    padding: `${rhythm(1)} `,
                    boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  <header>
                    <h3>
                      <Link
                        style={{
                          boxShadow: `none`,
                          color: `darkblue`,
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
              </animated.div>
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
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
