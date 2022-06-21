import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "gatsby-plugin-react-i18next"

import Layout from "../components/layout/layout";
import Services from "../components/services";
import ContactComponent from "../components/contact"

const IndexPage = () => {
  const {t} = useTranslation()

  return (
    <Layout pageTitle={t('Piano Services')}>
      <StaticImage
        alt="Alvin Ahlgrim sitting and tuning a piano"
        src="../images/alvin-main-image.jpeg"
      />
      <p>
        {t("intro")}
      </p>
      <Services></Services>
      <ContactComponent></ContactComponent>
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

export default IndexPage;
