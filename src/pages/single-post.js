import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => {
  const post = data.allWordpressPost.edges[0].node
  console.log( post );
  return (
    <Layout>
      <div>
        <h1 className={"single-post"}>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <p> Categories: {post.categories.map( cat =>
          <span>{cat.name}</span>
        )} </p>
        <p> By: {post.author.name} </p>
        <p> On: {post.date} </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allWordpressPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
          slug
          date(formatString: "MM-DD-YYYY")
          author {
            name
          }
          categories {
            name
            link
          }
        }
      }
    }
  }`