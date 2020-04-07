import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      backgroundColor: "black",
      display: "flex",
    }}
  >
    <a href="https://kuailiandp.com">
      <img
        src="/KuaiLogo.png"
        style={{
          float: "right",
          position: "absolute",

          width: "150px",
        }}
      />
    </a>
    <div
      className="header"
      style={{
        margin: `0 auto`,
        maxWidth: "100%",
        display: "inline-block",
        padding: `1.45rem 1rem`,
      }}
    >
      {" "}
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            marginTop: "20px",
            color: "white",
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header