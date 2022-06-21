import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"

import {
  logoImage,
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
      <StaticImage className={logoImage}
        alt="Alvin Ahlgrim sitting and tuning a piano"
        src="../images/logoNoText.png"
      />
      <title>{pageTitle} | {websiteTitle}</title>
      <header className={siteTitle}>
        Alvin Ahlgrim <br/>{websiteTitle}
        <p>{t("Serving Berlin, Potsdam and surrounding area")}</p>
        <p>{t("Piano tuner/technician")}</p>
      </header>
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
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout;
