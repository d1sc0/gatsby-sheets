import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default ({ data }) => {
  const post = data.googleSheetSomeDataRow
  return (
    <Layout>
      <div>
        <h2>{post.firstname} {post.lastname}</h2>
        <p>Email Address: {post.email}</p>
        <p>Favourite Animal: {post.animal}</p>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    googleSheetSomeDataRow(pageslug: { eq: $slug }) {
      firstname
      lastname
      email
      animal
      }
    }
`