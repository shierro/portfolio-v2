module.exports = {
  pathPrefix: "/portfolio-v2",
  siteMetadata: {
    siteTitle: `Theo`,
    siteTitleAlt: `Theo's Latest Website Portfolio`,
    siteHeadline: `Theo's portfolio cloned from @lekoarts`,
    siteUrl: `https://shierro.github.io/portfolio-v2`,
    siteDescription: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@theo`,
    basePath: `/portfolio-v2`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        lessBabel: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `G-PKS8X40PN7`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        // anonymize: true,
      },
    },
  ].filter(Boolean),
}
