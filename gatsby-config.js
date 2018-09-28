require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

module.exports = {
  siteMetadata: {
    title: 'Magento PWA',
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: 'gatsby-plugin-apollo-shopify',
    //   options: {
    //     shopName: process.env.GATSBY_SHOPIFY_SHOP_NAME,
    //     accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
    //   },
    // },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: 'Magento',
        fieldName: 'magento',
        url: `https://magento23-beta.test/graphql`,
        // headers: {
        //   'X-Shopify-Storefront-Access-Token': process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
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
