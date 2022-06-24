import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

import ThemeProvider from 'react-bootstrap/ThemeProvider'

import {
  container,
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
      <div className={container}>
        <title>{pageTitle} | {websiteTitle}</title>
        <main>
          {children}
        </main>
      </div>
    </ThemeProvider>
  )
}

export default Layout;
