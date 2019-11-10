require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

var cred = {
  "type": process.env.GATSBY_1,
  "project_id": process.env.GATSBY_2,
  "private_key_id": process.env.GATSBY_3,
  "private_key": process.env.GATSBY_4,
  "client_email": process.env.GATSBY_5,
  "client_id": process.env.GATSBY_6,
  "auth_uri": process.env.GATSBY_7,
  "token_uri": process.env.GATSBY_8,
  "auth_provider_x509_cert_url": process.env.GATSBY_9,
  "client_x509_cert_url": process.env.GATSBY_10
}

module.exports = {
  siteMetadata: {
    title: `Gatsby'n'Sheets`,
    description: `Kick off your next project with this copy of the default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@_disco`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
    resolve: 'gatsby-source-google-sheets',
    options: {
        spreadsheetId: '17FNz8R5YDdfnCXBeYbfjjyg6YiklNJsa7Qm6NtXPsXI',
        worksheetTitle: 'some-data',
        credentials: cred,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-disco`,
        short_name: `disco`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/disco-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
