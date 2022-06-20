import * as React from "react"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

import Layout from "../components/layout/layout"

const AboutPage = () => {
  const {t} = useTranslation()

  return (
    <Layout pageTitle="About Me">
      <p>
        {t("intro")}
      </p>
    </Layout>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default AboutPage