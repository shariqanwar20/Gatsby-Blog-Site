const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        forceFullSync: true,
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyCEjT5KE7ePYLLGdV5NG2dXvn5cFu10Foc",
          authDomain: "gatsby-blog-authentication.firebaseapp.com",
          projectId: "gatsby-blog-authentication",
          storageBucket: "gatsby-blog-authentication.appspot.com",
          messagingSenderId: "811914413945",
          appId: "1:811914413945:web:90aeeea7e2f7f66f3e51a8",
        },
      },
    },
  ],
};
