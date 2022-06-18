import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from "../components/layout/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Alvin Ahlgrim sitting and tuning a piano"
        src="../images/alvin-main-image.jpeg"
      />
    </Layout>
  )
}

export default IndexPage;
