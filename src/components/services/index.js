import * as React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"

const Services = () => {
  const { t } = useTranslation()

  return (
    <article>
      <h2 id="services">{t("Services")}</h2>

      <h3 id="services/tuning">{t("Tuning")}</h3>
      <p>{t("service_description_tuning")}</p>

      <h3 id="services/regulation">{t("Regulation")}</h3>
      <p>{t("service_description_regulation")}</p>

      <h3 id="services/repairs">{t("Repairs")}</h3>
      <p>{t("service_description_repairs")}</p>

      <h3 id="services/intonation">{t("Voicing/Intonation")}</h3>
      <p>{t("service_description_intonation")}</p>

      <h3 id="services/assessment">{t("Assessment")}</h3>
      <p>{t("service_description_assessment")}</p>

      <h3 id="services/additional_services">{t("Additional Services")}</h3>
      <p>{t("service_description_additional_services")}</p>
    </article>
  )
}

export default Services