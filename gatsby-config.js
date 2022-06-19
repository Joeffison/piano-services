module.exports = {
  siteMetadata: {
    title: `Piano Services`,
    siteUrl: `https://alvinahlgrim.gtsb.io/`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-transformer-sharp",
  ]
};