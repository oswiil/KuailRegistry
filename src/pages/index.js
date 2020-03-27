import React from "react"
import { Link, graphql } from "gatsby"
import "../components/styles.css"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Random from "../components/registryLinks"

import { useSpring, animated } from "react-spring"

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
]
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
  }))
  return (
    <div className="background-index">
      <div className="background-video">
        <video id="myVideo" autoPlay loop muted>
          <source src="presentacion.mp4" type="video/mp4" />
        </video>
      </div>
      <a href="https://kuailiandp.com">
        <img
          src="/KuaiLogo.png"
          style={{ position: "absolute", marginLeft: "3%", marginTop: "3%" }}
        />
      </a>
      <Layout location={location} title={siteTitle} className="layout">
        <SEO title="All posts" />
        <Random />
        <div className="index_style">
          <Bio />
        </div>

        <div className="post-column">
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
                <article className="article-link-node" key={node.fields.slug}>
                  <header>
                    <h3>
                      <Link
                        style={{ boxShadow: `none`, color: `darkblue` }}
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
      </Layout>
    </div>
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
