module.exports = (options) => ({
  siteMetadata: {
    siteTitle: `Label Sneha Priya`,
    siteTitleAlt: `Sneha Priya`,
    siteHeadline: `Label Sneha Priya`,
    siteUrl: `https://jodie.lekoarts.de`,
    siteDescription: `Image-heavy photography portfolio with colorful accents & customizable pages.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@lekoarts_de`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-jodie-core`,
      options,
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-theme-ui`,
  ],
})
