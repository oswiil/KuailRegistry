import React from "react"
import { Link } from "gatsby"
import "../components/styles.css"
import { rhythm, scale } from "../utils/typography"
import Header from "./header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      className="layout"
      style={{
        backgroundColor: "black",
        color: `white`,
        margin: `0 auto`,
        marginRight: ` 0 auto`,
      }}
    >
      <Header siteTitle={"Kuailian Registry"} />
      <main>{children}</main>

      <footer>
        <div className="social-share-box">
          <li className="social-share-link">
            <a href="https://www.google.com" className="colorFace">
              Facebook
            </a>
          </li>
          <li className="social-share-link">
            <a href="https://www.google.com" className="colorTwitter">
              Twitter
            </a>
          </li>
          <li className="social-share-link">
            <a href="https://www.google.com" className="colorMail">
              Mail
            </a>
          </li>
        </div>
        <div className="GatsbyCopyright">
          <p>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
