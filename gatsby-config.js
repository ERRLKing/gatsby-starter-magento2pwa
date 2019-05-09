require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

module.exports = {
  siteMetadata: {
    title: 'Magento PWA',
    backendUrl: `http://${process.env.MAGENTO_STORE_URL}`,
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    // TODO: make magento apollo client plugin
    // {
    //   resolve: 'gatsby-plugin-apollo-magento2',
    //   options: {
    //     shopUrl: process.env.MAGENTO_STORE_URL,
    //     accessToken: process.env.MAGENTO_STORE_AUTHORIZATION_TOKEN,
    //   },
    // },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: 'Magento',
        fieldName: 'magento',
        url: `http://${process.env.MAGENTO_STORE_URL}/graphql`,
        // headers: {
        //   'Authorization': `Bearer ${process.env.MAGENTO_STORE_AUTHORIZATION_TOKEN},
        // },
      },
    },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
