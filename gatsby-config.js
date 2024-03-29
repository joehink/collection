module.exports = {
  siteMetadata: {
    title: `Collection`,
    description: `My collection of sports cards`,
    author: `Joe Hinkley`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-csv`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `collection`,
        short_name: `collection`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/data/images/collection-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
        resolve: 'gatsby-plugin-web-font-loader',
        options: {
          google: {
            families: ['Work Sans:400,700,800']
          }
        }
    },
    `gatsby-plugin-sass`,
  ],
}
