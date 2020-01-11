import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="SheetsData" />
        <h2>Data from Google Sheets</h2>
        <p>Grabbing data from this <a href="https://docs.google.com/spreadsheets/d/17FNz8R5YDdfnCXBeYbfjjyg6YiklNJsa7Qm6NtXPsXI/edit#gid=152787366">google sheet</a> at 
        build time using the Google Sheets API and graphQL.</p>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Favourite Animal</th>
            </tr>
          </thead>
          <tbody>
            {data.allGoogleSheetSomeDataRow.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.firstname}</td>
                <td>{node.lastname}</td>
                <td>{node.email}</td>
                <td>{node.animal}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </Layout>
  )
}
export const query = graphql`
query {
  allGoogleSheetSomeDataRow {
    edges {
      node {
        firstname
        lastname
        email
        animal
      }
    }
  }
}
`