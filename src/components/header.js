import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle, currentPathname }) => {
  if (currentPathname[currentPathname.length - 1] == "/") {
    currentPathname = currentPathname.substr(0, currentPathname.length - 1);
  }
  currentPathname = currentPathname.toString();
  const krUrl = currentPathname.replace(/\/kr|\/cn/, "kr");
  const cnUrl = currentPathname.replace(/\/kr|\/cn/, "cn");
  const upUrl = currentPathname.substr(0, currentPathname.lastIndexOf("/"));

  return (
    <div
      style={{
        background: '#BA0020',
        marginBottom: '1.45rem',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
        }}>
        <h1 style={{ margin: 0, display: "inline-block" }}>
          <Link
            to={upUrl}
            style={{
              color: 'white',
              textDecoration: 'none',
            }}>
            {siteTitle}
          </Link>
        </h1>
        <Link
          activeStyle={{ display: "none" }}
          to={krUrl}
          style={{
            color: 'white',
            textDecoration: 'none',
            margin: 5
          }}>
          한글
        </Link>
        <Link
          to={cnUrl}
          activeStyle={{ display: "none" }}
          style={{
            color: 'white',
            textDecoration: 'none',
            margin: 5
          }}>
          中文
        </Link>
      </div>
    </div>
  )
}

export default Header