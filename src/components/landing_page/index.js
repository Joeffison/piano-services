import * as React from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next"

import {
  container,
  logoImage,
  siteTitle,
  landingPageContainer
} from './landing_page.module.scss'


const LandingPage = ({ websiteTitle }) => {
  const {t} = useTranslation()

  return (
    <div className={landingPageContainer}>
      <div className={container}>
        <div className={logoImage}/>
        <header className={siteTitle}>
          Alvin Ahlgrim <br/>{websiteTitle}
          <p>{t("Serving Berlin, Potsdam and surrounding area")}</p>
          <p>{t("Piano tuner/technician")}</p>
        </header>
      </div>
    </div>
  )
}

export default LandingPage
