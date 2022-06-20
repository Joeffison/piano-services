import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"

import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "./layout.module.css"

const Layout = ({ pageTitle, children }) => {
  const {t} = useTranslation()

  const {
    site: {
      siteMetadata: {
        title: websiteTitle
      }
    }
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <title>{pageTitle} | {websiteTitle}</title>
      <header className={siteTitle}>{websiteTitle}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">
              {t("Home")}
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">
              {t("About")}
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              {t("Blog")}
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout;
