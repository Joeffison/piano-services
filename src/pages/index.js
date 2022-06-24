import * as React from "react"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

import LandingPage from "../components/landing_page";
import Layout from "../components/layout/layout";
import Services from "../components/services";
import ContactComponent from "../components/contact"

const IndexPage = ({ data }) => {
  const {t} = useTranslation()
  const websiteTitle = data.site.siteMetadata.title

  return (
    <div>
      <LandingPage websiteTitle={websiteTitle}/>
      <Layout pageTitle={t('Piano Services')}>
        <p id="about">
          {t("intro")}
        </p>
        <Services></Services>
        <ContactComponent></ContactComponent>
      </Layout>
    </div>
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
    },
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default IndexPage;
