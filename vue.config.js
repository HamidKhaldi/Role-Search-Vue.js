/* eslint-disable prettier/prettier */
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://eyapi.ambertrack.global/',
        "secure": "false",
        "logLevel": "debug",
        "changeOrigin": true
      },
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import "@/assets/scss/_tools/_variables.scss";
            @import "@/assets/scss/_tools/_mixins.scss";
            @import "@/assets/scss/_tools/_helpers.scss";
            @import "@/assets/scss/_base/_base.scss";
            @import "@/assets/scss/_base/_typography.scss";
            @import "@/assets/scss/_media/_print.scss";
            @import "@/assets/scss/_third-party/_normalize.scss";
            @import "@/assets/scss/_third-party/_sass-mq.scss";
            @import "@/assets/scss/style.scss";
          `,
      },
    },
  },

  publicPath: "./",
  // process.env.NODE_ENV === "production"
  //   ? "./"
  // //   : "./",
  // pages: {
  //   index: {
  //     // entry for the page
  //     entry: "src/main.js",
  //     // the source template
  //     template: "public/searchable-roles.aspx",
  //     // output as dist/index.html
  //     filename: "searchable-roles.aspx",
  //     // when using title option,
  //     // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
  //     title: "Searchable Roles",
  //     // chunks to include on this page, by default includes
  //     // extracted common chunks and vendor chunks.
  //     chunks: ["chunk-vendors", "chunk-common", "index"],
  //   },
  // },
};
