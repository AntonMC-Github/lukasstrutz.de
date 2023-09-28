// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/assets/sass/globals.scss")]
    });
}

module.exports = {
  siteName: "lukasstrutz.de",
  siteDescription: "Moin! Ich bin Lukas. Ich begeistere mich für Technik aller Art. In meiner Freizeit arbeite ich an diversen Projekten.",
  siteUrl: "https://lukasstrutz.de",
  titleTemplate: "%s",
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        
      }
    },
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [ // locales list
          'de-de',
          'en-gb'
        ],
        pathAliases: { // path segment alias for each locales
          'de-de': 'de',
          'en-gb': 'en'
        },
        fallbackLocale: 'en-gb', // fallback language
        defaultLocale: 'en-gb', // default language
        enablePathRewrite: true, // rewrite path with locale prefix, default: true
        rewriteDefaultLanguage: true, // rewrite default locale, default: true
        messages: {
          'de-de': require('./src/locales/de-de.json'),
          'en-gb': require('./src/locales/en-gb.json'),
        }
      }
    }
  ],
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ["vue-modules", "vue", "normal-modules", "normal"];

    types.forEach(type => {
      addStyleResource(config.module.rule("scss").oneOf(type));
    });
  }
};
