module.exports = {
  siteMetadata: {
    title: `Piano Services`,
    siteUrl: `https://alvinahlgrim.gtsb.io/`
  },
  plugins: [
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `locale`,
        path: `${__dirname}/locales`,
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`, `de`],
        defaultLanguage: `de`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `https://alvinahlgrim.gtsb.io/`,
        // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
        trailingSlash: 'always',
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false
        },
        pages: [
          {
            matchPath: '/:lang?/blog/:uid',
            getLanguageFromPath: true,
            excludeLanguages: ['es']
          },
          {
            matchPath: '/preview',
            languages: ['en']
          }
        ]
      }
    },
  ]
};
