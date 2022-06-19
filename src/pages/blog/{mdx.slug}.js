import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../../components/layout/layout"

const BlogPost = ({ data }) => {
  const heroImage = getImage(data.mdx.frontmatter.hero_image)
  const heroImageAlt = data.mdx.frontmatter.hero_image_alt

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage
        image={heroImage}
        alt={heroImageAlt}
      />
      <p>
        Photo Credit:{" "}
        <a
          href={data.mdx.frontmatter.hero_image_credit_link}
          target="_blank"
          rel="noreferrer"
        >
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      author
      date(formatString: "LL")
      title
      hero_image_alt
      hero_image_credit_link
      hero_image_credit_text
      hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    parent {
      ... on File {
        modifiedTime(formatString: "LL")
      }
    }
    id
    body
    slug
  }
}
`

export default BlogPost