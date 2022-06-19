import * as React from "react"
import { Link, graphql } from "gatsby"

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
{
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
