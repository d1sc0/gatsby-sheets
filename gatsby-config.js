require("dotenv").config({
 path: `.env`,
})

var GSAobj = JSON.parse(process.env.GSA_API_KEY)
console.log(GSAobj)
//var GSAobj = {
//  "type": process.env.ACC_TYPE,
//  "project_id": process.env.PROJ_ID,
//  "private_key_id": process.env.PRIV_KEYID,
//  "private_key": str2,
//  "client_email": process.env.CLIENT_M,
//  "client_id": process.env.CLIENT_I,
//  "auth_uri": process.env.AUT_URI,
//  "token_uri": process.env.AUT_TOK,
//  "auth_provider_x509_cert_url": process.env.AUT_XCERT,
//  "client_x509_cert_url": process.env.AUT_XCLI
//}
//console.log(str2)

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
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '17FNz8R5YDdfnCXBeYbfjjyg6YiklNJsa7Qm6NtXPsXI',
          worksheetTitle: 'some-data',
          credentials: GSAobj,
        },
      },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}