# gatsby-starter-magento2pwa

## Magento 2 PWA powered by Gatsby

This will be a POC Magento 2 PWA using the 2.3 GraphQL Endpoint & GatsbyJS.

Much of the current code was "stolen" from my Shopify PWA starter. They will end up using many of the same base ecommerce React components and core plumbing.

## High Level Project Goals

To show how one can interact with and utilize the Magento 2.3 Graphql Endpoints

## Install

### ENV

Copy .env.sample to .env.development and change the items to match your store. Make sure to add all .env keys and values in Netlify

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gil--/gatsby-starter-magento2pwa)

### Instructions

1. Have your Magento 2.3 store url (If it's https://www.MyMagentoStore.com, the store name would be www.MyMagentoStore.com, do not include a trailing slash or leading HTTP protocol) and [authorization token ready](https://devdocs.magento.com/guides/v2.3/graphql/send-request.html). Enter those as the environment variables after clicking the deploy button above.
2. Enable Netlify Identity in order to enable the Admin CMS. Go to `https://app.netlify.com/sites/YOURAPPNAME/identity` and click **Enable Identity**.