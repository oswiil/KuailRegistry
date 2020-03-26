import React from "react"
import { Link, graphql } from "gatsby"
import "../components/styles.css"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Random from "../components/registryLinks"
import Card from "../components/cloud"
const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <div
      style={{
        background: "linear-gradient(to top, #000066, #66B2FF)",
      }}
    >
      <a href="https://kuailiandp.com">
        <img
          src="/KuaiLogo.png"
          style={{ position: "absolute", marginLeft: "3%", marginTop: "3%" }}
        />
      </a>
      <img className="cloud1" src="/Clouds.png"></img>
      <Card />

      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />

        <div
          style={{
            marginTop: "10%",
            color: "black",
            backgroundColor: "rgb(255,255,255,0.0200)",
            boxShadow: "0px 10px 20px 0px rgba(0,0,0,0.4)",
          }}
        >
          <Bio />
        </div>
        <Random />
        <div
          style={{
            marginTop: "0",
            webkitColumnCount: `2`,
            webkitColumnGap: `10
          px`,
            mozColumnCount: `2`,
            mozColumnGap: `10px`,
            columnCount: `2`,
            columnGap: `10px`,
          }}
        >
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article
                key={node.fields.slug}
                style={{
                  backgroundColor: "rgb(255,255,255,0.085)",
                  boxShadow: "0px 10px 20px 0px rgba(0,0,0,0.4)",
                  display: `flex`,
                  flexDirection: "column",
                  marginBottom: `10px`,
                  borderRadius: "10px solid",
                }}
              >
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
