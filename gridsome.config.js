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
