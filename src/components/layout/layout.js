import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "gatsby-plugin-react-i18next"

import ThemeProvider from 'react-bootstrap/ThemeProvider'

import BasicNavbar from "../navbar";

import {
  logoImage,
  container,
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
    <ThemeProvider bg="dark" variant="dark">
      <BasicNavbar websiteTitle={websiteTitle}/>
      <div className={container}>
        <StaticImage className={logoImage}
          alt="Alvin Ahlgrim sitting and tuning a piano"
          src="../../images/logoNoText.png"
        />
        <title>{pageTitle} | {websiteTitle}</title>
        <header className={siteTitle}>
          Alvin Ahlgrim <br/>{websiteTitle}
          <p>{t("Serving Berlin, Potsdam and surrounding area")}</p>
          <p>{t("Piano tuner/technician")}</p>
        </header>
        <main>
          {children}
        </main>
      </div>
    </ThemeProvider>
  )
}

export default Layout;
