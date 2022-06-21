import * as React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"

const ContactComponent = () => {
  const { t } = useTranslation()

  return (
    <article>
      <h2>{t("Contact")}</h2>

      <p>{t("service_description_contact_email")}</p>
      <p>{t("service_description_contact_phone")}</p>
    </article>
  )
}

export default ContactComponent