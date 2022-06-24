import * as React from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next"
import { StaticImage } from "gatsby-plugin-image"

import {
  container,
  logoImage,
  siteTitle,
  landingPageContainer
} from './landing_page.module.scss'

import BasicNavbar from "../navbar";

const LandingPage = ({ websiteTitle }) => {
  const {t} = useTranslation()

  return (
    <div className={landingPageContainer}>
      <BasicNavbar websiteTitle={websiteTitle}/>
      <div className={container}>
        <StaticImage className={logoImage}
          alt="Alvin Ahlgrim sitting and tuning a piano"
          src="../../images/logoNoText.png"
        />
        <header className={siteTitle}>
          Alvin Ahlgrim <br/>{websiteTitle}
          <p>{t("Serving Berlin, Potsdam and surrounding area")}</p>
          <p>{t("Piano tuner/technician")}</p>
        </header>
      </div>
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
    }
  }
`;

export default LandingPage