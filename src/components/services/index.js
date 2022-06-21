import * as React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"

const Services = () => {
  const { t } = useTranslation()

  return (
    <article>
      <h2>{t("Services")}</h2>

      <h3>{t("Tuning")}</h3>
      <p>{t("service_description_tuning")}</p>

      <h3>{t("Regulation")}</h3>
      <p>{t("service_description_regulation")}</p>

      <h3>{t("Repairs")}</h3>
      <p>{t("service_description_repairs")}</p>

      <h3>{t("Voicing/Intonation")}</h3>
      <p>{t("service_description_intonation")}</p>

      <h3>{t("Assessment")}</h3>
      <p>{t("service_description_assessment")}</p>

      <h3>{t("Additional Services")}</h3>
      <p>{t("service_description_additional_services")}</p>
    </article>
  )
}

export default Services