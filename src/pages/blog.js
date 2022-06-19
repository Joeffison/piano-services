import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout/layout"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
    {
      data.allMdx.nodes.map(node => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.date}</p>
          <MDXRenderer>
            {node.body}
          </MDXRenderer>
        </article>
      ))
    }
    </Layout>
  )
}

export const query = graphql`
{
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        author
        date(formatString: "LL")
        title
      }
      id
      body
      parent {
        ... on File {
          modifiedTime(formatString: "LL")
        }
      }
    }
  }
}
`

export default BlogPage
