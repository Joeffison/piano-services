import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby-plugin-react-i18next"

import Layout from "../../components/layout/layout"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
    {
      data.allMdx.nodes.map(node => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))
    }
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
  },
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        author
        date(formatString: "LL")
        title
      }
      parent {
        ... on File {
          modifiedTime(formatString: "LL")
        }
      }
      id
      slug
    }
  }
}
`

export default BlogPage
