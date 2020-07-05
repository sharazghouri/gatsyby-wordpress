import React from "react"
import { graphql, Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
export default ({ data }) => {
  return (
    <Layout>
      <SEO title="home" />
      <h1>Posts</h1>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div>

          <Link to={node.slug} className={"post-title"}>
            <h2 >{node.title}</h2>
          </Link>
          <div className={"content"} dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY" )
          categories {
            name
            link
          }
        }
      }
    }
  }`
