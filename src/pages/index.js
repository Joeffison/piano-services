import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <StaticImage
        alt="Alvin Ahlgrim sitting and tuning a piano"
        src="../images/alvin-main-image.jpeg"
      />
      <p>
        As a life-long pianist, Alvin began working in a piano shop in the United States in 2003.
        Since then, he has received training from expert piano technicians across the United States,
        as well as technicians from Germany, Austria, Japan, and China.
        As a result, great pride, care, and craftsmanship are a part of every job.
        Service is gladly provided in English or in German.
      </p>
    </Layout>
  )
}

export default IndexPage;
